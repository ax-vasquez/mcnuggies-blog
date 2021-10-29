import React from 'react'
import styled from "styled-components"
import tw from "twin.macro"

const StyledSidebarBody = styled.div.attrs({
    className: 'pt-14'
})`
    ${tw`text-xl`}
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
