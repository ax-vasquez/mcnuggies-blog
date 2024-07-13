import React from 'react'
import cs from 'clsx'
import styles from './Modal.module.scss'
import CustomIcon from '../CustomIcon'

interface ModalProps {
    title: string
    isOpen: boolean
    onClose: () => void
    children?: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({
    title,
    isOpen,
    children,
    onClose
}) => {
    return (
      <div className={cs(styles.background, !isOpen && styles.closed)}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>{title}</h2>
            <button onClick={onClose}>
              <CustomIcon
                        fileName='bootstrap-x-large'
                        height={22}
                        width={22}
                    />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
}
