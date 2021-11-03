import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addActiveCategory, removeActiveCategory } from '../../slices/blogFeedSlice'
import styled from "styled-components"
import { COLORS } from '../../style/colors'

const StyledEmbeddedCategoryLabel = styled.div`
    border-color: ${COLORS.purple[500]};
    text-align: center;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: ${COLORS.purple[500]};
    background-color: ${COLORS.purple[100]};
    border: solid;
    border-radius: 9999px;
    display: block;
    vertical-align: middle;
    font-size: 0.75rem;
    line-height: 1rem;
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
