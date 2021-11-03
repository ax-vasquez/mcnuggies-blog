import React, { useState } from 'react'
import { TextInputFieldConfig } from '../../../types/common'
import styled from "styled-components"

const StyledInput = styled.input`
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-width: 2px;
    width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
    }
`

const TextInput = ({ data }: { data: TextInputFieldConfig }) => {

    const [inputValue, setInputValue] = useState(data.value)

    return (
        <StyledInput placeholder={data.placeholder} onChange={e => {
            setInputValue(e.target.value)
            data.onChange(e)
        }} value={inputValue}/>
    )
}

export default TextInput
