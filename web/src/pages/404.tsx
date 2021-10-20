import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

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

const NotFoundPage = ({ data }: { data: {
    // TODO: find out what the type should be here
    imageSharp: any
} }) => {
    const image = getImage(data.imageSharp)
    return (
        <Layout>
            <div className="not-found-image-container">
                <GatsbyImage image={image} alt="404" className="not-found-image" />
                <div className="not-found-image-overlay">
                    <h2>
                        <code>404</code>
                        {' '}
                        - page not found
                    </h2>
                </div>
            </div>
        </Layout>
    )
}

export default NotFoundPage
