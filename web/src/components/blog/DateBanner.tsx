import React from 'react'
import { RiFilter3Fill } from '@react-icons/all-files/ri/RiFilter3Fill'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { toggleShowModal } from '../../slices/blogFeedSlice'
import { THEME } from '../../style/colors'

const StyledDateBannerButton = styled.button`
    top: 3.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 0.25rem;
    background-color: ${THEME.light.background.dateBanner};
    position: sticky;
    width: 100%;
    display: block;
    text-align: center;
    z-index: 10;
    &:hover {
        background-color: ${THEME.light.background.dateBannerHovered};
    }
`

const StyledDateBannerLabelContainer = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    color: ${THEME.light.font.dateBanner};
    & {
        h3 {
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
            font-size: 1.25rem;
            line-height: 1.75rem;
            font-style: italic;
            font-weight: 200;
            display: inline-block;
            color: currentColor;
        }
        div {
            margin-left: 0.5rem;
            display: inline-block;
            stroke: currentColor;
        }
    }
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
    const dispatch = useDispatch()

    return (
        <StyledDateBannerButton
          type="button"
          onClick={() => dispatch(toggleShowModal())}
        >
            <StyledDateBannerLabelContainer>
                <h3>
                    {dateString}
                </h3>
                <div>
                    <RiFilter3Fill />
                </div>
            </StyledDateBannerLabelContainer>
        </StyledDateBannerButton>
    )
}

export default DateBanner
