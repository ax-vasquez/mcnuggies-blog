import React from 'react'
import { SanityCategory } from '../../../graphql-types'
import * as styles from './CategoryList.module.scss'

export const CategoryBadge = ({ category }: { category: SanityCategory }) => {
    return (
        <div className={styles.category}>
            {category.title}
        </div>
    )
}
