import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleShowModal } from '../../slices/blogFeedSlice'
import styled from "styled-components"
import tw from "twin.macro"
import ModalField from './ModalField'

const StyledModalBackground = styled.div.attrs({
    className: "bg-black"
})`
    ${tw`fixed w-screen h-screen`}
    ${tw`bg-opacity-50`}
    ${tw`z-30`}
`

const StyledModal = styled.div.attrs({
    className: "inset-x-0 p-2 bg-white px-4 md:px-20"
})`
    top: 10%;
    ${tw`absolute m-auto block rounded`}
    ${tw`w-8/12 h-auto`}
    ${tw`z-40`}
`

const StyledModalTitleRow = styled.div.attrs({
    className: ''
})`
    ${tw`text-center`}
    & {
        h1 {
            ${tw`text-2xl`}
        }
    }
`

// TODO - need to fine tune
const StyledSubmitButton = styled.button.attrs({
    className: ''
})`
    ${tw``}
`

// TODO - need to fine tune
const StyledCancelButton = styled.button.attrs({
    className: ''
})`
    ${tw``}
`

const StyledWideSubmitButton = styled.button.attrs({
    className: 'border-2 rounded border-green-300 bg-green-100 text-green-500 hover:bg-green-200'
})`
    ${tw`text-center w-full`}
    &:hover {
        
    }
`

const Modal = (props) => {

    const {
        title,
        fields
    }: {
        title: string
        fields: JSX.Element[]
    } = props

    const dispatch = useDispatch()

    return (
        <>
            <StyledModalBackground />
            <StyledModal>
                <StyledModalTitleRow>
                    <h1>{title}</h1>
                </StyledModalTitleRow>
                {fields.map(field => field)}
                <ModalField>
                    <StyledWideSubmitButton onClick={(e) => dispatch(toggleShowModal(null))}>
                        OK
                    </StyledWideSubmitButton>
                </ModalField>
            </StyledModal>
        </>
    )
}

export default Modal
