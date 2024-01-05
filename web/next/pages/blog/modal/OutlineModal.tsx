import React from 'react'
import styles from './OutlineModal.module.scss'

interface OutlineModalProps {
    items: {
        [index: number]: {
            label: string
            href: string
        }
    }
    isOpen: boolean
}

export const OutlineModal: React.FC<OutlineModalProps> = ({
    items,
    isOpen
}) => {
    if (!isOpen) {
        return null
    }
    return (
      <div className={styles.container}>
        <h2>Outline</h2>
        <ol>
          {Object.keys(items).map(itemIdxString => {
            const itemIdx = parseInt(itemIdxString)
            return (
              <li key={itemIdx}>
                {items[itemIdx].label}
              </li>
            )
          })}
        </ol>
      </div>
    )
}
