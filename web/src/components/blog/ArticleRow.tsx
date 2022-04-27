import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import styled from 'styled-components'
import serializers from '../../serializers'
import { THEME } from '../../style/colors'
import { device } from '../../style/devices'
import { SanityCategory } from '../../../graphql-types'
import { CategoryBadge } from '../common/CategoryBadge'

const StyledArticleRowLink = styled(Link)`
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    border-top: solid;
    border-bottom: solid;
    border-width: 2px;
    border-color: ${THEME.light.border.default};
    display: flex;
    &:hover {
        background-color: ${THEME.light.background.defaultHovered};
    }
`

const StyledArticleThumbnailContainer = styled.div`
    height: 12rem;
    width: 12rem;
    align-content: center;
    flex-wrap: wrap;
    @media ${device.mobileS} {
        display: none;
    }
    @media ${device.laptop} {
        display: flex;
    }
`

const StyledArticleThumbnail = styled(GatsbyImage)`
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
`

const StyledArticleRowDetails = styled.div`
    height: 100%;
    width: 100%;
    margin-left: 1rem;
`

const StyledArticleRowTitleLine = styled.div`
    padding-top: 0.25rem;
    width: 100%;
`

const StyledBlockContent = styled(BlockContent)`
    display:table-cell;
    vertical-align:middle;
`

const StyledArticleContentPreview = styled.div`
    bottom: 1rem;
    margin-right: 1rem;
    font-style: italic;
    color: ${THEME.light.font.blockquote};
`

const StyledArticleTitle = styled.h3`
    display: inline-block;
    font-weight: 300;
    font-size: 2.25rem;
    color: ${THEME.light.font.heading};
    margin-top: auto;
    margin-bottom: auto;
`

const StyledArticlePublishDate = styled.p`
    display: block;
    font-style: italic;
    color: ${THEME.light.font.accent};
    margin-top: 0;
    margin-bottom: 2rem;
`

const StyledCategoryList = styled.ul`
    padding-left: 0 !important;
    margin-top: 1rem;
    margin-bottom: 2rem;
    & {
        li:first-child {
            margin-left: 0;
        }
    }
`

const ArticleRow = (
    {
        title, publishDate, image, previewText, slug, categories,
    }:
    {
        title: string,
        publishDate: string,
        image: IGatsbyImageData,
        previewText: string,
        slug: string,
        categories: SanityCategory[]
    },
) => {

    return (
        <StyledArticleRowLink to={slug}>
            <StyledArticleThumbnailContainer>
                <StyledArticleThumbnail image={image} alt={`${title}_thumb`} />
            </StyledArticleThumbnailContainer>
            <StyledArticleRowDetails>
                <StyledArticleRowTitleLine>
                    <StyledArticleTitle>{title}</StyledArticleTitle>
                    <StyledArticlePublishDate>{publishDate}</StyledArticlePublishDate>
                </StyledArticleRowTitleLine>
                <StyledCategoryList>
                    {categories.map((category) => <CategoryBadge category={category} />)}
                </StyledCategoryList>
                <StyledArticleContentPreview>
                    <StyledBlockContent
                      blocks={previewText}
                      serializers={{
                            ...serializers,
                            marks: {},
                        }}
                    />
                </StyledArticleContentPreview>
            </StyledArticleRowDetails>
        </StyledArticleRowLink>
    )
}

export default ArticleRow
