import * as React from "react"
import { Layout } from "../components/Layout"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { Tile } from "../components/home/Tile"

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

const IndexPage = ({ data }) => {
  const heroImage = getImage(data.imageSharp)
  const tileImagesData = data.allImageSharp.edges.map(tileImageData => {
    return {
      src: tileImageData.node.original.src,
      imageData: tileImageData.node.gatsbyImageData
    }
  }) as { src: string, imageData: IGatsbyImageData }[]
  return (
    <Layout>
        <div className="hero-image-container">
          <GatsbyImage image={heroImage} alt="stars" className="hero-image"/>
          <div className="hero-image-overlay">
            <h1 id="hero-image-text" className="hero-image-text">Hello, I'm Armando</h1>
          </div>
        </div>
        
        <body>
          <p className="home-greeting">
            Welcome to my headspace! I use this site as my personal blog, as well as my professional portfolio. I'll also occasionally
            write some guides on a variety of topics I'm interested in, such as coding, 3D modeling (and animating), video games, modding,
            and whatever else I may end up dabbling in.
          </p>
          <div className="home-banner-list">
            {tileImagesData.map(img => <Tile src={img.src} imageData={img.imageData} />)}
          </div>
          
        </body>

    </Layout>
  )
}

export default IndexPage
