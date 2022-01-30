import React from 'react'
import { SanityCategory } from '../../../graphql-types'
import { CategoryBadge } from './CategoryBadge'
import * as styles from './CategoryList.module.scss'

export const CategoryList = ({ categories }: { categories: SanityCategory[] }) => {
    return (
        <div className={styles.list}>
            {categories.map((category) => <CategoryBadge category={category} />)}
        </div>
    )
}
