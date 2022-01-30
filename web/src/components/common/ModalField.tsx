import { IconType } from '@react-icons/all-files/lib'
import React from 'react'
import * as styles from './Modal.module.scss'

const ModalField = ({
    children,
    label,
    ButtonIcon,
    buttonClickHandler,
}:{
    children: any
    label?: string
    ButtonIcon?: IconType
    buttonClickHandler?: () => void
}) => {

    return (
        <div className={styles.modalField}>
            {label ? (
                <div className={styles.modalFieldLabel}>
                    <h2>
                        {label}
                    </h2>
                    {ButtonIcon
                    ? <ButtonIcon onClick={() => buttonClickHandler()} />
                    : null }
                </div>
          )
            : null }
            {children}
        </div>
    )
}

export default ModalField
