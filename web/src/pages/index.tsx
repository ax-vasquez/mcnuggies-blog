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
  allImageSharp(filter: {original: {src: {regex: "/tile/"}}}) {
    edges {
      node {
        original {
          src
        }
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
}
`

const StyledHomeBannerList = styled.div.attrs({
  className: "my-6 space-y-6"
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
  allImageSharp: {
    edges: ImageSharpNode[]
  }
} }) => {
    const heroImage = getImage(data.imageSharp)
    const tileImagesData = data.allImageSharp.edges.map((tileImageData) => {
        return {
            src: tileImageData.node.original.src,
            imageData: tileImageData.node.gatsbyImageData,
        }
    }) as { src: string, imageData: IGatsbyImageData }[]
    return (
        <Layout>
            <HeroImageContainer>
                <HeroImage image={heroImage} alt="stars" />
                <HeroImageOverlay>
                    <StyledPageHeadingLight id="hero-image-text">Hello, I'm Armando</StyledPageHeadingLight>
                </HeroImageOverlay>
            </HeroImageContainer>
            <div>
                <StyledHomeBannerList>
                    {tileImagesData.map((img, index) => <Tile key={`home-banner-${index}`} src={img.src} imageData={img.imageData} />)}
                </StyledHomeBannerList>
            </div>
        </Layout>
    )
}

export default IndexPage
