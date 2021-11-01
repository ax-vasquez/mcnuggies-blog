import * as React from 'react'
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Tile from '../components/home/Tile'
import { ImageSharp } from '../../graphql-types'
import styled from "styled-components"
import tw from "twin.macro"
import {
  HeroImage,
  HeroImageContainer,
  HeroImageOverlay,
} from '../components/styled-components/common'

export const query = graphql`
query{
  imageSharp(original: {src: {regex: "/nebula/"}}) {
    gatsbyImageData(
       placeholder: BLURRED
       formats: [AUTO, WEBP, AVIF]
     )
  }
}
`

const StyledHomeBannerList = styled.div.attrs({
  className: "my-6 grid grid-cols-1 md:grid-cols-2"
})`
  ${tw`mx-auto`}
`

const StyledPageHeadingLight = styled.h1.attrs({
  className: 'mt-12 mb-6'
})`
  ${tw`text-center`}
  ${tw`text-gray-300`}
`

type ImageSharpNode = {
  node: ImageSharp
}

const IndexPage = ({ data }: { data: {
  imageSharp: any,
} }) => {
    const heroImage = getImage(data.imageSharp)
    const rootItems = ['blog', 'about']
    return (
        <Layout>
            <HeroImageContainer>
                <HeroImage image={heroImage} alt="stars" />
                <HeroImageOverlay>
                    <StyledPageHeadingLight id="hero-image-text">Hello, I'm Armando</StyledPageHeadingLight>
                </HeroImageOverlay>
            </HeroImageContainer>
            <StyledHomeBannerList>
                {rootItems.map((rootItem, index) => <Tile key={`home-banner-${index}`} label={rootItem} />)}
            </StyledHomeBannerList>
        </Layout>
    )
}

export default IndexPage
