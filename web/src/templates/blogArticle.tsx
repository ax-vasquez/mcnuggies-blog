import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import serializers from '../serializers'
import { SanityArticle } from '../../graphql-types'
import {
    HeroImage,
    HeroImageContainer,
    StyledBlockContent,
} from '../components/styled-components/common'
import { device } from '../style/devices'
import { THEME } from '../style/colors'
import { CategoryList } from '../components/common/CategoryList'

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

const StyledArticleDiv = styled.div` 
    margin-top: 1rem;
    margin: auto;
    width: 100%;
    @media ${device.mobileS} {
        width: 90%;
    }
    @media ${device.laptop} {
        padding-left: 0px;
        padding-right: 0px;
    }
`

const StyledArticleTitleDiv = styled.div`
    & {
        h1 {
            font-size: 3rem;
            line-height: 1;
            font-weight: 300;
        }
        p {
            font-style: italic;
            color: ${THEME.light.font.accent};
        }
    }
`

const StyledArticleBodyDiv = styled.div`
    font-size: 1.125rem;
    line-height: 1.75rem;
    & {
        h1 {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }
        h2 {
            font-size: 1.875rem;
            line-height: 2.25rem;
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
            <StyledArticleDiv>
                <StyledArticleTitleDiv>
                    <h1>{title}</h1>
                    <p>{publishDate}</p>
                    <CategoryList categories={categories} />
                </StyledArticleTitleDiv>
                <StyledArticleBodyDiv>
                    <StyledBlockContent blocks={_rawBody} serializers={serializers} />
                </StyledArticleBodyDiv>
            </StyledArticleDiv>
        </Layout>
    )
}

export default BlogArticle
