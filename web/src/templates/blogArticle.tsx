import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import BlockContent from '@sanity/block-content-to-react'
import Layout from '../components/Layout'
import serializers from '../serializers'
import { SanityArticle } from '../../graphql-types'
import {
    HeroImage,
    HeroImageContainer,
} from '../components/styled-components/common'
import { CategoryList } from '../components/common/CategoryList'
import * as styles from './blogArticle.module.scss'

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

const BlogArticle = ({ data }: { data: {
    sanityArticle: SanityArticle
} }) => {
    const {
        title,
        image,
        publishDate,
        _rawBody,
        categories,
    } = data.sanityArticle
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`mcnuggies | ${title}`}</title>
            </Helmet>
            <HeroImageContainer>
                <HeroImage image={image.asset.gatsbyImageData} alt="article-hero-image" />
            </HeroImageContainer>
            <div className={styles.container}>
                <div className={styles.titleRow}>
                    <h1>{title}</h1>
                    <p>{publishDate}</p>
                    <CategoryList categories={categories} />
                </div>
                <div className={styles.article}>
                    <BlockContent blocks={_rawBody} serializers={serializers} />
                </div>
            </div>
        </Layout>
    )
}

export default BlogArticle
