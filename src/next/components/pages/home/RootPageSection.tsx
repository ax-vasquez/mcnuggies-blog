import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import kebabCase from '../../../util/kebabCase'
import CustomIcon from '../../shared/CustomIcon'
import styles from './RootPageSection.module.scss'

interface RootPageSectionProps {
    title: string
    href: string
    description: string
    iconFileName: string
}

export const RootPageSection: FunctionComponent<RootPageSectionProps> = ({
    title,
    href,
    description,
    iconFileName
}) => {
    return (
      <div className={styles.sectionContainer}
        data-cy={`root-page-item-${kebabCase(title)}`}
      >
        <Link
                href={href}
                passHref
            >
          <div className={styles.sectionContentWrapper}>
            <CustomIcon
                fileName={iconFileName}
                height={32}
                width={32}
            />
            <div>
              <div className={styles.sectionTitle}>
                {title}
              </div>
              <div className={styles.sectionDescription}>
                {description}
              </div>
            </div>
          </div>
        </Link>
      </div>

    )
}
