import React from 'react'
import styles from './OutlineModal.module.scss'
import cs from 'clsx'
import CustomIcon from '../../../components/shared/CustomIcon'
import { OutlineItem, SeriesOutlineItem } from '../[slug]'
import Link from 'next/link'
import kebabCase from '../../../util/kebabCase'

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
    const isPartOfSeries = seriesOutline && seriesOutline.length > 0
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
        return makeList(items)
    }
    const makeSeriesOutline = () => {
        if (!seriesOutline) return null
        return (
          <ol>
            {seriesOutline.map((seriesArticle) => {
                return (
                  <li key={`outline-item-series-${kebabCase(seriesArticle.title)}`}>
                    <div
                        style={{
                            display: `inline-flex`,
                            alignItems: `center`
                        }}
                    >
                      <Link href={`${seriesArticle.slug}`} className={styles.seriesArticleLabel}>{seriesArticle.title}</Link>
                    </div>
                    {seriesArticle.isCurrent && makeOutline()}
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
            <h2>{isPartOfSeries && `Series `}Outline</h2>
            <button onClick={onClose}>
              <CustomIcon
                        fileName='x-large'
                        height={22}
                        width={22}
                    />
            </button>
          </div>
          <div className={styles.outlineWrapper}>
            {isPartOfSeries ?
                makeSeriesOutline()
            :
                makeOutline()
            }
          </div>
        </div>
      </div>
    )
}
