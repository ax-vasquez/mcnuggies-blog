import React from 'react'
import { ButtonGridFieldConfig } from '../../../types/common'
import styled from "styled-components"
import VariableButton from '../controls/VariableButton'
import { device } from '../../../style/devices'

const StyledButtonGrid = styled.div`
    width: 100%;
    display: grid;
    gap: 1rem;
    @media ${device.mobileL} {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    @media ${device.laptop} {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
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
