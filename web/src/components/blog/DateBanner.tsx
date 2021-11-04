import React, { useState } from 'react'
import { RiFilter3Fill } from '@react-icons/all-files/ri/RiFilter3Fill'
import { useDispatch } from 'react-redux'
import { toggleShowModal } from '../../slices/blogFeedSlice'
import styled from 'styled-components'
import { BG_COLORS, FONT_COLORS } from '../../style/colors'

const StyledDateBannerButton = styled.button`
    top: 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    background-color: ${BG_COLORS.dateBanner.light};
    position: sticky;
    width: 100%;
    display: block;
    text-align: center;
`

const StyledDateBannerLabelContainer = styled.div<{ hovered: boolean }>`
    display: block;
    margin-left: auto;
    margin-right: auto;
    & {
        h3 {
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
            font-size: 1.25rem;
            line-height: 1.75rem;
            font-style: italic;
            font-weight: 200;
            display: inline-block;
            color: ${FONT_COLORS.dateBanner.light};
            ${(props) => (props.hovered ? `
                color: ${FONT_COLORS.dateBanner.lightHovered};
            ` : null )}
        }
        div {
            margin-left: 0.5rem;
            display: inline-block;
            stroke: currentColor;
            color: ${FONT_COLORS.dateBanner.light};
            ${(props) => (props.hovered ? `
                color: ${FONT_COLORS.dateBanner.lightHovered};
            ` : null )}
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
    const [hovered, setHovered] = useState(false)
    const dispatch = useDispatch()

    return (
        <StyledDateBannerButton
          type="button"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => dispatch(toggleShowModal(null))}
        >
            <StyledDateBannerLabelContainer hovered={hovered}>
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
