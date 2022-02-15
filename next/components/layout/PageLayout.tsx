import React from 'react'
import Head from "next/head"
import { Container } from "react-bootstrap"
import SiteNavigation from './nav/NavBar'

interface PageLayoutProps {
    pageTitle: string
    metaDescription?: string
    metaContent?: string
    children: any
}

export const PageLayout = ({
    pageTitle,
    metaDescription,
    metaContent,
    children
}: PageLayoutProps) => {
    return (
        <>
            <SiteNavigation />
            <Container>
                <Head>
                    <title>{pageTitle}</title>
                    <meta name={metaDescription} content={metaContent} />
                    <link rel="icon" href="/mcnuggies.ico" />
                </Head>
                
                <main>
                    {children}
                </main>
            </Container>
        </>
        
    )
}