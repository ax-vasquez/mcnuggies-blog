import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import Layout from '../components/Layout'
import serializers from '../serializers'
import EmbeddedCategoryFilterLabel from '../components/blog/EmbeddedCategoryLabel'
import { SanityArticle } from '../../graphql-types'
import {
    HeroImage,
    HeroImageContainer
} from '../components/styled-components/common'
import styled from "styled-components"
import tw from "twin.macro"

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

const StyledArticleDiv = styled.div.attrs({
    className: 'mt-4 px-4 md:px-0'
})`
    ${tw`text-justify`}
    ${tw`w-full`}
`

const StyledArticleTitleDiv = styled.div.attrs({
    className: ''
})`
    ${tw``}
    & {
        h1 {
            ${tw`text-5xl`}
            ${tw`font-light`}
        }
        p {
            ${tw`text-gray-500 italic`}
        }
    }
`

const StyledArticleBodyDiv = styled.div.attrs({
    className: ''
})`
    ${tw`text-lg`}
    & {
        h1 {
            ${tw`text-4xl`}
        }
        h2 {
            ${tw`text-3xl`}
        }
    }
`

const StyledBlockContent = styled(BlockContent).attrs({
    className: ''
})``

const StyledEmbeddedCategoryGrid = styled.div.attrs({
    className: 'gap-4 mt-4'
})`
    ${tw`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6`}
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
                    <p className="mt-2">{publishDate}</p>
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
