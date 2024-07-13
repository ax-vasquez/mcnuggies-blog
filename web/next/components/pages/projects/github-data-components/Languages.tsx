import React, { useEffect, useMemo, useState } from 'react'
import octokitClient from '../../../../github/client'
import { Endpoints } from '@octokit/types'
import cs from 'clsx'
import styles from './Languages.module.scss'

interface LanguagesProps {
    githubOwner: string | undefined,
    githubRepo: string | undefined
}

export const Languages: React.FC<LanguagesProps> = ({
    githubOwner,
    githubRepo
}) => {

    const [languages, setLanguages] = useState(undefined as Endpoints[`GET /repos/{owner}/{repo}/languages`][`response`][`data`] | undefined)
    // const [loadingLanguages, setLoadingLanguages] = useState(false)

    const requestArgs = useMemo(() => {
        return {
            owner: githubOwner || ``,
            repo: githubRepo || ``,
            headers: {
              'X-GitHub-Api-Version': `2022-11-28`
            }
          }
    }, [githubOwner, githubRepo])

    /**
     * maxBytes is determined by the getLanguagesResponse object. GitHub returns languages data as a key-value
     * object where the language name is the key and the BYTE amount is the value (not the line count). This
     * value is used when calculating the percentage of language usages.
     */
    const maxBytes = useMemo(() => {
        let bytes = 0
        if (languages) {
        Object.keys(languages).forEach((key) => {
            bytes += languages[key]
        })
        }
        return bytes
    }, [languages])

    useEffect(() => {

        const getLanguages = async () => {
        //   setLoadingLanguages(true)
          if (!languages) {
            let languagesResponse = await octokitClient.request(`GET /repos/{owner}/{repo}/languages`, requestArgs)
            if (Object.keys(languagesResponse.data).length > 0) {
              setLanguages(languagesResponse.data)
            }
          }
        }

        getLanguages()

    }, [requestArgs])

    return (
      <>
        {languages &&
          <>
            <span className={styles.languagesBar}>{Object.keys(languages).map(key => {
                        const currentBytes: number = languages[key]
                        const percentage = (currentBytes / maxBytes) * 100
                        return <span key={`lang-${key}`} className={cs(styles.languageSpan)} style={{ width: `${percentage}%` }}/>
                    })}</span>
            <ul>
              {Object.keys(languages).map(key => {
                            const currentBytes: number = languages[key]
                            const percentage = (currentBytes / maxBytes) * 100
                            return <li key={`language-${key.toLowerCase()}-usages`}>{key}: {percentage.toFixed(2)}%</li>
                        })}
            </ul>
          </>

            }
      </>
    )
}
