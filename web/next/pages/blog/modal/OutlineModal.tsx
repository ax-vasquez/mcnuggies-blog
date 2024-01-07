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
    // Recursively-create the nested outline lists
    const makeList = ( itemsLocal: { [index: number]: OutlineItem } ) => {
        return (
          <ol type="I">
            {Object.keys(itemsLocal).map((itemIdxString) => {
                const itemIdx = parseInt(itemIdxString)
                return (
                  <li key={itemIdx}>
                    {itemsLocal[itemIdx].label}
                    {itemsLocal[itemIdx].children && makeList(itemsLocal[itemIdx].children!)}
                  </li>
                )
            })}
          </ol>
        )
    }
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
          {makeList(items)}
        </div>
      </div>
    )
}
