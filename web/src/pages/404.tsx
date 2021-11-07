import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { THEME } from '../style/colors'

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

const StyledNotFoundImageContainerDiv = styled.div`
    justify-content: center;
    display: flex;
    position: relative;
`

const StyledNotFoundImage = styled(GatsbyImage).attrs({
    className: '',
})`
    height: auto;
    width: 100vw;
`

const StyledNotFoundImageOverlayDiv = styled.div`
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.25);
    color: ${THEME.light.font.nav};
    justify-content: center;
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    align-items: center;
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
