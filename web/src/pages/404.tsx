import React from 'react'
import { Layout } from '../components/Layout'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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

const NotFoundPage = ({ data }) => {
    const image = getImage(data.imageSharp)
    return (
        <Layout>
            <div className="not-found-image-container">
                <GatsbyImage image={image} alt="404" className="not-found-image"/>
                <div className="not-found-image-overlay">
                    <h2><code>404</code> - page not found</h2>
                </div>
            </div>
        </Layout>
    )
}

export default NotFoundPage