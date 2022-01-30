import React, { useState } from 'react'
import { TextInputFieldConfig } from '../../../types/common'

const TextInput = ({ data }: { data: TextInputFieldConfig }) => {

    const [inputValue, setInputValue] = useState(data.value)

    return (
        <input
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
