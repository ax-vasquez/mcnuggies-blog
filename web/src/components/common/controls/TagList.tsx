import React from 'react'
import { ButtonGridFieldConfig } from '../../../types/common'
import VariableFilterButton from './VariableButton'
import * as styles from './TagList.module.scss'

const TagList = ({ data }: { data: ButtonGridFieldConfig }) => {

    return (
        <div className={styles.tagList}>
            {Object.keys(data.buttons).map((key) => {
                const {
                    label,
                    active,
                    onClick,
                } = data.buttons[key]
                return (
                    <VariableFilterButton
                      key={`grid-btn-${label.toLowerCase()}`}
                      active={active}
                      label={label}
                      onClick={onClick}
                    />
                )
            })}
        </div>
    )
}

export default TagList
