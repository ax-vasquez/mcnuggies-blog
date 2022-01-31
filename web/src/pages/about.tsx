import React from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import BlockContent from '@sanity/block-content-to-react'
import serializers from '../components/serializers'
import Layout from '../components/Layout'
import { SanityCreator, SanityEmployer } from '../../graphql-types'
import EmploymentHistoryList from '../components/about/EmploymentHistoryList'
import * as styles from './about.module.scss'
import ghLogo from '../images/octocat-logo.png'
import linkedInLogo from '../images/linkedin-logo.png'

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
    sanityEmployer(employed: {eq: true}) {
        name
        startDate(formatString: "YYYY-MM")
        endDate(formatString: "YYYY-MM")
        employed
        name
        homePage
        image {
            asset {
                gatsbyImageData
            }
        }
        jobTitles {
            title
            currentJobTitle
        }
        _rawDescription
    }
    allSanityEmployer(sort: {fields: jobTitles___startDate, order: DESC}) {
        edges {
            node {
                name
                jobTitles {
                    title
                    currentJobTitle
                    responsibilities
                    startDate(formatString: "YYYY-MM")
                    endDate(formatString: "YYYY-MM")
                }
                image {
                    asset {
                        gatsbyImageData
                    }
                }
                homePage
            }
        }
    }
}
`

type SanityEmployerNode = {
    node: SanityEmployer
}

const AboutPage = ({ data }: { data: {
    sanityCreator: SanityCreator,
    allSanityEmployer: {
        edges: SanityEmployerNode[]
    }
    sanityEmployer: SanityEmployer
} }) => {
    const creatorImage = getImage(data.sanityCreator.image.asset.gatsbyImageData)
    const {
        name,
        linkedInUrl,
        githubUrl,
        _rawBio,
    } = data.sanityCreator
    const mainEmployer = data.sanityEmployer
    const mainEmployerImage = getImage(mainEmployer.image.asset.gatsbyImageData)
    const {
        startDate,
        endDate,
        employed,
        _rawDescription,
        homePage,
        jobTitles,
    } = mainEmployer

    const employers = data.allSanityEmployer.edges.map((edge) => edge.node)

    const currentJobTitle = jobTitles.filter((title) => title.currentJobTitle === true)[0]

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>mcnuggies | About</title>
            </Helmet>
            <div className={styles.authorDetailsContainer}>
                <div className={styles.authorImageContainer}>
                    <GatsbyImage image={creatorImage} alt="creator_image" />
                </div>
                <div className={styles.authorDetails}>
                    <h1>{name}</h1>
                    <div className={styles.authorDetailsTitleRow}>
                        <a href={homePage} target="_blank" rel="noreferrer">
                            <GatsbyImage className={styles.employerIcon} image={mainEmployerImage} alt="employer_image" />
                        </a>
                        <h3>
                            {currentJobTitle.title}
                        </h3>
                        <p>
                            {startDate}
                            {` `}
                            -
                            {` `}
                            {employed ? `Present` : endDate}
                        </p>
                    </div>
                    <BlockContent blocks={_rawDescription} serializers={serializers} />
                    {/* TODO: Figure out why the img components aren't showing */}
                    <div className={styles.authorDetailsFooter}>
                        {githubUrl ? (
                            <div>
                                <a href={githubUrl} target="_blank" rel="noreferrer">
                                    <img src={ghLogo} alt="gh-logo" />
                                </a>
                            </div>
                        )
                            : null}
                        {linkedInUrl ? (
                            <div>
                                <a href={linkedInUrl} target="_blank" rel="noreferrer">
                                    <img src={linkedInLogo} alt="linkedin-logo" />
                                </a>
                            </div>
                        )
                            : null}
                    </div>
                </div>
            </div>
            <EmploymentHistoryList employers={employers} />
            <div className={styles.aboutContent}>
                <BlockContent blocks={_rawBio} serializers={serializers} />
            </div>
        </Layout>
    )
}

export default AboutPage
