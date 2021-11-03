import React from 'react'
import { ButtonGridFieldConfig } from '../../../types/common'
import styled from "styled-components"
import VariableFilterButton from '../controls/VariableButton'

const StyledButtonGrid = styled.ul`
    padding-inline-start: 0px;
`

const ButtonGrid = ({ data }: { data: ButtonGridFieldConfig }) => {

    return (
        <StyledButtonGrid>
            {Object.keys(data.buttons).map(key => {
                const {
                    label,
                    active,
                    onClick
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
        </StyledButtonGrid>
    )
}

export default ButtonGrid
