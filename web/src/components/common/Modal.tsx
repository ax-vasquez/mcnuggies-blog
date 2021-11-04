import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleShowModal } from '../../slices/blogFeedSlice'
import styled from "styled-components"
import ModalField from './ModalField'
import { BG_COLORS, BORDER_COLORS, FONT_COLORS } from '../../style/colors'
import { device } from '../../style/devices'
import { FONT } from '../../style/font'

const StyledModalBackground = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 30;
`

/**
 * This class needs to have the font-family defined separately from the root div because the Modal
 * is stored outside of the context of the root div wherever it's used.
 */
const StyledModal = styled.div`
    top: 10%;
    left: 0px;
    right: 0px;
    padding: 0.5rem;
    background-color: ${BG_COLORS.modal.light};
    padding-left: 1rem;
    padding-right: 1rem;
    position: absolute;
    margin: auto;
    display: block;
    border-radius: 0.25rem;
    height: auto;
    z-index: 40;
    font-family: ${FONT.family};
    @media ${device.mobileL} {
        padding-left: 1rem;
        padding-right: 1rem;
        width: 66.666667%;
    }
    @media ${device.laptop} {
        padding-left: 5rem;
        padding-right: 5rem;
        width: 30%;
    }
`

const StyledModalTitleRow = styled.div`
    text-align: center;
    & {
        h1 {
            font-weight: 300;
            font-size: 1.5rem;
            line-height: 2rem;
        }
    }
`

const StyledWideSubmitButton = styled.button`
    text-align: center;
    width: 100%;
    border-color: ${BORDER_COLORS.modal.buttons.submit.light};
    border-width: 2px;
    border-radius: 0.25rem;
    color: ${FONT_COLORS.modal.buttons.submit.light};
    background-color: ${BG_COLORS.modal.buttons.submit.light};
    &:hover {
        background-color: ${BG_COLORS.modal.buttons.submit.lightHovered};
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
