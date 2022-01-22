import { IconType } from '@react-icons/all-files/lib'
import React from 'react'
import styled from 'styled-components'

const StyledModalField = styled.div`
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const StyledModalFieldLabel = styled.div`
    margin-bottom: 0.5rem;
    text-align: center;
    display: inline-block;
    width: 100%;
    & {
        h2 {
            display: inline-block;
            font-weight: 200;
            font-size: 1.25rem;
        }
        svg {
            margin-left: 1rem;
            margin-top: auto;
            margin-bottom: auto;
        }
    }
`

const ModalField = ({
    children,
    label,
    ButtonIcon,
    buttonClickHandler,
}:{
    children: any
    label?: string
    ButtonIcon?: IconType
    buttonClickHandler?: () => void
}) => {

    return (
        <StyledModalField>
            {label ? (
                <StyledModalFieldLabel>
                    <h2>
                        {label}
                    </h2>
                    {ButtonIcon
                    ? <ButtonIcon onClick={() => buttonClickHandler()} />
                    : null }
                </StyledModalFieldLabel>
          )
            : null }
            {children}
        </StyledModalField>
    )
}

export default ModalField
