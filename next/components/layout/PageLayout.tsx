import React from 'react'
import Head from "next/head"
import { Container } from "react-bootstrap"

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
    )
}