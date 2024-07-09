import Link from 'next/link'
import React from 'react'

interface DeploymentComponentProps {
    environment: string
    environmentUrl: string
    state: | `error`
        | `failure`
        | `inactive`
        | `pending`
        | `success`
        | `queued`
        | `in_progress`
}

export const DeploymentComponent: React.FC<DeploymentComponentProps> = ({
    environment,
    environmentUrl,
    // state
}) => {
    return (
      <div>
        <Link
                href={environmentUrl}
                passHref
                target='_blank'
            >
          <span>{environment}</span>
        </Link>
      </div>
    )
}
