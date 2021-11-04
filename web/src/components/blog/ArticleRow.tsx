import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import serializers from '../../serializers'
import styled from "styled-components"
import { COLORS } from '../../style/colors'
import { device } from '../../style/devices'

const StyledArticleRowLink = styled(Link)`
    height: 16.666667%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding-right: 1rem;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    background-color: ${COLORS.gray[100]};
    border-radius: 0.25rem;
    &:hover {
        background-color: ${COLORS.gray[200]};
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
    & {
        h3 {
            font-weight: 200;
            font-size: 2.25rem;
            line-height: 2.5rem;
            color: ${COLORS.purple[700]};
        }
        p {
            font-style: italic;
            color: ${COLORS.gray[600]};
            float: right;
        }
    }
`

const StyledBlockContent = styled(BlockContent)`
    display:table-cell;
    vertical-align:middle;
`

const StyledArticleContentPreview = styled.div`
    height: 100%;
    font-style: italic;
    color: ${COLORS.gray[600]};
`

const StyledArticleTitle = styled.h3`
    display: inline-block;
    margin-top: auto;
    margin-bottom: auto;
`

const StyledArticlePublishDate = styled.p`
    display: inline-block;
`

const ArticleRow = (
    {
        title, publishDate, image, previewText, slug,
    }:
    {
        title: string,
        publishDate: string,
        image: IGatsbyImageData,
        previewText: string,
        slug: string
    },
) => {

    // Truncate by word length since truncating by character limits can lead to unintended words being used
    const truncateTitle = (title: string) => {
        const parts = title.split(' ')
        if (parts.length > 6) {
            return `${parts.slice(0, 5).join(' ')}...`
        }
        return title
    } 

    return (
        <StyledArticleRowLink to={slug}>
            <StyledArticleThumbnailContainer>
                <StyledArticleThumbnail image={image} alt={`${title}_thumb`}/>
            </StyledArticleThumbnailContainer>
            <StyledArticleRowDetails>
                <StyledArticleRowTitleLine>
                    <StyledArticleTitle>{truncateTitle(title)}</StyledArticleTitle>
                    <StyledArticlePublishDate>{publishDate}</StyledArticlePublishDate>
                </StyledArticleRowTitleLine>
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
