import React, { useState } from 'react'
import styled from "styled-components"
import { BG_COLORS, BORDER_COLORS, FONT_COLORS } from '../../../style/colors'

const StyledFilterButton = styled.button<{ active: boolean }>`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-right: 0.5rem;
    border-width: 1px;
    border-radius: 9999px;
    display: inline-block;
    font-size: 0.75rem;
    ${(props) => (props.active ? `
        border-color: ${BORDER_COLORS.categoryLabel.active.light};
        color: ${FONT_COLORS.categoryLabel.active.light};
        background-color: ${BG_COLORS.categoryLabel.active.light};
    ` : `
        border-color: ${BORDER_COLORS.categoryLabel.default.light};
        color: ${FONT_COLORS.categoryLabel.default.light};
        background-color: ${BG_COLORS.categoryLabel.default.light};
        &:hover {
            border-color: ${BORDER_COLORS.categoryLabel.active.light};
            color: ${FONT_COLORS.categoryLabel.active};
            background-color: ${BG_COLORS.categoryLabel.active.light};
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
