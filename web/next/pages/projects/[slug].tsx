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
import { DeploymentComponent, DeploymentState } from "../../components/pages/projects/DeploymentComponent"

/**
 * Based on Octokit return type for desployment statuses, but only contains fields that
 * are actually used (there is a lot more in the response that can be used later, if needed)
 */
type PrunedDeploymentStatus = {
  environment: string,
  environmentUrl: string,
  createdAt: string,
  state: DeploymentState
}

interface ProjectPageProps {
    project: Project
    readmeContent?: string
    prunedDeploymentStatuses: { [key: string]: PrunedDeploymentStatus } | null
    getLanguagesResponse: Endpoints[`GET /repos/{owner}/{repo}/languages`][`response`][`data`] | undefined
    getContributorsResponse: Endpoints[`GET /repos/{owner}/{repo}/contributors`][`response`] | undefined
    getCommitsResponse: Endpoints[`GET /repos/{owner}/{repo}/commits`][`response`] | undefined
}

const ProjectPage: FunctionComponent<ProjectPageProps> = ({
    project,
    readmeContent,
    prunedDeploymentStatuses,
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
      Object.keys(getLanguagesResponse).forEach((key) => {
        bytes += getLanguagesResponse[key]
      })
    }
    return bytes
  }, [getLanguagesResponse])

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

          {!!prunedDeploymentStatuses && (
            <div className={styles.metadataItem}>
              <h3>Deployments</h3>
              <div className={styles.deploymentsWrapper}>
                {Object.keys(prunedDeploymentStatuses).map((deployment) => {
                  const {
                    createdAt,
                    environment,
                    environmentUrl,
                    state,
                  } = prunedDeploymentStatuses[deployment]
                  return (
                    <DeploymentComponent
                      key={`deployment-${environment.toLowerCase()}`}
                      environment={environment}
                      environmentUrl={environmentUrl}
                      state={state}
                      createdAt={createdAt}
                    />
                  )
                })}
              </div>
            </div>
          )}
          {!!getLanguagesResponse && (
            <div className={styles.metadataItem}>
              <h3>Languages</h3>
              <ul className={styles.languagesBar}>
                {Object.keys(getLanguagesResponse).map(key => {
                  const currentBytes: number = getLanguagesResponse[key]
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
    let prunedDeploymentStatuses: { [key: string]: PrunedDeploymentStatus } | null = null
    let getLanguagesResponse: Endpoints[`GET /repos/{owner}/{repo}/languages`][`response`][`data`] | undefined
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
      // Get .data here since the data object for the languages response is simple enough to pass to the static bundle without increasing byte size too much
      getLanguagesResponse = (await octokitClient.request(`GET /repos/{owner}/{repo}/languages`, requestArgs)).data
      getContributorsResponse = await octokitClient.request(`GET /repos/{owner}/{repo}/contributors`, requestArgs)
      getCommitsResponse = await octokitClient.request(`GET /repos/{owner}/{repo}/commits`, requestArgs)

      const getLatestUniqueDeployments = async () => {
        const uniqueDeployments = {} as { [key: string]: PrunedDeploymentStatus }

        if (getDeploymentsResponse) {
          await Promise.all(
            getDeploymentsResponse.data.map(async ( deploymentRespose ) => {
              const statusesForDeployment = await octokitClient.request(`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`, {
                ...requestArgs,
                deployment_id: deploymentRespose.id
              })

              if (statusesForDeployment.data.length > 0) {

                // Grab the latest status for the deployment
                const latestDeploymentStatus = statusesForDeployment.data.sort((statusA, statusB) => {
                  if (statusA.created_at > statusB.created_at) return 1
                  return 0
                })[0]

                uniqueDeployments[deploymentRespose.environment] = {
                  environment: latestDeploymentStatus.environment,
                  environmentUrl: latestDeploymentStatus.environment_url,
                  state: latestDeploymentStatus.state,
                  createdAt: latestDeploymentStatus.created_at
                } as PrunedDeploymentStatus
              }
            })
          )

        }
        if (Object.keys(uniqueDeployments).length === 0) return null
        return uniqueDeployments
      }


      readmeContent = await (await fetch(getReadmeResponse.data.download_url!)).text()
      prunedDeploymentStatuses = await getLatestUniqueDeployments()
    }

    return {
      props: {
          project,
          readmeContent,
          prunedDeploymentStatuses,
          getLanguagesResponse: getLanguagesResponse,
          getContributorsResponse,
          getCommitsResponse,
      }
  }
}

export default ProjectPage