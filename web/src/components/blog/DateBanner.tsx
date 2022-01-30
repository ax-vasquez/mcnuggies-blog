import React from 'react'
import { RiFilter3Fill } from '@react-icons/all-files/ri/RiFilter3Fill'
import { useDispatch } from 'react-redux'
import { toggleShowModal } from '../../slices/blogFeedSlice'
import * as styles from './DateBanner.module.scss'

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
        <button
          className={styles.container}
          type="button"
          onClick={() => dispatch(toggleShowModal())}
        >
            <div className={styles.label}>
                <h3>
                    {dateString}
                </h3>
                <div>
                    <RiFilter3Fill />
                </div>
            </div>
        </button>
    )
}

export default DateBanner
