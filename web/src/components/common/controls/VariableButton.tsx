import React, { useState } from 'react'
import styled from "styled-components"
import { COLORS } from '../../../style/colors'

const StyledFilterButton = styled.button<{ active: boolean }>`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-right: 0.5rem;
    border-width: 1px;
    border-radius: 9999px;
    display: inline-block;
    font-size: 0.75rem;
    ${(props) => (props.active ? `
        border-color: ${COLORS.purple[500]};
        color: ${COLORS.purple[500]};
        background-color: ${COLORS.purple[100]};
    ` : `
        border-color: ${COLORS.gray[500]};
        color: ${COLORS.gray[400]};
        background-color: ${COLORS.gray[100]};
        &:hover {
            color: ${COLORS.purple[500]};
            border-color: ${COLORS.purple[500]};
            background-color: ${COLORS.purple[100]};
        }
    ` )}
`

const VariableFilterButton = (props) => {

    const { active, label, onClick }: { active: boolean, label: string, onClick: (e) => void } = props

    const [isActive, setIsActive] = useState(active)

    const toggleActive = (e) => {
        setIsActive(!isActive)
        onClick(e)
    }

    return ( 
        <StyledFilterButton
            type="button"
            onClick={toggleActive}
            active={isActive}
        >
            <p>{label}</p>
        </StyledFilterButton>
    )
}

export default VariableFilterButton
