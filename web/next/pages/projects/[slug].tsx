import React, { FunctionComponent } from "react"
import { PageLayout } from "../../components/layout/PageLayout"
import sanityClient from "../../sanity/client"
import octokitClient from "../../github/client"
import { Project } from "../../types/sanity"
import styles from './project.module.scss'
import Markdown from 'react-markdown'
import CustomIcon from "../../components/shared/CustomIcon"
import { PortableText } from "@portabletext/react"
import { Endpoints } from "@octokit/types"
import { DeploymentState } from "../../components/pages/projects/DeploymentComponent"
import Link from "next/link"
import { Deployments } from "../../components/pages/projects/github-data-components/Deployments"
import { Languages } from "../../components/pages/projects/github-data-components/Languages"

/**
 * Based on Octokit return type for desployment statuses, but only contains fields that
 * are actually used (there is a lot more in the response that can be used later, if needed)
 */
export type PrunedDeploymentStatusData = {
  environment: string,
  environmentUrl: string,
  createdAt: string,
  state: DeploymentState
}

export type PrunedContributorData = {
  login: string | undefined
  url: string | undefined
  avatarUrl: string | undefined
}

interface ProjectPageProps {
    project: Project
    readmeContent?: string
    prunedDeploymentStatuses: { [key: string]: PrunedDeploymentStatusData } | null
    getLanguagesResponseData: Endpoints[`GET /repos/{owner}/{repo}/languages`][`response`][`data`] | undefined
    prunedContributors: { [key: string]: PrunedContributorData } | null
}

const ProjectPage: FunctionComponent<ProjectPageProps> = ({
    project,
    readmeContent,
    prunedDeploymentStatuses,
    // getLanguagesResponseData,
    prunedContributors,
}) => {

  // const requestArgs = useMemo(() => {
  //   return {
  //       owner: project.githubOwner || ``,
  //       repo: project.githubRepo || ``,
  //       headers: {
  //         'X-GitHub-Api-Version': `2022-11-28`
  //       }
  //     }
  // }, [project])

  // const deploymentsAndStatuses = useMemo(async () => {
  //   const getDeploymentsResponse = await octokitClient.request(`GET /repos/{owner}/{repo}/deployments`, requestArgs)
  // }, [requestArgs])

  // const contributors = useMemo(async () => {

  // }, [requestArgs])

  // const latestCommits = useMemo(async () => {

  // }, [requestArgs])

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
              <Deployments
                prunedDeploymentStatuses={prunedDeploymentStatuses}
              />
            </div>
          )}
          <div className={styles.metadataItem}>
            <h3>Languages</h3>
            <Languages githubOwner={project.githubOwner || ``} githubRepo={project.githubRepo || ``} />
          </div>
          {!!prunedContributors && (
            <div className={styles.metadataItem}>
              <h3>Contributors</h3>
              {Object.keys(prunedContributors).map((key => {
                return (
                  <div className={styles.contributor} key={`contributor-${key.toLowerCase()}`}>
                    <Link href={prunedContributors[key].url!} target="_blank" >
                      <img src={prunedContributors[key].avatarUrl}/>
                      <span>{key}</span>
                    </Link>
                  </div>
                )
              }))}
            </div>
          )}
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
    let prunedDeploymentStatuses: { [key: string]: PrunedDeploymentStatusData } | null = null
    let prunedContributors: { [key: string]: PrunedContributorData } | null = null
    let getLanguagesResponse: Endpoints[`GET /repos/{owner}/{repo}/languages`][`response`][`data`] | undefined

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
      const getContributorsResponse = await octokitClient.request(`GET /repos/{owner}/{repo}/contributors`, requestArgs)

      const getLatestUniqueDeployments = async () => {
        const uniqueDeployments = {} as { [key: string]: PrunedDeploymentStatusData }

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
                } as PrunedDeploymentStatusData
              }
            })
          )

        }
        if (Object.keys(uniqueDeployments).length === 0) return null
        return uniqueDeployments
      }

      if (getContributorsResponse.data.length > 0) {
        prunedContributors = {}
        getContributorsResponse.data.forEach((contributor) => {
          const {
            login,
            html_url,
            avatar_url
          } = contributor
          console.log(contributor)
          if (login && avatar_url && prunedContributors) {
            prunedContributors[login] = {
              login,
              url: html_url,
              avatarUrl: avatar_url
            }
          }
        })
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
          prunedContributors,
      }
  }
}

export default ProjectPage
