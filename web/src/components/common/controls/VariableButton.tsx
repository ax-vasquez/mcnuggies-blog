import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import tw from "twin.macro"

const StyledButtonActive = styled.button.attrs({
    className: 'py-3 px-6 border-purple-500 text-purple-500 bg-purple-100'
})`
    ${tw`border rounded-full`}
    ${tw`block align-middle text-center text-xs`}
`

const StyledButtonInactive = styled.button.attrs({
    className: 'py-3 px-6 hover:border-purple-500 hover:text-purple-500 hover:bg-purple-100'
})`
    ${tw`border border-gray-500 rounded-full`}
    ${tw`block align-middle text-center text-xs text-gray-400`}
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
