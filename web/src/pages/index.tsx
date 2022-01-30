import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Tile from '../components/home/Tile'
import * as styles from './index.module.scss'

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

const IndexPage = ({ data }: { data: {
  imageSharp: any,
} }) => {
    const heroImage = getImage(data.imageSharp)
    const rootItems = [`blog`, `projects`, `about`]
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>mcnuggies | Home</title>
            </Helmet>
            <div className={styles.heroImage}>
                <GatsbyImage image={heroImage} alt="stars" />
            </div>
            <h1>
                Welcome
            </h1>
            <div className={styles.homeTileListContainer}>
                {rootItems.map((rootItem) => <Tile key={`home-banner-${rootItem.toLowerCase()}`} label={rootItem} />)}
            </div>
        </Layout>
    )
}

export default IndexPage
