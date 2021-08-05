import React from 'react'
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { GatsbyImage } from 'gatsby-plugin-image'
import BlockContent from '@sanity/block-content-to-react'
import serializers from '../serializers'
import { EmbeddedCategoryFilterLabel } from '../components/blog/EmbeddedCategoryLabel'

export const query = graphql`
query($slug: String!){
    sanityArticle(slug: {current: {eq: $slug}}) {
        title
        image {
            asset {
            gatsbyImageData
            }
        }
        publishDate
        _rawBody(resolveReferences: {maxDepth: 4})
        categories {
            title
        }
    }
}
`

const BlogArticle = ({ pageContext, data }) => {
    const { slug } = pageContext
    const {
        title,
        image,
        publishDate,
        _rawBody,
        categories
    } = data.sanityArticle
    return (
        <Layout>
            <div className="hero-image-container">
                <GatsbyImage image={image.asset.gatsbyImageData} alt="stars" className="hero-image"/>
            </div>
            <div className="article">
                <div className="article-detail">
                    <h1>{title}</h1>
                    <p className="mt-2">{publishDate}</p>
                        {categories.length > 0 ? 
                            <div className="embedded-category-grid">
                                {categories.map(cat => (
                                    <div key={`embedded-category-${cat.title}`}>
                                        <EmbeddedCategoryFilterLabel label={cat.title}/>
                                    </div>
                                ))}
                            </div>
                        : null }
                </div>
                <div className="article-body">
                    <BlockContent className={`block-content`} blocks={_rawBody} serializers={serializers}/>
                </div>
            </div>
        </Layout>
    )
}

export default BlogArticle
