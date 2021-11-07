import React, { useState } from 'react'
import styled from 'styled-components'
import { THEME } from '../../../style/colors'

const StyledFilterButton = styled.button<{ active: boolean }>`
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
    border: none;
    border-radius: 3px;
    display: inline-flex;
    font-size: 0.75rem;
    ${(props) => (props.active ? `
        color: ${THEME.light.font.tagActive};
        background-color: ${THEME.light.background.tagActive};
        &:hover {
            background-color: ${THEME.light.background.tagActiveHovered};
        }
    ` : `
        color: ${THEME.light.font.tag};
        background-color: ${THEME.light.background.tag};
        &:hover {
            background-color: ${THEME.light.background.tagHovered};
        }
    `)}
`

const VariableFilterButton = ({
    active,
    label,
    onClick,
}: {
    active: boolean
    label: string
    onClick: () => void
}) => {

    const [isActive, setIsActive] = useState(active)

    const toggleActive = () => {
        setIsActive(!isActive)
        onClick()
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
