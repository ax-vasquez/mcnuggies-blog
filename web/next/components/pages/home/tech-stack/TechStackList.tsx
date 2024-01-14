import React from 'react'
import { ReactNode } from 'react'
import kebabCase from '../../../../util/kebabCase'
import { TechStackIntegration } from './TechStackIntegration'
import styles from './TechStackList.module.scss'

type TechStackIntegrationConfig = {
    provider: string
    iconFileName: string
    description: string
    homePage: string
}

interface TechStackListProps {
    label?: ReactNode
    integrations: TechStackIntegrationConfig[]
}

const TechStackList: React.FC<TechStackListProps> = ({
    label,
    integrations
}) => {
    return (
      <>
        <div className={styles.labelContainer}>
          {label}
        </div>
        <div className={styles.listContainer}>
          {integrations.map(integration => <TechStackIntegration
              key={kebabCase(integration.provider)}
              {...integration}
          />)}
        </div>
      </>
    )
}

export default TechStackList
