import React from 'react'
import { DeploymentComponent } from '../DeploymentComponent'
import { PrunedDeploymentStatusData } from '../../../../pages/projects/[slug]'
import styles from './Deployments.module.scss'

interface DeploymentsProps {
    prunedDeploymentStatuses: { [key: string]: PrunedDeploymentStatusData } | null
}

export const Deployments: React.FC<DeploymentsProps> = ({
    prunedDeploymentStatuses
}) => {
    return (
      <>
        <h3>Deployments</h3>
        <div className={styles.deploymentsWrapper}>
          {!!prunedDeploymentStatuses && Object.keys(prunedDeploymentStatuses).map((deployment) => {
                  const {
                    createdAt,
                    environment,
                    environmentUrl,
                    state,
                  } = prunedDeploymentStatuses[deployment]
                  return (
                    <DeploymentComponent
                      key={`deployment-${environment.toLowerCase()}`}
                      environment={environment}
                      environmentUrl={environmentUrl}
                      state={state}
                      createdAt={createdAt}
                    />
                  )
                })}
        </div>
      </>
    )
}
