import React from 'react'
import * as styles from './VariableButton.module.scss'

const VariableFilterButton = ({
    active,
    label,
    onClick,
}: {
    active: boolean
    label: string
    onClick: () => void
}) => {

    return (
        <button
          type="button"
          onClick={onClick}
          className={`${styles.container} ${active ? styles.active : styles.inactive}`}
        >
            <p>{label}</p>
        </button>
    )
}

export default VariableFilterButton
