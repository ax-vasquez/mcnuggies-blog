import React from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import serializers from '../serializers'
import Layout from '../components/Layout'
import { SanityCreator, SanityEmployer } from '../../graphql-types'
import { THEME } from '../style/colors'
import { StyledBlockContent } from '../components/styled-components/common'
import { device } from '../style/devices'
import EmploymentHistoryList from '../components/about/EmploymentHistoryList'

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

const StyledAuthorDetailsContainerDiv = styled.div`
    margin-top: 2rem;
    padding: 2rem;
    display: inline-flex;
    z-index: 10;
    & {
        h1 {
            padding-top: 0;
            margin: 0;
        }
    }
`

const StyledCreatorBadgeDiv = styled.div`
    flex-wrap: wrap;
    @media ${device.mobileS} {
        display: none;
    }
    @media ${device.tablet} {
        display: flex;
    }
`

const StyledCreatorBadgeImage = styled(GatsbyImage)`
    border-radius: 0.25rem;
    height: 15rem;
    width: 15rem;
`

const StyledCreatorDetailsDiv = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
`

const StyledCreatorDetailsFooter = styled.div`
    margin-right: calc(0.5rem * 0);
    margin-left: calc(0.5rem * calc(1 - 0));
    margin-top: 1rem;
    display: flex;
`

const StyledAboutContentDiv = styled.div`
    font-size: 1.125rem;
    line-height: 1.75rem;
    line-height: 1.625;
    margin: auto;
    @media ${device.mobileS} {
        width: 90%;
    }
    @media ${device.tablet} {
        width: 100%;
    }
`

const StyledIntegrationImage = styled.img`
    height: 2rem;
`

const StyledJobTitleRow = styled.div`
    margin-top: 1rem;
    display: inline-flex;
    align-items: center;
`

const StyledEmployerIcon = styled(GatsbyImage)`
    width: 2rem;
    height: 2rem;
`

const StyledEmploymentTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0.25rem;
`

const StyledEmploymentDates = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 1rem;
    font-style: italic;
    color: ${THEME.light.font.accent};
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
            <StyledAuthorDetailsContainerDiv>
                <StyledCreatorBadgeDiv>
                    <StyledCreatorBadgeImage image={creatorImage} alt="creator_image" />
                </StyledCreatorBadgeDiv>
                <StyledCreatorDetailsDiv>
                    <h1>{name}</h1>
                    <StyledJobTitleRow>
                        <a href={homePage} target="_blank" rel="noreferrer">
                            <StyledEmployerIcon image={mainEmployerImage} alt="employer_image" />
                        </a>
                        <StyledEmploymentTitle>
                            {currentJobTitle.title}
                        </StyledEmploymentTitle>
                        <StyledEmploymentDates>
                            {startDate}
                            {` `}
                            -
                            {` `}
                            {employed ? `Present` : endDate}
                        </StyledEmploymentDates>
                    </StyledJobTitleRow>
                    <StyledBlockContent blocks={_rawDescription} serializers={serializers} />
                    <StyledCreatorDetailsFooter>
                        {githubUrl ? (
                            <div>
                                <a href={githubUrl} target="_blank" rel="noreferrer">
                                    <StyledIntegrationImage src="/octocat-logo.png" alt="gh-logo" />
                                </a>
                            </div>
                        )
                            : null}
                        {linkedInUrl ? (
                            <div>
                                <a href={linkedInUrl} target="_blank" rel="noreferrer">
                                    <StyledIntegrationImage src="/linkedin-logo.png" alt="linkedin-logo" />
                                </a>
                            </div>
                        )
                            : null}
                    </StyledCreatorDetailsFooter>
                </StyledCreatorDetailsDiv>
            </StyledAuthorDetailsContainerDiv>
            <EmploymentHistoryList employers={employers} />
            <StyledAboutContentDiv>
                <StyledBlockContent blocks={_rawBio} serializers={serializers} />
            </StyledAboutContentDiv>
        </Layout>
    )
}

export default AboutPage
