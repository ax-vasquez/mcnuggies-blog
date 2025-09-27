import React, { FunctionComponent } from 'react'
import style from './Category.module.scss'
import cs from 'clsx'

interface CategoryProps {
    title: string
    isActive?: boolean
    onClick?: () => void
}

export const Category: FunctionComponent<CategoryProps> = ({
    title,
    isActive = false,
    onClick
}) => {
    return (
      <div
            className={cs(isActive ? style.categoryActive : style.categoryDefault)}
            onClick={onClick}
        >
        {title}
      </div>
    )
}
