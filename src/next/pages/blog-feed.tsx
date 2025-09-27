import { useState, useMemo } from 'react'
import { NextPage } from "next"
import { PageLayout } from "../components/layout/PageLayout"
import sanityClient from "../sanity/client"
import kebabCase from "../util/kebabCase"
import {PortableText} from '@portabletext/react'
import FeedItem from "../components/feedItem/FeedItem"
import { SanityBlock, SanityKeyed } from 'sanity-codegen'
import { Category } from '../components/shared/Category'
import { NoMatchFound } from '../components/pages/blog-feed/NoMatchFound'
import styles from './BlogFeed.module.scss'
import { Modal } from '../components/shared/modal/Modal'
import BlogFeedControls from '../components/pages/blog-feed/BlogFeedControls'

type ArticleResponse = {
  title: string
  slug: {
    current: string
  }
  summary: Array<SanityKeyed<SanityBlock>>
  publishDate: string
  categories: { title: string }[]
}

interface NextPageProps {
    allArticles: ArticleResponse[]
}

const BlogFeed: NextPage<NextPageProps> = ({ allArticles }) => {

    const [activeCategories, setActiveCategories] = useState([] as string[])
    const [searchText, setSearchText] = useState(``)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    /**
     * Handler to add/remove active categories to the stateful array
     * 
     * If the `activeCategories` list already contains the given category string,
     * then it's removed from the array. Otherwise, the string is added to the 
     * `activeCategories` stateful array.
     */
    const categoryFilterHandler = (category: string) => {
      if (activeCategories.includes(category)) {
        const copy = [...activeCategories]
        const i = copy.indexOf(category)
        copy.splice(i, 1)
        setActiveCategories(copy)
      } else {
        setActiveCategories([...activeCategories, category])
      }
    }

    /**
     * Helper method to grab all categories belonging to the given article
     */
    const categoriesForArticle = (article: ArticleResponse) => {
      const articleCategoriesObj = {}
      article.categories.forEach(cat => articleCategoriesObj[cat.title] = 0)
      return Object.keys(articleCategoriesObj)
    }

    /**
     * Memoized list of all *distinct* categories, extracted from the current list of articles.
     */
    const allCategories = useMemo(() => {
      const obj = {}
      allArticles.forEach(article => article.categories.forEach(cat => obj[cat.title] = 0))
      return Object.keys(obj).sort()
    }, [allArticles])

    /**
     * Memoized list of articles to show
     * 
     * If no active categories are selected **and** there is no search text, all articles are displayed ("unfiltered view").
     * 
     * If active categories are selected:
     * * The only articles shown are those who:
     *    * Have every active category listed in their categories and...
     *    * ARE NOT missing any active categories (in other words, if 4 categories are active, but a given article only has 3 of them, then that article won't be shown)
     * * Searching by text should further-filter the **subset** of articles (meaning, it should only search the articles whose categories are
     *    currently active)
     */
    const shownArticles = useMemo(() => {

      /**
       * Helper method to determine if an article should be shown, based on the currently-selected active
       * categories.
       */
      const articleShouldBeVisible = (article: ArticleResponse) => {
        const articleCategories = categoriesForArticle(article)
        if (activeCategories.every(activeCategory => articleCategories.includes(activeCategory))) return true
        return false
      }

      if (activeCategories.length === 0 && searchText.length === 0) {
        return allArticles
      }

      const shownArticles = [...allArticles] as ArticleResponse[]
      if (activeCategories.length > 0) {
        allArticles.forEach((article) => {
          if (!articleShouldBeVisible(article)) {
            shownArticles.splice(shownArticles.indexOf(shownArticles.filter(art => art.title === article.title)[0]), 1)
          }
        })
      }
      if (searchText.length > 0) {
        return shownArticles.filter(article => article.title.toLowerCase().includes(searchText.toLowerCase()))
      }

      return shownArticles
    }, [activeCategories, allArticles, searchText])

    return (
      <PageLayout
            pageTitle="Blog"
            metaDescription={`Searchable & filterable blog feed for ${process.env.HOST}`}
        >
        <div style={{
          display: `flex`,
          justifyContent: `center`,
          marginTop: `2rem`,
          marginBottom: `2rem`
        }}>
          <h1>mcnuggies.dev - blog</h1>
        </div>
        <BlogFeedControls
          searchText={searchText}
          searchTextHandler={(e) => setSearchText(e.target.value)}
          filterButtonHandler={() => setModalIsOpen(!modalIsOpen)}
        />
        <div className={styles.blogFeed}>
          { shownArticles.length > 0 ?
              shownArticles
              .map(article => {
                        const rowKey = `article-row-${kebabCase(article.title).toLowerCase()}`
                        return (
                          <FeedItem
                                title={article.title!}
                                href={`/blog/${article.slug!.current.toLowerCase()}`}
                                key={rowKey}
                                textContent={(
                                  <PortableText
                                        value={article.summary!}
                                    />
                                )}
                            />
                        )
                })
            :
              <NoMatchFound query={searchText}/>
            }
        </div>
        <Modal
              title={`Filters`}
              isOpen={modalIsOpen}
              onClose={() => setModalIsOpen(false)}
        >
          <div className={styles.categoriesWrapper}>
            <h3>Categories</h3>
            <ul className={styles.categoriesFilters}>{allCategories.map(category => (<li key={`category-${kebabCase(category)}`}><Category isActive={activeCategories.includes(category)} onClick={() => categoryFilterHandler(category)} key={`cat-item-${kebabCase(category)}`} title={category} /></li>))}</ul>
          </div>
        </Modal>
      </PageLayout>
    )
}

export async function getStaticProps() {
    const allArticles = await sanityClient.fetch(`
      *[_type == "article"]{
          title,
          slug,
          summary,
          publishDate,
          categories[]->{title}
      } | order(publishDate desc)
    `) as ArticleResponse[]

    return {
      props: {
        allArticles
      }
    }
}

export default BlogFeed
