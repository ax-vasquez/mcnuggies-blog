import React, { useEffect } from 'react'
import { ButtonGridFieldConfig } from '../../../types/common'
import styled from "styled-components"
import tw from "twin.macro"
import VariableButton from '../controls/VariableButton'

const StyledButtonGrid = styled.div.attrs({
    className: "w-full gap-4"
})`
    ${tw`grid grid-cols-1 md:grid-cols-4`}
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
                    <VariableButton 
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
