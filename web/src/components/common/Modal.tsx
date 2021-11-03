import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleShowModal } from '../../slices/blogFeedSlice'
import styled from "styled-components"
import ModalField from './ModalField'
import { COLORS } from '../../style/colors'
import { device } from '../../style/devices'

const StyledModalBackground = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 30;
`

const StyledModal = styled.div`
    top: 10%;
    left: 0px;
    right: 0px;
    padding: 0.5rem;
    background-color: ${COLORS.white};
    padding-left: 1rem;
    padding-right: 1rem;
    position: absolute;
    margin: auto;
    display: block;
    border-radius: 0.25rem;
    width: 66.666667%;
    height: auto;
    z-index: 40;
    @media ${device.laptop} {
        padding-left: 5rem;
        padding-right: 5rem;
    }
    @media ${device.mobileL} {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const StyledModalTitleRow = styled.div`
    text-align: center;
    & {
        h1 {
            font-size: 1.5rem;
            line-height: 2rem;
        }
    }
`

const StyledWideSubmitButton = styled.button`
    text-align: center;
    width: 100%;
    border-color: ${COLORS.green[300]}
    border-width: 2px;
    border-radius: 0.25rem;
    color: ${COLORS.green[500]};
    background-color: ${COLORS.green[100]};
    &:hover {
        background-color: ${COLORS.green[200]};
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
