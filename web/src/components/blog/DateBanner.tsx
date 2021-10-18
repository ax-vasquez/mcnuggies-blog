import React, { useState } from 'react'
import { RiFilter3Fill } from '@react-icons/all-files/ri/RiFilter3Fill'

/**
 * The YearBanner is intended to be a reactive and interactive part of the
 * blog feed UI that should feel "natural" for the user - as they scroll
 * through the feed, the banner should "stick" to the top of the screen,
 * just below the navbar.
 *
 * As the user scrolls, the year (and maybe month) values will be updated, ideally
 * in a scrolling animation (up or down, depending on the scroll direction)
 */
const DateBanner = ({ dateString, setShowFilterModal }: { dateString: string, setShowFilterModal: () => void}) => {
    const [hovered, setHovered] = useState(false)
    return (
        <button
          type="button"
          className="date-banner"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setShowFilterModal()}
        >
            <div className="block mx-auto">
                <h3 className={hovered ? 'date-banner-text-active' : 'date-banner-text'}>{dateString}</h3>
                {/* N.B.
                    I found out the hard way that not all icons in react-icons can actually be styled (either through
                    inheriting the color from the parent, setting it manually through the CSS class, or even using
                    the IconProvider.Context API, as suggested in the react-icons documentation). Fortunately, this
                    only seems to be limited to Grommet icons (e.g., anything prefixed with "Gr"). Save yourself some
                    pain and just don't use those <3
                */}
                <div className={hovered ? 'date-banner-icon-active' : 'date-banner-icon'}>
                    <RiFilter3Fill />
                </div>
            </div>
        </button>
    )
}

export default DateBanner
