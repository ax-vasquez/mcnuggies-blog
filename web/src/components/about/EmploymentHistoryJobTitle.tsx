import React from 'react'
import { SanityJobTitle } from '../../../graphql-types'
import { MONTHS } from '../../pages/blog'
import * as styles from './EmploymentHistoryList.module.scss'

const EmploymentHistoryJobTitle = ({ jobTitle }: { jobTitle: SanityJobTitle }) => {
    const {
        title,
        startDate,
        endDate,
        currentJobTitle,
        responsibilities,
    } = jobTitle

    const startDateParts = startDate.split(`-`)
    const startDateString = `${MONTHS[startDateParts[1]]}, ${startDateParts[0]}`
    let endDateParts = []
    let endDateString = ``

    if (endDate) {
        endDateParts = endDate.split(`-`)
        endDateString = `${MONTHS[endDateParts[1]]}, ${endDateParts[0]}`
    }

    return (
        <div className={styles.jobTitleContainer}>
            <span>
                <h4>{title}</h4>
                <p>
                    {startDateString}
                    {` `}
                    -
                    {` `}
                    {(currentJobTitle) ? `Present` : endDateString}
                </p>
            </span>
            <ul className={styles.responsibilitiesList}>
                {responsibilities.map((responsibility) => (
                    <li key={`responsibility-${responsibility}`}>
                        {responsibility}
                    </li>
                  ))}
            </ul>
        </div>
    )
}

export default EmploymentHistoryJobTitle
