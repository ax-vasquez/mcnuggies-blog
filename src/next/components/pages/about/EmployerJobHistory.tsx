import React, { FunctionComponent } from 'react'
import { JobTitle } from '../../../types/sanity'
import kebabCase from '../../../util/kebabCase'
import { getFormattedDateString } from './EmployerDetails'
import styles from './EmployerJobHistory.module.scss'

interface EmployerJobHistoryProps {
    employerName: string,
    jobs: JobTitle[]
}

export const EmployerJobHistory: FunctionComponent<EmployerJobHistoryProps> = ({
    employerName,
    jobs,
}) => {
    return (
      <ul>
        {/* Reverse the array since there doesn't appear to set the sorting in the GROQ query for this field - 
            this makes it so that the latest job title is at the top of the list */}
        {[...jobs].reverse().map(job => {
                const keyCoreString = `${kebabCase(employerName.toLowerCase())}-${job.title!}`
                return <li key={`job-title-${keyCoreString}`}>
                  <div className={styles.jobTitleContainer}>
                    <div className={styles.jobTitleAndDates}>
                      <span className={styles.jobTitle}>{job.title!}</span>
                      <span className={styles.jobTitleDates}>{getFormattedDateString(job.startDate!)} - {(job.endDate && getFormattedDateString(job.endDate)) || `Present`}</span>
                    </div>
                    <ul className={styles.jobResponsibilities}>
                      {job.responsibilities!.map((responsibility, i) => <li key={`responsibility-${i}-${keyCoreString}`}>{responsibility}</li>)}
                    </ul>
                  </div>
                </li>
            })}
      </ul>
    )
}
