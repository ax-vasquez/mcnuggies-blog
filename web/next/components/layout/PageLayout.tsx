import React from 'react'
import Head from "next/head"
import SiteNavigation from './nav/NavBar'
import Sidebar from './sidebar/Sidebar'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import Footer from './footer/Footer'
import HeroImage from './hero-image/HeroImage'

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
      <>
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
          <HeroImage
            pageTitle={pageTitle}
            useTitleOverlay={useTitleOverlay}
            imgSrc={imgSrc}
          />
        )}
        <main>
          {children}
        </main>
        <Footer />
      </>
    )
}
