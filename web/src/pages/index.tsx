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
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${device.mobileS} {
    display: flex;
  }
  @media ${device.tablet} {
      display: inline-flex;
  }
`

const IndexPage = ({ data }: { data: {
  imageSharp: any,
} }) => {
    const heroImage = getImage(data.imageSharp)
    const rootItems = ['blog', 'projects', 'about']
    return (
        <Layout>
            <HeroImageContainer>
                <HeroImage image={heroImage} alt="stars" />
                <HeroImageOverlay/>
            </HeroImageContainer>
            <h1>
              Welcome
            </h1>
            <StyledHomeBannerList>
                {rootItems.map((rootItem, index) => <Tile key={`home-banner-${index}`} label={rootItem} />)}
            </StyledHomeBannerList>
        </Layout>
    )
}

export default IndexPage
