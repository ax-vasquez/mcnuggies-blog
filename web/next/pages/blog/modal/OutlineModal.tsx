import React from 'react'
import styles from './OutlineModal.module.scss'
import cs from 'clsx'
import CustomIcon from '../../../components/shared/CustomIcon'
import { OutlineItem } from '../[slug]'

interface OutlineModalProps {
    items: {
        [index: number]: OutlineItem
    }
    isOpen: boolean
    onClose: () => void
}

export const OutlineModal: React.FC<OutlineModalProps> = ({
    items,
    isOpen,
    onClose
}) => {
    console.log(`ITEMS: `, items)
    return (
      <div className={cs(styles.background, !isOpen && styles.closed)}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Outline</h2>
            <button onClick={onClose}>
              <CustomIcon
                    fileName='x-large'
                    height={22}
                    width={22}
                />
            </button>
          </div>
          <ol type="I">
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
      </div>
    )
}
