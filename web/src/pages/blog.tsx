import React from 'react'
import { graphql } from 'gatsby'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import DateBanner from '../components/blog/DateBanner'
import ArticleRow from '../components/blog/ArticleRow'
import { SanityArticle, SanityCategory } from '../../graphql-types'
import BlogFilterModal from '../components/blog/BlogFilterModal'
import * as styles from './blog.module.scss'

export const query = graphql`
query{
    allSanityArticle(sort: {fields: publishDate, order: DESC}) {
        edges {
          node {
            title
            image {
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
            publishDate
            _rawBody
            _rawSummary
            categories {
              title
            }
          }
        }
    }
    allSanityCategory(sort: {order: ASC, fields: title}) {
      edges {
        node {
          title
        }
      }
    }
}
`

export const MONTHS = {
    '01': `January`,
    '02': `February`,
    '03': `March`,
    '04': `April`,
    '05': `May`,
    '06': `June`,
    '07': `July`,
    '08': `August`,
    '09': `September`,
    10: `October`,
    11: `November`,
    12: `December`,
}

const getFormattedBannerDateString = (rawDateString: string) => {
    const parts = rawDateString.split(`-`)
    const year = parts[0]
    const month = parts[1]
    return `${MONTHS[month].toUpperCase()} - ${year}`
}

type SanityArticleNode = {
    node: SanityArticle
}

type SanityCategoryNode = {
    node: SanityCategory
}

/**
 * Helper method to make the filtering logic a little more readable
 * 
 * This works by checking that the given article is only displayed if it has every
 * active category. This ensures that enabling more categories makes the filtering
 * more restrictive as a user would expect.
 * 
 * @param article                   the article to potentially display in the blog feed list
 * @param activeCategories          the currently-active categories (e.g., the ones the user currently has enabled on the blog feed)
 * @returns                         true if the article should be displayed, otherwise false
 */
const shouldDisplayArticle = (article: SanityArticle, activeCategories: string[]) => {
    const categoryNameArray = article.categories.map((cat) => cat.title)
    if (activeCategories.every((category) => categoryNameArray.includes(category))) return true
    return false
}

const BlogPage = ({ data }: { data: {
    allSanityArticle: {
        edges: SanityArticleNode[]
    }
    allSanityCategory: {
        edges: SanityCategoryNode[]
    }
} }) => {
    const activeCategories = useSelector((state: any) => state.blog.activeCategories)
    const showModal = useSelector((state: any) => state.blog.showModal)
    const filterText = useSelector((state: any) => state.blog.filterText)
    const articleEdges = data.allSanityArticle.edges
    const categories = []
    articleEdges.forEach((edge) => {
        if (edge.node.categories) {
            edge.node.categories.forEach((cat) => {
                if (!categories.includes(cat.title)) categories.push(cat.title)
            })
        }
    })

    const filteredByText = filterText !== ``
    const filteredByCategory = activeCategories.length > 0
    return (
        <>
            {showModal ? <BlogFilterModal categories={categories} /> : null}
            <Layout>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>mcnuggies | Blog</title>
                </Helmet>
                <h1>Blog</h1>
                <div className={styles.container}>
                    {articleEdges.map((edge, index) => {
                        let displayArticle = true
                        if (filteredByCategory) {
                            if (!shouldDisplayArticle(edge.node, activeCategories)) displayArticle = false
                        }
                        if (filteredByText) {
                            if (displayArticle) {
                                if (!(edge.node.title).toLowerCase().includes(filterText.toLowerCase())) displayArticle = false
                            }
                        }
                        let articleJsx: JSX.Element
                        let dateBannerJsx: JSX.Element
                        if (displayArticle) {
                            articleJsx = (
                                <ArticleRow
                                  title={edge.node.title}
                                  publishDate={edge.node.publishDate}
                                  categories={edge.node.categories}
                                  previewText={edge.node._rawSummary}
                                  image={edge.node.image.asset.gatsbyImageData}
                                  slug={edge.node.slug.current}
                                />
                            )
                        }
                        const rowDate = edge.node.publishDate
                        const currentDateString = getFormattedBannerDateString(rowDate)
                        let addDateBanner = false
                        if (index > 0) {
                            const prevRowDate = articleEdges[index - 1].node.publishDate
                            const prevDateString = getFormattedBannerDateString(prevRowDate)
                            if (prevDateString !== currentDateString) {
                                addDateBanner = true
                            }
                        } else {
                            addDateBanner = true
                        }

                        if (addDateBanner) {
                            dateBannerJsx = <DateBanner dateString={currentDateString} />
                        }

                        return (
                            <div key={`blog-feed-row-${edge.node.slug.current}`}>
                                {dateBannerJsx}
                                {articleJsx}
                            </div>
                        )
                    })}
                </div>
            </Layout>
        </>
    )
}

export default BlogPage
