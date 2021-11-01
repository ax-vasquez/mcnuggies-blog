import { Link } from 'gatsby'
import React from 'react'
import { BiRightArrow } from '@react-icons/all-files/bi/BiRightArrow'
import { SidebarMenuOptions } from '../../../types/sidebar'
import { Location, LocationContext } from '@reach/router'
import styled from "styled-components"
import tw from "twin.macro"

const StyledSidebarMenuOption = styled(Link).attrs({
    className: 'py-2 mb-2'
})`
    ${tw`text-gray-300 hover:text-gray-300 hover:bg-gray-800`}
    ${tw`block`}
`

const StyledSidebarMenuOptionIconHolder = styled.div.attrs({
    className: 'pl-6'
})`
    ${tw`inline-block`}
    ${tw`align-middle`}
`

const StyledRootMenuOptionLabel = styled.div.attrs({
    className: 'pl-4'
})`
    ${tw`hover:bg-gray-800`}
    ${tw`inline-block`}
    ${tw`align-middle`}
`

const SidebarBodyList = ({
    options,
}: {
    options: SidebarMenuOptions
}) => {

    const isActiveItem = (label: string, locationProps: LocationContext) => {
        const { location } = locationProps
        switch(label) {
            case 'Home': {
                return location.pathname === '/'
            }
            case 'About':
            case 'Blog': {
                return location.pathname.includes(label.toLowerCase())
            }
        }
        
    }

    return (
        <Location>
            {locationProps => (
                <div>
                    {Object.keys(options).map((key) => {
                        const { url, label } = options[key]
                        const shouldBounce = isActiveItem(label, locationProps)
                        return (
                            <StyledSidebarMenuOption key={key} to={url} data-cy={`sidebar-menu-option-${label.toLowerCase().replace(' ', '-')}`}>
                                <StyledSidebarMenuOptionIconHolder>
                                    {/* Easier to use vanilla CSS here since we don't need an "inactive" variant; it's either bouncing, or it's not */}
                                    <BiRightArrow className={ shouldBounce ? 'root-menu-item-icon-active' : null }/>
                                </StyledSidebarMenuOptionIconHolder>
                                <StyledRootMenuOptionLabel>{label}</StyledRootMenuOptionLabel>
                            </StyledSidebarMenuOption>
                        )
                    })}
                </div>
            )}
        </Location>
    )
}

export default SidebarBodyList
