import React, { useEffect, useState } from 'react'
import { TextInputFieldConfig } from '../../../types/common'
import styled from "styled-components"
import tw from "twin.macro"

const StyledInput = styled.input.attrs({
    className: "border-b-2 w-full"
})`
    ${tw`rounded text-center mx-auto`}
    &:focus {
        ${tw`outline-none`}
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
