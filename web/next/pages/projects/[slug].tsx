import React, { FunctionComponent } from "react"
import { PageLayout } from "../../components/layout/PageLayout"
import sanityClient from "../../sanity/client"
import octokitClient from "../../github/client"
import { Project } from "../../types/sanity"
import styles from './project.module.scss'
import Markdown from 'react-markdown'

interface ProjectPageProps {
    projectTitle: string
    readmeContent?: string
}

const ProjectPage: FunctionComponent<ProjectPageProps> = ({
    projectTitle,
    readmeContent
}) => {

    return (
      <PageLayout
            pageTitle={projectTitle}
            useTitleOverlay={false}
            metaDescription={`Project details for ${projectTitle}`}
        >
        <div className={styles.pageHeader}>
          <h1>{projectTitle}</h1>
        </div>
        <div className={styles.projectMetadata}>

        </div>
        <div className={styles.projectReadme}>
          <Markdown>
            {readmeContent}
          </Markdown>
        </div>
      </PageLayout>
    )
}

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(
      `*[_type == "project" && defined(slug.current)][].slug.current`
    )

    return {
      paths: paths.map((slug: string) => ({params: {slug}})),
      fallback: true,
    }
}

export async function getStaticProps(context: any) {
    const { slug = `` } = context.params

    const project: Project = await sanityClient.fetch(`
        *[_type == "project" && slug.current == $slug][0]{
          title,
          repoUrl,
          githubOwner,
          githubRepo,
          description,
        }
    `, { slug: slug.toLowerCase() })

    if (project.githubOwner && project.githubRepo) {
      const getReadmeResponse = await octokitClient.request(`GET /repos/{owner}/{repo}/readme`, {
        owner: project.githubOwner,
        repo: project.githubRepo,
        headers: {
          'X-GitHub-Api-Version': `2022-11-28`
        }
      })

      const readmeContent = await (await fetch(getReadmeResponse.data.download_url!)).text()

      return {
        props: {
            projectTitle: project.title,
            readmeContent
        }
    }
    }


    return {
        props: {
            projectTitle: project.title,
        }
    }
}

export default ProjectPage
