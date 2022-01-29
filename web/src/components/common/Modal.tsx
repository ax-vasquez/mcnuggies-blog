import React from 'react'
import styled from 'styled-components'
import ModalField from './ModalField'
import { THEME } from '../../style/colors'
import { device } from '../../style/devices'

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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    right: 0px;
    padding: 0.5rem;
    background-color: ${THEME.light.background.default}};
    padding-left: 1rem;
    padding-right: 1rem;
    position: fixed;
    display: block;
    border-radius: 0.25rem;
    height: auto;
    z-index: 40;
    @media ${device.mobileS} {
        padding-left: 1rem;
        padding-right: 1rem;
        width: 80%;
    }
    @media ${device.tablet} {
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
    width: 90%;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    color: ${THEME.light.font.dateBanner};
    background-color: ${THEME.light.background.dateBanner};
    &:hover {
        background-color: ${THEME.light.background.dateBannerHovered};
    }
`

const StyledScrollingFieldsList = styled.div`
    max-height: 50vh;
    overflow-y:auto;
`

const Modal = ({
    title,
    fields,
    closeHandler,
}:{
    title: string
    fields: JSX.Element[]
    closeHandler: () => void
}) => {

    return (
        <>
            <StyledModalBackground />
            <StyledModal>
                <StyledModalTitleRow>
                    <h1>{title}</h1>
                </StyledModalTitleRow>
                <StyledScrollingFieldsList>
                    {fields.map((field) => field)}
                </StyledScrollingFieldsList>
                <ModalField>
                    <StyledWideSubmitButton onClick={() => closeHandler()}>
                        OK
                    </StyledWideSubmitButton>
                </ModalField>
            </StyledModal>
        </>
    )
}

export default Modal
