import React from 'react'
import CustomIcon from '../../shared/CustomIcon'
import styles from './CreatorSocials.module.scss'

interface CreatorSocialsProps {
    githubUrl?: string
    linkedInUrl?: string
}

const CreatorSocials: React.FC<CreatorSocialsProps> = ({
    githubUrl,
    linkedInUrl
}) => {
    return (
      <div className={styles.container}>
        {!!githubUrl && (
          <CustomIcon
                  data-cy='github'
                  fileName='logo-github'
                  height={32}
                  width={32}
                  className='github-logo'
                  onClick={() => window.open(githubUrl!, `_blank`)}
                />
              )}
        {!!linkedInUrl && (
          <CustomIcon
                    data-cy='linkedin'
                  fileName='logo-linkedin'
                  height={32}
                  width={32}
                  className='linkedin-logo'
                  onClick={() => window.open(linkedInUrl!, `_blank`)}
                />
              )}
      </div>
    )
}

export default CreatorSocials
