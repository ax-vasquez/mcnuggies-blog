import React, { FunctionComponent, useMemo } from "react"
import { PageLayout } from "../../components/layout/PageLayout"
import sanityClient from "../../sanity/client"
import octokitClient from "../../github/client"
import { Project } from "../../types/sanity"
import styles from './project.module.scss'
import Markdown from 'react-markdown'
import CustomIcon from "../../components/shared/CustomIcon"
import { PortableText } from "@portabletext/react"
import { Endpoints } from "@octokit/types"
import { DeploymentComponent } from "../../components/pages/projects/DeploymentComponent"

interface ProjectPageProps {
    project: Project
    readmeContent?: string
    getDeploymentStatusesResponses: Endpoints[`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`][`response`][] | undefined
    getLanguagesResponse: Endpoints[`GET /repos/{owner}/{repo}/languages`][`response`] | undefined
    getContributorsResponse: Endpoints[`GET /repos/{owner}/{repo}/contributors`][`response`] | undefined
    getCommitsResponse: Endpoints[`GET /repos/{owner}/{repo}/commits`][`response`] | undefined
}

const ProjectPage: FunctionComponent<ProjectPageProps> = ({
    project,
    readmeContent,
    getDeploymentStatusesResponses,
    getLanguagesResponse,
    // getContributorsResponse,
    // getCommitsResponse
}) => {

  /**
   * maxBytes is determined by the getLanguagesResponse object. GitHub returns languages data as a key-value
   * object where the language name is the key and the BYTE amount is the value (not the line count). This
   * value is used when calculating the percentage of language usages.
   */
  const maxBytes = useMemo(() => {
    let bytes = 0
    if (getLanguagesResponse) {
      Object.keys(getLanguagesResponse.data).forEach((key) => {
        bytes += getLanguagesResponse.data[key]
      })
    }
    return bytes
  }, [getLanguagesResponse])

  const latestUniqueDeployments = useMemo(() => {
    const uniqueDeployments = {} as { [key: string]: Endpoints[`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`][`response`][`data`] }

    if (getDeploymentStatusesResponses) {
      getDeploymentStatusesResponses.map(statusResponse => {
        const successfulDeployments = statusResponse.data.filter(status => status.state === `success`)

        if (successfulDeployments.length > 0 && successfulDeployments[0].environment) {
          uniqueDeployments[successfulDeployments[0].environment] = successfulDeployments.sort((a, b) => {
            if (a.created_at > b.created_at) return 1
            else return 0
          })
        }
      })
    }
    return uniqueDeployments
  }, [getDeploymentStatusesResponses])

    return ( !!project &&
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
          {!!getDeploymentStatusesResponses && (
            <div className={styles.metadataItem}>
              <h3>Deployments</h3>
              {Object.keys(latestUniqueDeployments).map((environment) => {
                return (
                  <DeploymentComponent
                    key={`deployment-${environment.toLowerCase()}`}
                    environment={environment}
                    environmentUrl={latestUniqueDeployments[environment][0].environment_url!}
                    state={latestUniqueDeployments[environment][0].state}
                  />
                )
              })}
            </div>
          )}
          {!!getLanguagesResponse && (
            <div className={styles.metadataItem}>
              <h3>Languages</h3>
              <ul className={styles.languagesBar}>
                {Object.keys(getLanguagesResponse.data).map(key => {
                  const currentBytes: number = getLanguagesResponse.data[key]
                  const percentage = (currentBytes / maxBytes) * 100
                  return <li key={`language-${key.toLowerCase()}-usages`}>{key}: {percentage.toFixed(2)}%</li>
                })}
              </ul>
            </div>
          )}
          <div className={styles.metadataItem}>
            <h3>Contributors</h3>
          </div>
          <div className={styles.metadataItem}>
            <h3>Latest commit</h3>
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

    let readmeContent
    let getDeploymentStatusesResponses: Endpoints[`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`][`response`][] | undefined
    let getLanguagesResponse: Endpoints[`GET /repos/{owner}/{repo}/languages`][`response`] | undefined
    let getContributorsResponse: Endpoints[`GET /repos/{owner}/{repo}/contributors`][`response`] | undefined
    let getCommitsResponse: Endpoints[`GET /repos/{owner}/{repo}/commits`][`response`] | undefined

    if (project.githubOwner && project.githubRepo) {
      const requestArgs = {
        owner: project.githubOwner,
        repo: project.githubRepo,
        headers: {
          'X-GitHub-Api-Version': `2022-11-28`
        }
      }
      const getReadmeResponse = await octokitClient.request(`GET /repos/{owner}/{repo}/readme`, requestArgs)
      const getDeploymentsResponse = await octokitClient.request(`GET /repos/{owner}/{repo}/deployments`, requestArgs)
      getLanguagesResponse = await octokitClient.request(`GET /repos/{owner}/{repo}/languages`, requestArgs)
      getContributorsResponse = await octokitClient.request(`GET /repos/{owner}/{repo}/contributors`, requestArgs)
      getCommitsResponse = await octokitClient.request(`GET /repos/{owner}/{repo}/commits`, requestArgs)

      getDeploymentStatusesResponses = await Promise.all(
        getDeploymentsResponse.data.map(async (deployment) => {
          try {
            const deploymentStatus = await octokitClient.request(`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`, {
              ...requestArgs,
              deployment_id: deployment.id
            })

            return deploymentStatus
          } catch (e) {
            console.log(e)
          }
        })
      )

      readmeContent = await (await fetch(getReadmeResponse.data.download_url!)).text()
    }

    return {
      props: {
          project,
          readmeContent,
          getDeploymentStatusesResponses,
          getLanguagesResponse,
          getContributorsResponse,
          getCommitsResponse,
      }
  }
}

export default ProjectPage
