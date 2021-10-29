import React from 'react'
import SiteNav from './SiteNav'
import styled from "styled-components"
import tw from "twin.macro"

const LayoutContainer = styled.div`
    ${tw`w-full`}
    ${tw`h-full`}
`

const Layout = (props: { children: any }) => {

    const { children } = props

    return (
        <div>
            <SiteNav />
            <LayoutContainer>
                <main id="main">
                    {children}
                </main>
            </LayoutContainer>
        </div>
    )
}

export default Layout
