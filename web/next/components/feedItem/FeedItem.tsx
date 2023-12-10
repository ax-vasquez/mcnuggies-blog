import Link from 'next/link'
import React, {FunctionComponent} from 'react'
import styles from './FeedItem.module.scss'

interface FeedItemProps {
    title: string
    href: string
    image?: any
    subtitle?: string
    textContent: React.ReactNode
}

const FeedItem: FunctionComponent<FeedItemProps> = ({
    title,
    href,
    // image,
    // subtitle,
    textContent
}) => {
    return (
      <div className={styles.container} data-cy='blog-feed-item'>
        <Link
                href={href}
            >
          <div>
            <h2>{title}</h2>
            {textContent}
          </div>
        </Link>
      </div>


    )
}

export default FeedItem
