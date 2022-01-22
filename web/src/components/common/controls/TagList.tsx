import React from 'react'
import styled from 'styled-components'
import { ButtonGridFieldConfig } from '../../../types/common'
import VariableFilterButton from './VariableButton'

const StyledCategoryList = styled.ul`
    padding-inline-start: 0px;
    width: 80%;
    margin: auto;
`

const TagList = ({ data }: { data: ButtonGridFieldConfig }) => {

    return (
        <StyledCategoryList>
            {Object.keys(data.buttons).map((key) => {
                const {
                    label,
                    active,
                    onClick,
                } = data.buttons[key]
                return (
                    <VariableFilterButton
                      key={`grid-btn-${label.toLowerCase()}`}
                      active={active}
                      label={label}
                      onClick={onClick}
                    />
                )
            })}
        </StyledCategoryList>
    )
}

export default TagList
