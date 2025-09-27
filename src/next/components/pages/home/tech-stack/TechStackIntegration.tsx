import React, { FunctionComponent } from 'react'
import CustomIcon from '../../../shared/CustomIcon'
import styles from './TechStackIntegration.module.scss'

interface TechStackIntegrationProps {
    provider: string
    iconFileName: string
    description: string
    homePage: string
}

export const TechStackIntegration: FunctionComponent<TechStackIntegrationProps> = ({
    provider,
    iconFileName,
    description,
    homePage
}) => {
    return (
      <div className={styles.techStackIntegration}
            onClick={() => window.open(homePage, `_blank`)}
        >
        <div className={styles.integrationTitle}>
          <CustomIcon
                    fileName={iconFileName}
                    height={32}
                    width={32}
                />
          <h3>
            {provider}
          </h3>
        </div>
        <div className={styles.integrationDescription}>
          {description}
        </div>
      </div>
    )
}
