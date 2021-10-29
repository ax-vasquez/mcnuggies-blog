import React from 'react'
import styled from "styled-components"
import tw from "twin.macro"
import PropTypes from 'prop-types';

const StyledModalField = styled.div.attrs({
    className: 'flex justify-center text-center my-4'
})`
    ${tw`block`}
`

const StyledModalFieldLabel = styled.div.attrs({
    className: 'mb-2 text-center'
})`
    & {
        h2 {
            ${tw`text-xl`}
        }
    }
`

const ModalField = (props) => {

    const { children, label } = props

    return (
        <StyledModalField>
            {!!label ? 
            <StyledModalFieldLabel>
                <h2>
                    {label}
                </h2>
            </StyledModalFieldLabel>
            : null }
            {children}
        </StyledModalField>
    )
}

export default ModalField
