import React from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import BlockContent from '@sanity/block-content-to-react'
import serializers from '../serializers'
import Layout from '../components/Layout'
import { SanityCreator, SanityEmployer } from '../../graphql-types'
import styled from "styled-components"
import tw from "twin.macro"

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

const StyledAuthorDetailsContainerDiv = styled.div.attrs({
    className: 'mt-8'
})`
    ${tw`flex`}
    ${tw`bg-gray-200 rounded shadow z-10`}
`

const StyledCreatorBadgeDiv = styled.div.attrs({
    className: 'h-full w-64'
})`
    ${tw`flex flex-wrap content-center`}
`

const StyledCreatorBadgeImage = styled(GatsbyImage).attrs({
    className: ''
})`
    ${tw`rounded`}
    ${tw`h-full w-full`}
`

const StyledCreatorDetailsDiv = styled.div.attrs({
    className: ''
})`
    ${tw`h-full w-full`}
`

const StyledEmployerImageDiv = styled.div.attrs({
    className: 'h-16 w-40 mt-4'
})``

const StyledEmploymentDatesDiv = styled.div.attrs({
    className: 'ml-4'
})`
    ${tw`italic`}
    ${tw`text-gray-400`}
`

const StyledCreatorDetailsFooter = styled.div.attrs({
    className: 'mt-4 space-x-2'
})`
    ${tw`flex`}
`

const StyledAboutContentDiv = styled.div.attrs({
    className: ''
})`
    ${tw`text-lg leading-relaxed`}
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
                        <div>
                            <h2 className="font-bold my-auto">{jobTitle}</h2>
                            <StyledEmploymentDatesDiv>
                                <p>
                                    {startDate}
                                    {' '}
                                    -
                                    {' '}
                                    {employed ? 'Present' : endDate}
                                </p>
                            </StyledEmploymentDatesDiv>
                        </div>
                        <div className="italic">
                            <BlockContent blocks={_rawDescription} serializers={serializers} />
                        </div>
                    </div>
                    <StyledCreatorDetailsFooter>
                        {linkedInUrl ? (
                            <div>
                                <a href={linkedInUrl} target="_blank" rel="noreferrer">
                                    <img src="/linkedin-logo.png" className="h-8" alt="linkedin-logo" />
                                </a>
                            </div>
                        )
                            : null}
                        {githubUrl ? (
                            <div>
                                <a href={githubUrl} target="_blank" rel="noreferrer">
                                    <img src="/octocat-logo.png" className="h-8" alt="gh-logo" />
                                </a>
                            </div>
                        )
                            : null}
                    </StyledCreatorDetailsFooter>
                </StyledCreatorDetailsDiv>
            </StyledAuthorDetailsContainerDiv>
            <StyledAboutContentDiv>
                <BlockContent blocks={_rawBio} serializers={serializers} />
            </StyledAboutContentDiv>
        </Layout>
    )
}

export default AboutPage
