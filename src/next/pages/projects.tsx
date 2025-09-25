import React from 'react'
import { PageLayout } from '../components/layout/PageLayout'
import sanityClient from '../sanity/client'
import { ProjectComponent } from '../components/pages/projects/ProjectComponent'
import { Project } from '../types/sanity'
import { PortableText } from '@portabletext/react'

interface ProjectsProps {
  projects: Project[]
}

const Projects: React.FC<ProjectsProps> = ({
  projects
}) => {
    return (
      <PageLayout
            metaDescription={`Projects from the creator and maintainer of ${process.env.HOST}`}
            pageTitle='Projects'
        >
        <div className='projects-page-heading'>
          <h1>Projects</h1>
          <span>A curated list of projects I've created</span>
        </div>
        <ul className='projects-list'>
          {projects.map((project, idx) => <ProjectComponent key={`project-${idx}`} title={project.title!} repoUrl={project.repoUrl!} slug={project.slug!.current} description={<PortableText value={project.description!}/>}/>)}
        </ul>
      </PageLayout>
    )
}

export async function getStaticProps() {

  const projects = await sanityClient.fetch(`*[_type == "project"]{
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
