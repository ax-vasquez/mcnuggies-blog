import Link from 'next/link'
import React, { useMemo } from 'react'
import CustomIcon from '../../shared/CustomIcon'
import cs from 'clsx'
import styles from './DeploymentComponent.module.scss'

export type DeploymentState = | `error`
| `failure`
| `inactive`
| `pending`
| `success`
| `queued`
| `in_progress`

interface DeploymentComponentProps {
    environment: string
    environmentUrl: string
    state: DeploymentState
    createdAt: string
}

export const DeploymentComponent: React.FC<DeploymentComponentProps> = ({
  createdAt,
    environment,
    environmentUrl,
    state
}) => {

  const statusIcon = useMemo(() => {
    return (
      <CustomIcon
          fileName={state === `success` ? `bootstrap-check-circle-filled` : `bootstrap-x-circle-filled` }
          height={22}
          width={22}
          // TODO: Add support for more statuses when this data is no longer packaged as part of the static site bundle
          className={cs({
            [styles.passedIcon]: state === `success`,
            [styles.failedIcon]: state === `failure`
          })}
      />
    )
  }, [state])

    return (
      <div className={styles.container}>
        <Link
                href={environmentUrl}
                passHref
                target='_blank'
            >
          {statusIcon}
          <span className={styles.deploymentLabel}>{environment}</span>
          <span className={styles.deploymentCreatedAt}>{createdAt}</span>
        </Link>
      </div>
    )
}
