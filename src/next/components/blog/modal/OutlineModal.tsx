import React from 'react'
import styles from './OutlineModal.module.scss'
import { OutlineItem, SeriesOutlineItem } from '../../../pages/blog/[slug]'
import Link from 'next/link'
import kebabCase from '../../../util/kebabCase'
import { Modal } from '../../shared/modal/Modal'

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
      <Modal
        title={`${isPartOfSeries ? `Series ` : ``}Outline`}
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className={styles.outlineWrapper}>
          {isPartOfSeries ?
                makeSeriesOutline()
            :
                makeOutline()
            }
        </div>
      </Modal>
    )
}

export default OutlineModal
