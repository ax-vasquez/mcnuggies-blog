import React, { useState } from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { SanityProject } from '../../graphql-types'
import styled from 'styled-components'
import ProjectRow from '../components/projects/ProjectRow'

export const query = graphql`
query{
    allSanityProject {
    edges {
      node {
        _rawDescription
        slug {
          current
        }
        repoUrl
        npmUrl
        title
      }
    }
  }
}
`

// Need !important to "override" styles that are also defined for the root ul and ol (doesn't work without it)
const StyledProjectsUnorderedList = styled.ul`
    list-style-type: none !important;
    padding-left: 0px !important;
`

type SanityProjectNode = {
    node: SanityProject
}

const projects = ({ data }: { data: {
    allSanityProject: {
        edges: SanityProjectNode[]
    }
} }) => {
    const projectEdges = data.allSanityProject.edges
    return (
        <Layout>
            <h1>Projects</h1>
            <StyledProjectsUnorderedList>
                {projectEdges.map((projectEdge, index) => {
                    const {
                        title,
                        repoUrl,
                        _rawDescription
                    } = projectEdge.node
                    return (
                        <ProjectRow 
                            key={`project-row-${index}`}
                            title={title}
                            repoUrl={repoUrl}
                            _rawDescription={_rawDescription}
                        />
                    )
                })}
            </StyledProjectsUnorderedList>
        </Layout>
    )
}

export default projects