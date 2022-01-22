import React, { useState } from 'react'
import styled from 'styled-components'
import { THEME } from '../../../style/colors'
import { device } from '../../../style/devices'
import { TextInputFieldConfig } from '../../../types/common'

const StyledInput = styled.input`
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-width: 2px;
    border-color: ${THEME.light.border.default};
    padding-bottom: 0.25rem;
    font-size: 1.1rem;
    width: 90%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    &:focus {
        outline: none;
    }
    @media ${device.mobileS} {
        
    }
    @media ${device.tablet} {
        
    }
`

const TextInput = ({ data }: { data: TextInputFieldConfig }) => {

    const [inputValue, setInputValue] = useState(data.value)

    return (
        <StyledInput
          placeholder={data.placeholder}
          onChange={(e) => {
            setInputValue(e.target.value)
            data.onChange(e)
        }}
          value={inputValue}
        />
    )
}

export default TextInput
