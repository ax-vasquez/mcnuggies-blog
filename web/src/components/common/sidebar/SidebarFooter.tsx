import { Link } from 'gatsby'
import React from 'react'
import styled from "styled-components"
import { COLORS } from '../../../style/colors'

const StyledSidebarFooter = styled.div`
    bottom: 0px;
    font-size: 0.875rem;
    line-height: 1.25rem;
    position: absolute;
    left: 50%;
    transform: translate(-50% , -50%);
`

const StyledFooterLink = styled(Link)`
    color: ${COLORS.gray[300]};
    &:hover {
        color: ${COLORS.white};
    }
    & {
        a {
            color: ${COLORS.gray[300]};
            &:hover {
                color: ${COLORS.white};
            }
        }
    }
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
