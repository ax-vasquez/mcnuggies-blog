import React, { useState } from 'react'
import { FaBook } from '@react-icons/all-files/fa/FaBook'
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle'
import { FaHardHat } from '@react-icons/all-files/fa/FaHardHat'
import { Link } from 'gatsby'
import * as styles from './Tile.module.scss'

const Tile = ({
    label,
}: {
    label: string
}) => {

    const [hovered, setHovered] = useState(false)

    let icon: JSX.Element
    if (label.toLowerCase() === `blog`) {
        icon = <FaBook className={styles.icon} size={128} />
    }
    if (label.toLowerCase() === `about`) {
        icon = <FaInfoCircle className={styles.icon} size={128} />
    }
    if (label.toLowerCase() === `projects`) {
        icon = <FaHardHat className={styles.icon} size={128} />
    }
    return (
        <Link
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`${styles.container} ${hovered ? styles.hovered : undefined}`}
          id={`home-banner-${label}`}
          to={`/${label}`}
        >
            <div className={styles.tileContent}>
                {icon}
                <h2 className={styles.tileLabel}>
                    {label}
                </h2>
            </div>

        </Link>
    )
}

export default Tile
