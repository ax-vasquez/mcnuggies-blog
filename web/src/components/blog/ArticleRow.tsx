import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import serializers from '../../serializers'
import styled from "styled-components"
import { COLORS } from '../../style/colors'

const StyledArticleRowLink = styled(Link)`
    height: 16.666667%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding-right: 0.5rem;
    margin-right: calc(1rem * 0);
    margin-left: calc(1rem * calc(1 - 0));
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    background-color: ${COLORS.gray[100]};
    border-radius: 0.25rem;
`

const StyledArticleThumbnailContainer = styled.div`
    height: 12rem;
    width: 12rem;
    align-content: center;
    display: flex;
    flex-wrap: wrap;
`

const StyledArticleThumbnail = styled(GatsbyImage)`
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
`

const StyledArticleRowDetails = styled.div`
    height: 100%;
    width: 100%;
`

const StyledArticleRowTitleLine = styled.div`
    padding-top: 0.25rem;
    width: 100%;
    color: ${COLORS.purple[700]};
    & {
        h3 {
            font-weight: 200;
            font-size: 2.25rem;
            line-height: 2.5rem;
        }
        p {
            font-style: italic;
            color: ${COLORS.gray[600]};
            float: right;
        }
    }
`

const StyledArticleContentPreview = styled.div`
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    vertical-align: middle;
    color: ${COLORS.gray[800]};
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
    return (
        <StyledArticleRowLink to={slug}>
            <StyledArticleThumbnailContainer>
                <StyledArticleThumbnail image={image} alt={`${title}_thumb`}/>
            </StyledArticleThumbnailContainer>
            <StyledArticleRowDetails>
                <StyledArticleRowTitleLine>
                    <StyledArticleTitle>{title}</StyledArticleTitle>
                    <StyledArticlePublishDate>{publishDate}</StyledArticlePublishDate>
                </StyledArticleRowTitleLine>
                <StyledArticleContentPreview>
                    <BlockContent
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
