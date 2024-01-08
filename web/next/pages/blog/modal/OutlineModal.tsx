import React from 'react'
import styles from './OutlineModal.module.scss'
import cs from 'clsx'
import CustomIcon from '../../../components/shared/CustomIcon'
import { OutlineItem, SeriesOutlineItem } from '../[slug]'
import Link from 'next/link'

interface OutlineModalProps {
    items: {
        [index: number]: OutlineItem
    }
    seriesOutline?: SeriesOutlineItem[]
    isOpen: boolean
    onClose: () => void
}

export const OutlineModal: React.FC<OutlineModalProps> = ({
    items,
    seriesOutline,
    isOpen,
    onClose
}) => {
    const makeOutline = () => {
        // Recursively-create the nested outline lists
        const makeList = ( itemsLocal: { [index: number]: OutlineItem } ) => {
            return (
              <ol type="I">
                {Object.keys(itemsLocal).map((itemIdxString) => {
                    const itemIdx = parseInt(itemIdxString)
                    return (
                      <li key={itemIdx}>
                        <Link
                            href={itemsLocal[itemIdx].href}
                            onClick={onClose}
                        >
                          {itemsLocal[itemIdx].label}
                        </Link>
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
    if (seriesOutline) {
        return (
          <div>
            {seriesOutline.map(seriesArticle => {
            if (seriesArticle.isCurrent) {
                return (
                  <div>
                    <p>{seriesArticle.title}</p>
                    {makeOutline()}
                  </div>
                )
            } else {
                return (
                  <div>
                    <p>{seriesArticle.title}</p>
                  </div>
                )
            }
        })}
          </div>
        )

    } else {
        return makeOutline()
    }
}
