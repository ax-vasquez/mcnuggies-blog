import React, { FunctionComponent } from "react"
import { PageLayout } from "../../components/layout/PageLayout"
import sanityClient from "../../sanity/client"
import octokitClient from "../../github/client"
import { Project } from "../../types/sanity"
import styles from './project.module.scss'
import Markdown from 'react-markdown'
import CustomIcon from "../../components/shared/CustomIcon"
import { PortableText } from "@portabletext/react"

interface ProjectPageProps {
    project: Project
    readmeContent?: string
}

const ProjectPage: FunctionComponent<ProjectPageProps> = ({
    project,
    readmeContent
}) => {

    return (
      <PageLayout
            pageTitle={project.title}
            useTitleOverlay={false}
            metaDescription={`Project details for ${project.title}`}
        >
        <div className={styles.pageHeader}>
          <h1>{project.title}</h1>
          <CustomIcon
              data-cy='github'
              fileName='logo-github'
              height={32}
              width={32}
              className={styles.githubLogo}
              onClick={() => window.open(project.repoUrl!, `_blank`)}
          />
        </div>
        <div className={styles.projectDescription}>
          <div className={styles.sectionHeading}>
            <h2>Project Description</h2>
          </div>
          <PortableText value={project.description!}/>
        </div>
        <div className={styles.projectMetadata}>
          <div className={styles.sectionHeading}>
            <h2>Project Details</h2>
            <span>Data imported from GitHub</span>
          </div>
          <div className={styles.metadataItem}>
            <h3>Deployments</h3>
          </div>
          <div className={styles.metadataItem}>
            <h3>Languages</h3>
          </div>
          <div className={styles.metadataItem}>
            <h3>Contributors</h3>
          </div>
          <div className={styles.metadataItem}>
            <h3>Latest commit</h3>
          </div>
          <div className={styles.metadataItem}>
            <h3>License</h3>
          </div>
        </div>
        <div className={styles.projectReadme}>
          <div className={styles.sectionHeading}>
            <h2>Project Readme</h2>
            <span>Readme content imported from GitHub</span>
          </div>
          <Markdown className={styles.readmeContent}>
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
            project,
            readmeContent
        }
    }
    }


    return {
        props: {
            project,
        }
    }
}

export default ProjectPage
