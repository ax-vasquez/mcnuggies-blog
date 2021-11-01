import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import styled from "styled-components"
import tw from "twin.macro"

export const query = graphql`
query{
    imageSharp(original: {src: {regex: "/404/"}}) {
      gatsbyImageData(
         placeholder: BLURRED
         formats: [AUTO, WEBP, AVIF]
       )
    }
}
`

const StyledNotFoundImageContainerDiv = styled.div.attrs({
    className: ''
})`
    ${tw`relative flex justify-center`}
`

const StyledNotFoundImage = styled(GatsbyImage).attrs({
    className: ''
})`
    ${tw`h-auto w-screen`}
`

const StyledNotFoundImageOverlayDiv = styled.div.attrs({
    className: 'bg-black bottom-0'
})`
    ${tw`absolute flex items-center justify-center`}
    ${tw`bg-opacity-25`}
    ${tw`text-gray-300`}
    ${tw`w-full h-full`}
`

const NotFoundPage = ({ data }: { data: {
    // TODO: find out what the type should be here
    imageSharp: any
} }) => {
    const image = getImage(data.imageSharp)
    return (
        <Layout>
            <StyledNotFoundImageContainerDiv>
                <StyledNotFoundImage image={image} alt="404-image" />
                <StyledNotFoundImageOverlayDiv>
                    <h2>
                        <code>404</code>
                        {' '}
                        - page not found
                    </h2>
                </StyledNotFoundImageOverlayDiv>
            </StyledNotFoundImageContainerDiv>
        </Layout>
    )
}

export default NotFoundPage
