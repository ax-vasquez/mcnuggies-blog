// @reach/router comes from Gatsby and is not an actual dependency of this site (will result in linting error)
// eslint-disable-next-line import/no-unresolved
import { Location, LocationContext } from '@reach/router'
import { Link } from 'gatsby'
import React from 'react'
import { BiRightArrow } from '@react-icons/all-files/bi/BiRightArrow'
import styled, { css, keyframes } from 'styled-components'
import { SidebarMenuOptions } from '../../../types/sidebar'
import { THEME } from '../../../style/colors'

// styled-components keyframes doesn't work in React Native - for that, you need to use the ReactNative.Animated API
// See https://styled-components.com/docs/basics#animations
const iconBounce = keyframes`
    0%, 100% {
        transform: translateX(25%);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        
    }
    50% {
        transform: translateX(0);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
`

// Starting in styled-components v4, you must access keyframes via the css helper
const bounceAnimation = () => css`
    animation: ${iconBounce} .75s infinite;
`

const StyledBouncingIcon = styled(BiRightArrow)<{ bounce: boolean }>`
    color: ${THEME.light.font.sidebar};
    vertical-align: middle;
    ${(props) => (props.bounce ? bounceAnimation : null)}
`

const StyledMenuOptionListContainerDiv = styled.div`
    width: 100%
`

const StyledSidebarMenuOption = styled(Link)`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    display: block;
    &:hover {
        background-color: ${THEME.light.background.sidebarHovered};
    }
`

const StyledSidebarMenuOptionIconHolder = styled.div`
    padding-left: 0.5rem;
    display: inline-block;
`

const StyledRootMenuOptionLabel = styled.div`
    padding-left: 1rem;
    display: inline-block;
    vertical-align: middle;
    color: ${THEME.light.font.sidebar};
`

const SidebarBodyList = ({
    options,
}: {
    options: SidebarMenuOptions
}) => {

    const isActiveItem = (label: string, locationProps: LocationContext) => {
        const { location } = locationProps
        switch (label) {
            case 'Home': {
                return location.pathname === '/'
            }
            case 'About':
            case 'Projects':
            case 'Blog': {
                return location.pathname.includes(label.toLowerCase())
            }
            default: return false
        }

    }

    return (
        <Location>
            {(locationProps) => (
                <StyledMenuOptionListContainerDiv>
                    {Object.keys(options).map((key) => {
                        const { url, label } = options[key]
                        const shouldBounce = isActiveItem(label, locationProps)
                        return (
                            <StyledSidebarMenuOption key={key} to={url} data-cy={`sidebar-menu-option-${label.toLowerCase().replace(' ', '-')}`}>
                                <StyledSidebarMenuOptionIconHolder>
                                    <StyledBouncingIcon bounce={shouldBounce} />
                                </StyledSidebarMenuOptionIconHolder>
                                <StyledRootMenuOptionLabel>{label}</StyledRootMenuOptionLabel>
                            </StyledSidebarMenuOption>
                        )
                    })}
                </StyledMenuOptionListContainerDiv>
            )}
        </Location>
    )
}

export default SidebarBodyList
