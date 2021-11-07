import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addActiveCategory, removeActiveCategory } from '../../slices/blogFeedSlice'
import { THEME } from '../../style/colors'

const StyledEmbeddedCategoryLabel = styled.div`
    text-align: center;
    color: ${THEME.light.font.tagActive};
    background-color: ${THEME.light.background.tagActive};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 0.75rem;
    border-radius: 3px;
    & {
        p {
            color: currentColor;
        }
    }
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
