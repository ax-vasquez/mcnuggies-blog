import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { SanityProject } from '../../graphql-types'
import ProjectRow from '../components/projects/ProjectRow'
import * as styles from './project.module.scss'

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
        title
      }
    }
  }
}
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>mcnuggies | Projects</title>
            </Helmet>
            <h1>Projects</h1>
            <ul className={styles.projectsList}>
                {projectEdges.map((projectEdge) => {
                    const {
                        title,
                        repoUrl,
                        _rawDescription,
                    } = projectEdge.node
                    return (
                        <ProjectRow
                          key={`project-row-${title.toLowerCase().replace(` `, `-`)}`}
                          title={title}
                          repoUrl={repoUrl}
                          _rawDescription={_rawDescription}
                        />
                    )
                })}
            </ul>
        </Layout>
    )
}

export default projects
