import React, { FunctionComponent } from 'react'
import CustomIcon from '../../shared/CustomIcon'
import styles from './NoMatchFound.module.scss'

interface NoMatchFoundProps {
    query?: string
}

export const NoMatchFound: FunctionComponent<NoMatchFoundProps> = ({
    query
}) => {
    return (
      <div className={styles.noMatchFoundContainer}>
        <CustomIcon
                className={styles.noMatchIcon}
                fileName='bootstrap-emoji-frown'
                height={128}
                width={128}
            />
        <div className={styles.noMatchMessage}>
          No matches found
          {query && query.length > 0 && (<>
            {` for: `}<span className={styles.noMatchQueryText}>{query}</span>
          </>)}
        </div>
      </div>
    )
}
