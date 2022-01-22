import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addActiveCategory, removeActiveCategory } from '../../slices/blogFeedSlice'

/**
 * Category label
 *
 * This component is used in the Blog feed filter and on the article rows.
 *
 * @param isActive  indicates whether or not to use the "active" version, which is the default for most cases
 *                  except in the blog feed filter, where they are inactive until the user toggles them.
 * @returns
 */
const CategoryFilterLabel = ({
    label,
}: {
    label: string,
}) => {
    const activeCategories = useSelector((state: any) => state.blog.activeCategories)
    const dispatch = useDispatch()
    return (
        <button
          type="button"
          className={activeCategories.includes(label) ? `category-label` : `category-label-inactive`}
          onClick={() => {
                if (activeCategories.includes(label)) {
                    dispatch(removeActiveCategory(label))
                } else {
                    dispatch(addActiveCategory(label))
                }
            }}
        >
            <p>{label}</p>
        </button>
    )
}

export default CategoryFilterLabel
