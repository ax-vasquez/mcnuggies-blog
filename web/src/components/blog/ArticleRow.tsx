import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import serializers from '../../serializers'
import styled from "styled-components"
import tw from "twin.macro"

const StyledArticleRowLink = styled(Link).attrs({
    className: 'space-x-4 h-1/6 my-2 pr-2'
})`
    ${tw`flex`}
    ${tw`bg-gray-100 rounded`}
    ${tw`shadow`}
`

const StyledArticleThumbnailContainer = styled.div.attrs({
    className: 'h-48 w-48'
})`
    ${tw`flex flex-wrap content-center`}
`

const StyledArticleThumbnail = styled(GatsbyImage).attrs({
    className: ''
})`
    ${tw`h-full w-full`}
    ${tw`rounded-l`}
`

const StyledArticleRowDetails = styled.div.attrs({
    className: ''
})`
    ${tw`h-full`}
    ${tw`w-full`}
`

const StyledArticleRowTitleLine = styled.div.attrs({
    className: 'text-purple-700 pt-1'
})`
    ${tw`w-full`}
    & {
        h3 {
            ${tw`font-extralight`}
            ${tw`text-4xl`}
            --tw-text-opacity: 1;
            color: rgba(109, 40, 217, var(--tw-text-opacity));
        }
        p {
            ${tw`italic text-gray-600`}
            ${tw`float-right`}
        }
    }
`

const StyledArticleContentPreview = styled.div.attrs({
    className: 'my-4 ml-4'
})`
    ${tw`align-middle`}
    ${tw`text-gray-800 text-opacity-50`}
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
                    <h3 className="inline-block my-auto">{title}</h3>
                    <p className="inline-block">{publishDate}</p>
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
