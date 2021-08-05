import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { DateBanner } from "../components/blog/DateBanner"
import { ArticleRow } from "../components/blog/ArticleRow"
import { useState } from "react"
import { FilterModal } from "../components/blog/FilterModal"
import { useSelector } from "react-redux"

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

const MONTHS = {
  '01': 'january',
  '02': 'february',
  '03': 'march',
  '04': 'april',
  '05': 'may',
  '06': 'june',
  '07': 'july',
  '08': 'august',
  '09': 'september',
  '10': 'october',
  '11': 'november',
  '12': 'december'
}

const getFormattedBannerDateString = (rawDateString: string) => {
  const parts = rawDateString.split(`-`)
  const year = parts[0]
  const month = parts[1]
  return `${MONTHS[month].toUpperCase()} - ${year}`
}

const BlogPage = ({ data }) => {
    const [showModal, setShowModal] = useState(false)
    // TODO: Filter blog feed by categories
    const activeCategories = useSelector((state: any) => state.blog.activeCategories)
    // TODO: Filter blog feed by text
    const filterText = useSelector((state: any) => state.blog.filterText)
    const articleEdges = data.allSanityArticle.edges
    const categories = []
    articleEdges.forEach(edge => {
      if (!!edge.node.categories) {
        edge.node.categories.forEach(cat => categories.push(cat.title))
      }
    })

    const filteredByText = filterText !== ``
    const filteredByCategory = activeCategories.length > 0
    return (
        <Layout>
            {showModal ? 
              <div className="flex justify-center">
                <div className="modal-overlay"/>
                <FilterModal 
                  categories={categories}
                  setHideFilterModal={() => setShowModal(false)}
                />
              </div>
            : null}
              <div className="blog-feed">
                {/* <DateBanner dateString={dateString}/> */}
                {articleEdges.map((edge, index) => {
                  let displayArticle = true
                  if (filteredByCategory) {
                    if (!edge.node.categories.some(cat => activeCategories.includes(cat.title))) displayArticle = false
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
                        // Only pass the first paragraph for "preview"
                        previewText={edge.node._rawBody[0]}
                        image={edge.node.image.asset.gatsbyImageData}
                        slug={edge.node.slug.current}
                      />
                    )
                  }
                  const rowDate = edge.node.publishDate
                  let currentDateString = getFormattedBannerDateString(rowDate)
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
                    dateBannerJsx = <DateBanner dateString={currentDateString} setShowFilterModal={() => setShowModal(true)}/>
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
    )
}

export default BlogPage
