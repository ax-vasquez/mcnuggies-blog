import React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react'
import serializers from '../serializers'
import { Layout } from "../components/Layout"

export const query = graphql`
query{
    sanityCreator(name: {eq: "Armando Vasquez"}) {
        image {
          asset {
            gatsbyImageData
          }
        }
        name
        linkedInUrl
        githubUrl
        _rawBio
    }
    allSanityEmployer(filter: {employed: {eq: true}}) {
        edges {
          node {
            startDate(formatString: "YYYY-MM")
            endDate(formatString: "YYYY-MM")
            employed
            name
            jobTitle
            image {
              asset {
                gatsbyImageData
              }
            }
            _rawDescription
          }
        }
      }
}
`

const AboutPage = ({ data }) => {
    const creatorImage = getImage(data.sanityCreator.image.asset.gatsbyImageData)
    const {
        name,
        linkedInUrl,
        githubUrl,
        _rawBio
    } = data.sanityCreator
    const mainEmployer = data.allSanityEmployer.edges[0].node
    const mainEmployerImage = getImage(mainEmployer.image.asset.gatsbyImageData)
    const {
        startDate,
        endDate,
        employed,
        name: employerName,
        jobTitle,
        _rawDescription
    } = mainEmployer
    return (
        <Layout>
            <div className="creator-details-banner">
                <div className="creator-badge">
                    <GatsbyImage image={creatorImage} alt={`creator_image`} className="creator-image"/>
                    
                </div>
                <div className="creator-details sm:col-span-2">
                    <div>
                        <h1>{name}</h1>
                        <div className="employer-image">
                            <GatsbyImage image={mainEmployerImage} alt={`employer_image`} />
                        </div>
                        <div className="flex mb-4">
                            <h2 className="font-bold">{jobTitle}</h2>
                            <div className="employment-dates ml-4 italic text-gray-400">
                                <p>{startDate} - {!!employed ? `Present` : endDate}</p>
                            </div>
                        </div>
                        <div className="italic">
                            <BlockContent className={`job-block-content`} blocks={_rawDescription} serializers={serializers}/>
                        </div>
                    </div>
                    <div className="creator-details-footer">
                        {!!linkedInUrl ? 
                            <div>
                                <a href={linkedInUrl} target="_blank" >
                                    <img src={`/linkedin-logo.png`} className="h-8"/>
                                </a> 
                            </div>: 
                            null}
                        {!!githubUrl ? 
                            <div>
                                <a href={githubUrl} target="_blank" >
                                    <img src={`/octocat-logo.png`} className="h-8"/>
                                </a>
                            </div> : 
                            null}
                    </div>
                </div>
            </div>
            <div className="article-body">
                <BlockContent className={`bio-block-content`} blocks={_rawBio} serializers={serializers}/>
            </div>
        </Layout>
    )
}

export default AboutPage
