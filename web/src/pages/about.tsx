import React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { FeaturePage } from "../components/FeaturePage"

export const query = graphql`
query{
    imageSharp(original: {src: {regex: "/about/"}}) {
      gatsbyImageData(
         placeholder: BLURRED
         formats: [AUTO, WEBP, AVIF]
       )
    }
}
`

const AboutPage = ({ data }) => {
    const heroImage = getImage(data.imageSharp)
    return (
        <FeaturePage heroImage={heroImage} text={`about`}/>
    )
}

export default AboutPage