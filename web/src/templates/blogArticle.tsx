import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import serializers from '../serializers'
import EmbeddedCategoryFilterLabel from '../components/blog/EmbeddedCategoryLabel'
import { SanityArticle } from '../../graphql-types'
import {
    HeroImage,
    HeroImageContainer,
    StyledBlockContent
} from '../components/styled-components/common'
import styled from "styled-components"
import { device } from '../style/devices'
import { COLORS } from '../style/colors'

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
    text-align: justify;
    width: 100%;
    @media ${device.mobileL} {
        padding-left: 1rem;
        padding-right: 1rem;
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
            color: ${COLORS.gray[500]};
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

const StyledEmbeddedCategoryGrid = styled.div`
    gap: 1rem;
    margin-top: 1rem;
    display: grid;
    @media ${device.mobileL} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media ${device.laptop} {
        grid-template-columns: repeat(6, minmax(0, 1fr));
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
            <HeroImageContainer>
                <HeroImage image={image.asset.gatsbyImageData} alt={`article-hero-image`} />
            </HeroImageContainer>
            <StyledArticleDiv>
                <StyledArticleTitleDiv>
                    <h1>{title}</h1>
                    <p>{publishDate}</p>
                    {categories.length > 0
                        ? (
                            <StyledEmbeddedCategoryGrid>
                                {categories.map((cat) => (
                                    <div key={`embedded-category-${cat.title}`}>
                                        <EmbeddedCategoryFilterLabel label={cat.title} />
                                    </div>
                                ))}
                            </StyledEmbeddedCategoryGrid>
                        )
                        : null }
                </StyledArticleTitleDiv>
                <StyledArticleBodyDiv>
                    <StyledBlockContent blocks={_rawBody} serializers={serializers} />
                </StyledArticleBodyDiv>
            </StyledArticleDiv>
        </Layout>
    )
}

export default BlogArticle
