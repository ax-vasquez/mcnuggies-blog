import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addActiveCategory, removeActiveCategory } from '../../slices/blogFeedSlice'
import styled from "styled-components"
import { BG_COLORS, BORDER_COLORS, FONT_COLORS } from '../../style/colors'

const StyledEmbeddedCategoryLabel = styled.div`
    border-color: ${BORDER_COLORS.categoryLabel.active.light};
    text-align: center;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: ${FONT_COLORS.categoryLabel.active.light};
    background-color: ${BG_COLORS.categoryLabel.active.light};
    border: solid;
    border-radius: 9999px;
    display: block;
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
