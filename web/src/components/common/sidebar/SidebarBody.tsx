import React from 'react'
import styled from "styled-components"

const StyledSidebarBody = styled.div`
    font-size: 1.25rem;
    line-height: 1.75rem;
`

const SidebarBody = (props: { children: any }) => {

    const { children } = props

    return (
        <StyledSidebarBody>
            {children}
        </StyledSidebarBody>
    )
}

export default SidebarBody
