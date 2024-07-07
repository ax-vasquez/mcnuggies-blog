import React from 'react'
import styles from './ProjectComponent.module.scss'
import Link from 'next/link'
import CustomIcon from '../../shared/CustomIcon'

interface ProjectComponentProps {
    title: string
    slug: string
    repoUrl: string
    description: React.ReactNode
}

export const ProjectComponent: React.FC<ProjectComponentProps> = ({
    title,
    slug,
    repoUrl,
    description
}) => {
    return (
      <div className={styles.container}>
        <Link
                href={`/projects/${slug}`}
                passHref
            >
          <div>
            <div className={styles.projectHeading}>
              <h2>{title}</h2>
              <CustomIcon
                            data-cy='github'
                            fileName='logo-github'
                            height={32}
                            width={32}
                            className='github-logo'
                            onClick={() => window.open(repoUrl!, `_blank`)}
                        />
            </div>
            <div className={styles.descriptionText}>
              {description}
            </div>
          </div>
        </Link>
      </div>
    )
}
