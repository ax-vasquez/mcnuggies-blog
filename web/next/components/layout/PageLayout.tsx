import React from 'react'
import Head from "next/head"
import { Container } from "react-bootstrap"
import SiteNavigation from './nav/NavBar'
import Sidebar from './sidebar/Sidebar'
import Image from 'next/image'

interface PageLayoutProps {
    pageTitle?: string
    metaDescription?: string
    metaContent?: string
    children: any
    imgSrc?: string
}

export const PageLayout = ({
    pageTitle,
    metaDescription,
    metaContent,
    children,
    imgSrc
}: PageLayoutProps) => {
    return (
      <div>
        <SiteNavigation />
        <Sidebar
                options={[]}
            />
        <div className='site-content'>
          {!!imgSrc && (
            <div className='hero-image-container'>
              {!!pageTitle && (
                <div className='hero-image-overlay'>
                  <h1>{pageTitle}</h1>
                </div>
              )}
              <div className='hero-image'>
                <Image
                  src={imgSrc}
                  height={1080}
                  width={1920}
								  alt='hero-image'
                />
              </div>
            </div>
          )}
          <Container>
            <Head>
              <title>mcnuggies | {pageTitle}</title>
              <meta name={metaDescription} content={metaContent} />
              <link rel="icon" href="/mcnuggies.ico" />
            </Head>
            <main>
              {children}
            </main>
          </Container>
        </div>
      </div>
    )
}
