import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addActiveCategory, removeActiveCategory } from '../../slices/blogFeedSlice'
import styled from "styled-components"
import tw from "twin.macro"

const StyledEmbeddedCategoryLabel = styled.div.attrs({
    className: 'py-1 px-2 border-purple-500 text-purple-500 bg-purple-100'
})`
    ${tw`border rounded-full`}
    ${tw`block align-middle text-center text-xs`}
`

/**
 * Category label
 *
 * This component is used in the Blog feed filter and on the article rows.
 *
 * @param isActive  indicates whether or not to use the "active" version, which is the default for most cases
 *                  except in the blog feed filter, where they are inactive until the user toggles them.
 * @returns
 */
const EmbeddedCategoryFilterLabel = ({
    label,
}: {
    label: string,
}) => {
    const activeCategories = useSelector((state: any) => state.blog.activeCategories)
    const dispatch = useDispatch()
    return (
        <StyledEmbeddedCategoryLabel
          onClick={() => {
                if (activeCategories.includes(label)) {
                    dispatch(removeActiveCategory(label))
                } else {
                    dispatch(addActiveCategory(label))
                }
            }}
        >
            <p>{label}</p>
        </StyledEmbeddedCategoryLabel>
    )
}

export default EmbeddedCategoryFilterLabel
