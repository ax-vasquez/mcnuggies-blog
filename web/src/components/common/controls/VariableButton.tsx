import React, { useState } from 'react'
import styled from "styled-components"
import { COLORS } from '../../../style/colors'

const StyledButtonActive = styled.button`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-width: 1px;
    border-radius: 9999px;
    border-color: ${COLORS.purple[500]};
    color: ${COLORS.purple[500]};
    background-color: ${COLORS.purple[100]};
    display: block;
    vertical-align: middle;
    text-align: center;
    font-size: 0.75rem;
    line-height: 1rem;
`

const StyledButtonInactive = styled.button`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-width: 1px;
    border-radius: 9999px;
    border-color: ${COLORS.gray[500]};
    color: ${COLORS.gray[400]};
    background-color: ${COLORS.gray[100]};
    display: block;
    vertical-align: middle;
    text-align: center;
    font-size: 0.75rem;
    line-height: 1rem;
    &:hover {
        color: ${COLORS.purple[500]};
        border-color: ${COLORS.purple[500]};
        background-color: ${COLORS.purple[100]};
    }
`

const VariableButton = (props) => {

    const { active, label, onClick }: { active: Boolean, label: string, onClick: (e) => void } = props

    const [isActive, setIsActive] = useState(active)

    const toggleActive = (e) => {
        setIsActive(!isActive)
        onClick(e)
    }

    return isActive ?
    ( 
        <StyledButtonActive
            type="button"
            onClick={toggleActive}
        >
            <p>{label}</p>
        </StyledButtonActive>
    )
    :
    (
        <StyledButtonInactive
            type="button"
            onClick={toggleActive}
        >
            <p>{label}</p>
        </StyledButtonInactive>
    )
}

export default VariableButton
