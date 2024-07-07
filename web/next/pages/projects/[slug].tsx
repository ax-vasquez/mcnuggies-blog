import { FunctionComponent } from "react"
import { PageLayout } from "../../components/layout/PageLayout"
import client from "../../sanity/client"
import { Project } from "../../types/sanity"
import styles from './project.module.scss'

interface ProjectPageProps {
    projectTitle: string
}

const ProjectPage: FunctionComponent<ProjectPageProps> = ({
    projectTitle,
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

        </div>
      </PageLayout>
    )
}

export async function getStaticPaths() {
    const paths = await client.fetch(
      `*[_type == "project" && defined(slug.current)][].slug.current`
    )

    return {
      paths: paths.map((slug: string) => ({params: {slug}})),
      fallback: true,
    }
}

export async function getStaticProps(context: any) {
    const { slug = `` } = context.params

    const project: Project = await client.fetch(`
        *[_type == "project" && slug.current == $slug][0]{
          title,
          repoUrl,
          description,
        }
    `, { slug: slug.toLowerCase() })

    return {
        props: {
            projectTitle: project.title
        }
    }
}

export default ProjectPage
