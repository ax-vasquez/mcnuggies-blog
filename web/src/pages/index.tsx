import * as React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Tile from '../components/home/Tile'
import styled from "styled-components"
import {
  HeroImage,
  HeroImageContainer,
  HeroImageOverlay,
} from '../components/styled-components/common'
import { device } from '../style/devices'

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

const StyledHomeBannerList = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  @media ${device.mobileL} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const IndexPage = ({ data }: { data: {
  imageSharp: any,
} }) => {
    const heroImage = getImage(data.imageSharp)
    const rootItems = ['blog', 'about']
    return (
        <Layout>
            <HeroImageContainer>
                <HeroImage image={heroImage} alt="stars" />
                <HeroImageOverlay/>
            </HeroImageContainer>
            <StyledHomeBannerList>
                {rootItems.map((rootItem, index) => <Tile key={`home-banner-${index}`} label={rootItem} />)}
            </StyledHomeBannerList>
        </Layout>
    )
}

export default IndexPage
