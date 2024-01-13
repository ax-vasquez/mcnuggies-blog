import React from 'react'
import Head from "next/head"
import SiteNavigation from './nav/NavBar'
import Sidebar from './sidebar/Sidebar'
import Image from 'next/image'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import styles from './PageLayout.module.scss'
import Footer from './footer/Footer'

interface PageLayoutProps {
    pageTitle?: string
    useTitleOverlay?: boolean
    metaDescription: string | undefined
    children: any
    imgSrc?: string
}

export const PageLayout = ({
    pageTitle,
    useTitleOverlay = false,
    metaDescription,
    children,
    imgSrc
}: PageLayoutProps) => {
    return (
      <div className={styles.siteContent}>
        <Head>
          <title>{`mcnuggies | ${pageTitle}`}</title>
          <meta name='description' content={metaDescription} />
          <link rel="icon" href="/mcnuggies.ico" />
        </Head>
        <Script defer data-domain="mcnuggies.dev" src="https://plausible.io/js/script.js" />
        <SpeedInsights />
        <SiteNavigation />
        <Sidebar
              options={[]}
          />
        {!!imgSrc && (
          <div className={styles.heroImageContainer}>
            {!!pageTitle && useTitleOverlay &&  (
              <div className={styles.heroImageOverlay}>
                <h1>{pageTitle}</h1>
              </div>
            )}
            <div className={styles.heroImage}>
              <Image
                src={imgSrc}
                height={0}
                width={0}
                sizes="100vw"
                fill
                alt='hero-image'
                priority={true}
                style={{ objectFit: `cover` }}
              />
            </div>
          </div>
        )}
        <main>
          {children}
        </main>
        <Footer />
      </div>
    )
}
