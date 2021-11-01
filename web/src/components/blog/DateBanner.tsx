import React, { useState } from 'react'
import { RiFilter3Fill } from '@react-icons/all-files/ri/RiFilter3Fill'
import { useDispatch } from 'react-redux'
import { toggleShowModal } from '../../slices/blogFeedSlice'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledDateBannerButton = styled.button.attrs({
    className: 'my-4 top-12'
})`
    ${tw`shadow rounded`}
    ${tw`bg-gray-800`}
    ${tw`sticky`}
    ${tw`w-full`}
    ${tw`block text-center`}
`

const StyledDateBannerLabelContainer = styled.div.attrs({
    className: ''
})`
    ${tw`block mx-auto`}
`

const StyledBannerLabelInactive = styled.h3.attrs({
    className: 'my-1 text-white'
})`
    ${tw`text-xl italic font-extralight`}
    ${tw`inline-block`}
`

const StyledBannerLabelActive = styled.h3.attrs({
    className: 'my-1 text-purple-400'
})`
    ${tw`text-xl italic font-extralight`}
    ${tw`inline-block`}
`

const StyledBannerIconInactive = styled.h3.attrs({
    className: 'ml-2 text-white'
})`
    ${tw`inline-block`}
    ${tw`stroke-current`}
`

const StyledBannerIconActive = styled.h3.attrs({
    className: 'ml-2 text-purple-400'
})`
    ${tw`inline-block`}
    ${tw`stroke-current`}
`

/**
 * The YearBanner is intended to be a reactive and interactive part of the
 * blog feed UI that should feel "natural" for the user - as they scroll
 * through the feed, the banner should "stick" to the top of the screen,
 * just below the navbar.
 *
 * As the user scrolls, the year (and maybe month) values will be updated, ideally
 * in a scrolling animation (up or down, depending on the scroll direction)
 */
const DateBanner = ({ dateString }: { dateString: string }) => {
    const [hovered, setHovered] = useState(false)
    const dispatch = useDispatch()

    return (
        <StyledDateBannerButton
          type="button"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => dispatch(toggleShowModal(null))}
        >
            {hovered ? 
                <StyledDateBannerLabelContainer>
                    <StyledBannerLabelActive>
                        {dateString}
                    </StyledBannerLabelActive>
                    <StyledBannerIconActive>
                        <RiFilter3Fill />
                    </StyledBannerIconActive>
                </StyledDateBannerLabelContainer>
            :
                <StyledDateBannerLabelContainer>
                    <StyledBannerLabelInactive>
                        {dateString}
                    </StyledBannerLabelInactive>
                    <StyledBannerIconInactive>
                        <RiFilter3Fill />
                    </StyledBannerIconInactive>
                </StyledDateBannerLabelContainer>
            }
        </StyledDateBannerButton>
    )
}

export default DateBanner
