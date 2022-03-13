import { NextPage } from 'next'
import React from 'react'
import { PageLayout } from '../components/layout/PageLayout'
import client from '../sanity/client'

const About: NextPage = () => {
    return (
	<PageLayout
            pageTitle='About'
            imgSrc='/about.jpg'
        >

	</PageLayout>
    )
}

export async function getStaticProps() {
    const allArticles = await client.fetch(`
      *[_type == "creator"]{
          name,
          "imageUrl": image.asset->url,
          githubUrl,
          linkedInUrl,
          bio
      }
    `)

    return {
      props: {
        allArticles
      }
    }
}

export default About
