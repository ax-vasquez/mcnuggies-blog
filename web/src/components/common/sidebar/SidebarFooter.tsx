import { Link } from 'gatsby'
import React from 'react'
import styled from "styled-components"
import tw from "twin.macro"

const StyledSidebarFooter = styled.div.attrs({
    className: 'bottom-0'
})`
    ${tw`text-sm`}
    ${tw`absolute`}
    ${tw`left-1/2`}
    transform: translate(-50% , -50%);
`

const StyledFooterLink = styled(Link).attrs({
    className: 'hover:text-white'
})`
    ${tw`text-gray-300`}
`

const FOOTER_ITEMS = [
    'privacy',
    'contact'
]

const SidebarFooter = () => {
    return (
        <StyledSidebarFooter>
            <div style={{
                textAlign: 'center'
            }}>
                {FOOTER_ITEMS.map(item => (
                    <div 
                        key={`sidebar-footer-link-${item.toLowerCase()}`}
                        style={{
                            display: 'inline-block',
                            marginLeft: '0.5em',
                            marginRight: '0.5em'
                        }}
                    >
                        <StyledFooterLink to={'#'} >{item}</StyledFooterLink>
                    </div>
                ))}
            </div>
            <p style={{
                textAlign: 'center',
                fontSize: '12px',
            }}>©{new Date().getFullYear()}</p>
        </StyledSidebarFooter>
    )
}

export default SidebarFooter
