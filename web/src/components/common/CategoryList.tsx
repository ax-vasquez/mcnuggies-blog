import React from 'react'
import styled from 'styled-components'
import { SanityCategory } from '../../../graphql-types'
import { CategoryBadge } from './CategoryBadge'

const StyledCategoryList = styled.ul`
    padding-left: 0 !important;
    margin-top: 1rem;
    margin-bottom: 2rem;
    & {
        li:first-child {
            margin-left: 0;
        }
    }
`

export const CategoryList = ({ categories }: { categories: SanityCategory[] }) => {
    return (
        <StyledCategoryList>
            {categories.map((category) => <CategoryBadge category={category} />)}
        </StyledCategoryList>
    )
}
