import React from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import serializers from '../serializers'
import Layout from '../components/Layout'
import { SanityCreator, SanityEmployer } from '../../graphql-types'
import styled from "styled-components"
import { BG_COLORS, FONT_COLORS } from '../style/colors'
import { StyledBlockContent } from '../components/styled-components/common'
import { device } from '../style/devices'

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

const StyledAuthorDetailsContainerDiv = styled.div`
    margin-top: 0.5rem;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    display: inline-flex;
    background-color: ${BG_COLORS.about.detailsCard.light};
    z-index: 10;
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
    display: flex;
`

const StyledCreatorDetailsDiv = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
`

const StyledEmployerImageDiv = styled.div`
    width: 10rem;
    height: 4rem;
`

const StyledEmploymentDatesDiv = styled.div`
    display: flex;
    & {
        p {
            margin-left: 1rem;
            font-style: italic;
            color: ${FONT_COLORS.about.detailsCard.employmentDates.light};
        }
    }
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
`

const StyledIntegrationImage = styled.img`
    height: 2rem;
`

type SanityEmployerNode = {
    node: SanityEmployer
}

const AboutPage = ({ data }: { data: {
    sanityCreator: SanityCreator,
    allSanityEmployer: {
        edges: SanityEmployerNode[]
    }
} }) => {
    const creatorImage = getImage(data.sanityCreator.image.asset.gatsbyImageData)
    const {
        name,
        linkedInUrl,
        githubUrl,
        _rawBio,
    } = data.sanityCreator
    const mainEmployer = data.allSanityEmployer.edges[0].node
    const mainEmployerImage = getImage(mainEmployer.image.asset.gatsbyImageData)
    const {
        startDate,
        endDate,
        employed,
        jobTitle,
        _rawDescription,
    } = mainEmployer
    return (
        <Layout>
            <StyledAuthorDetailsContainerDiv>
                <StyledCreatorBadgeDiv>
                    <StyledCreatorBadgeImage image={creatorImage} alt="creator_image" />
                </StyledCreatorBadgeDiv>
                <StyledCreatorDetailsDiv>
                    <div>
                        <h1>{name}</h1>
                        <StyledEmployerImageDiv>
                            <GatsbyImage image={mainEmployerImage} alt="employer_image" />
                        </StyledEmployerImageDiv>
                        <StyledEmploymentDatesDiv>
                            <h3>{jobTitle}</h3>
                            <p>
                                {startDate}
                                {' '}
                                -
                                {' '}
                                {employed ? 'Present' : endDate}
                            </p>
                        </StyledEmploymentDatesDiv>
                        <StyledBlockContent blocks={_rawDescription} serializers={serializers} />
                    </div>
                    <StyledCreatorDetailsFooter>
                        {linkedInUrl ? (
                            <div>
                                <a href={linkedInUrl} target="_blank" rel="noreferrer">
                                    <StyledIntegrationImage src="/linkedin-logo.png" alt="linkedin-logo" />
                                </a>
                            </div>
                        )
                            : null}
                        {githubUrl ? (
                            <div>
                                <a href={githubUrl} target="_blank" rel="noreferrer">
                                    <StyledIntegrationImage src="/octocat-logo.png" alt="gh-logo" />
                                </a>
                            </div>
                        )
                            : null}
                    </StyledCreatorDetailsFooter>
                </StyledCreatorDetailsDiv>
            </StyledAuthorDetailsContainerDiv>
            <StyledAboutContentDiv>
                <StyledBlockContent blocks={_rawBio} serializers={serializers} />
            </StyledAboutContentDiv>
        </Layout>
    )
}

export default AboutPage
