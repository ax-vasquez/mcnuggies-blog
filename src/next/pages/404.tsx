import React from 'react'
import Image from 'next/image'
import { PageLayout } from '../components/layout/PageLayout'
import styles from './404.module.scss'

const Custom404: React.FC = () => {
    return (
      <PageLayout
            metaDescription='404 (not found) error page'
            pageTitle='404'
        >
        <div
            className={styles.content}
        >
          <h1>404 - Not Found</h1>
          <Image
                src={`/mcnuggies-404.png`}
                alt={`mcnuggies 404`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: `50%`, height: `auto` }}
            />
        </div>
      </PageLayout>
    )
}

export default Custom404
