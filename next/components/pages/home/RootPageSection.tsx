import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import CustomIcon from '../../util/CustomIcon'
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
        <div className={styles.sectionContainer}>
            <Link
                href={href}
            >
                <div className={styles.sectionContentWrapper}>
                    <CustomIcon 
                        fileName={iconFileName}
                        height={128}
                        width={128}
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
