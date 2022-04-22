import { useState, useMemo } from 'react'
import { NextPage } from "next"
import { PageLayout } from "../components/layout/PageLayout"
import client from "../sanity/client"
import kebabCase from "../util/kebabCase"
import {PortableText} from '@portabletext/react'
import FeedItem from "../components/feedItem/FeedItem"
import { SanityBlock, SanityKeyed } from 'sanity-codegen'
import { Category } from '../components/shared/Category'

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

    const allCategories = useMemo(() => {
      const obj = {}
      allArticles.forEach(article => article.categories.forEach(cat => obj[cat.title] = 0))
      return Object.keys(obj).sort()
    }, [allArticles])

    const shownArticles = useMemo(() => {
      if (activeCategories.length === 0) {
        return allArticles
      }

      const shownArticles = [] as ArticleResponse[]
      allArticles.forEach((article) => {
        if (article.categories.every(cat => activeCategories.includes(cat.title))) {
          shownArticles.push(article)
        }
      })
      return shownArticles
    }, [activeCategories, allArticles])

    return (
      <PageLayout
            pageTitle="Blog"
            imgSrc="/generic-blog.jpeg"
        >
        <div className='blog-controls'>
          <ul className='categories-filter'>{allCategories.map(category => (<Category isActive={activeCategories.includes(category)} onClick={() => categoryFilterHandler(category)} key={`cat-item-${kebabCase(category)}`} title={category} />))}</ul>
        </div>
        <div className="blog-feed">
          {shownArticles
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
                })}
        </div>
      </PageLayout>
    )
}

export async function getStaticProps() {
    const allArticles = await client.fetch(`
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
