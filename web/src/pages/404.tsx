import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import * as styles from './404.module.scss'

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
            <Helmet>
                <meta charSet="utf-8" />
                <title>404</title>
            </Helmet>
            <div className={styles.imageContainer}>
                <GatsbyImage image={image} alt="404-image" />
                <div className={styles.overlay}>
                    <h2>
                        <code>404</code>
                        {` `}
                        - page not found
                    </h2>
                </div>
            </div>
        </Layout>
    )
}

export default NotFoundPage
