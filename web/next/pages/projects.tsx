import React from 'react'
import { PageLayout } from '../components/layout/PageLayout'
import client from '../sanity/client'
import { Project } from '../types/sanity'

interface ProjectsProps {
  projects: Project[]
}

const Projects: React.FC<ProjectsProps> = ({
  projects
}) => {
    console.log(`PROJECTS: `, projects)
    return (
      <PageLayout
            metaDescription={`Projects from the creator and maintainer of ${process.env.HOST}`}
            pageTitle='Projects'
        >
        <h1>Projects</h1>
      </PageLayout>
    )
}

export async function getStaticProps() {

  const projects = await client.fetch(`*[_type == "project"]{
    title,
    slug,
    description,
    repoUrl
  } | order(title asc)`)

  return {
    props: {
      projects
    }
  }
}

export default Projects
