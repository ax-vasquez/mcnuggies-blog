import React from 'react'
import styled from 'styled-components'
import { SanityCategory } from '../../../graphql-types'
import { THEME } from '../../style/colors'

const StyledCategoryBadgeListItem = styled.li`
    background-color: ${THEME.light.background.tagActive};
    color: ${THEME.light.font.tagActive};
    display: inline;
    margin-left: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-radius: 20px;
`

export const CategoryBadge = ({ category }: { category: SanityCategory }) => {
    return (
        <StyledCategoryBadgeListItem>
            {category.title}
        </StyledCategoryBadgeListItem>
    )
}
