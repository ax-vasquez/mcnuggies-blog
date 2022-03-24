import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import { JobTitle } from '../../../types/sanity'
import { MONTHS } from '../../../util/constants'
import kebabCase from '../../../util/kebabCase'
import styles from './EmployerDetails.module.scss'
import { EmployerJobHistory } from './EmployerJobHistory'
import cs from 'clsx'

export type EmployerProps = {
  name: string
  startDate: string
  homePage: string
  endDate?: string
  imageUrl: string
  jobs: JobTitle[]
}

export const getFormattedDateString = (dateStr: string) => {
  const date = new Date(dateStr)
  const month = MONTHS[date.getMonth()]
  const year = date.getFullYear()
  return `${month}, ${year}`
}

export const EmployerDetails: FunctionComponent<EmployerProps> = ({
  name,
  homePage,
  imageUrl,
  jobs,
  startDate,
  endDate
}) => {

    return (
      <div className={styles.employerContainer}>
        <div className={cs(styles.employerTitle, homePage && styles.linkedEmployer)}
          onClick={() => homePage ? window.open(homePage, `_blank`) : undefined}
        >
          <div className={styles.employerLogo}>
            <Image
                src={imageUrl}
                height={48}
                width={48}
                alt={`employer-logo-${kebabCase(name!.toLowerCase())}`}
            />
          </div>
          <div className={styles.employerNameAndDates}>
            <span className={styles.employerName}>{name!}</span>
            <span className={styles.employerDates}>{getFormattedDateString(startDate!)} - {(endDate && getFormattedDateString(endDate)) || `Present`}</span>
          </div>
        </div>
        <EmployerJobHistory
          employerName={name}
          jobs={jobs}
        />
      </div>
    )
}
