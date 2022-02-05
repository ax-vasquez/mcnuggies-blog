import React from 'react'
import ModalField from './ModalField'
import * as styles from './Modal.module.scss'

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
            <div className={styles.background} />
            <div className={styles.modal}>
                <div className={styles.titleRow}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.scrollingFieldsList}>
                    {fields.map((field) => field)}
                </div>
                <ModalField>
                    <button className={styles.submitButton} type="button" onClick={() => closeHandler()}>
                        OK
                    </button>
                </ModalField>
            </div>
        </>
    )
}

export default Modal
