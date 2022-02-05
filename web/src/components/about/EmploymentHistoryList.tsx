import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { SanityEmployer, SanityJobTitle } from '../../../graphql-types'
import EmploymentHistoryJobTitle from './EmploymentHistoryJobTitle'
import * as styles from './EmploymentHistoryList.module.scss'

/**
 * Helper method to sort job titles by start date, to ensure the latest-held position
 * is at the top of the list
 */
const sortJobTitles = (firstEl: SanityJobTitle, secondEl: SanityJobTitle) => {
    if (firstEl.startDate < secondEl.startDate) {
        return 1
    }
    if (firstEl.startDate > secondEl.startDate) {
        return -1
    }
    return 0
}

const EmploymentHistoryList = ({ employers }: { employers: SanityEmployer[] }) => {
    return (
        <div className={styles.container}>
            <h2>Employment History</h2>
            <div className={styles.employmentHistoryList}>
                {employers.length > 0
                    ? employers.map((employer) => {
                        const employerIcon = getImage(employer.image.asset.gatsbyImageData)
                        return (
                            <li key={`${employer.name}`}>
                                <div className={styles.employerRow}>
                                    <a href={employer.homePage} target="_blank" rel="noreferrer">
                                        <GatsbyImage className={styles.employerIcon} image={employerIcon} alt="employer_image" />
                                    </a>
                                    <h3>{employer.name}</h3>
                                </div>
                                <ul>
                                    {employer.jobTitles.sort(sortJobTitles).map((jobTitle) => {
                                        return (
                                            <li key={`${employer.name}-${jobTitle.title}`}>
                                                <EmploymentHistoryJobTitle jobTitle={jobTitle} />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })
                : null}
            </div>
        </div>
    )
}

export default EmploymentHistoryList
