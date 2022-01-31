import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import * as styles from './ProjectRow.module.scss'
import ghLogo from '../../images/octocat-logo.png'

const ProjectRow = ({
    title,
    repoUrl,
    _rawDescription,
}: {
    title: string
    repoUrl: string
    _rawDescription: any // TODO: Find out what the type should be here
}) => {

    return (
        <li className={styles.container}>
            <div>
                <div className={styles.headerRow}>
                    <a href={repoUrl} target="_blank" rel="noreferrer">
                        <img className={styles.integrationImage} src={ghLogo} alt="gh-logo" />
                    </a>
                    <h2>{title}</h2>
                </div>
                <BlockContent blocks={_rawDescription} />
            </div>
        </li>
    )
}

export default ProjectRow
