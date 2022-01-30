import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import serializers from '../../serializers'
import { SanityCategory } from '../../../graphql-types'
import { CategoryList } from '../common/CategoryList'
import * as styles from './ArticleRow.module.scss'

const ArticleRow = (
    {
        title, publishDate, image, previewText, slug, categories,
    }:
    {
        title: string,
        publishDate: string,
        image: IGatsbyImageData,
        previewText: string,
        slug: string,
        categories: SanityCategory[]
    },
) => {

    return (
        <Link to={slug} className={styles.container}>
            <div className={styles.thumbnailContainer}>
                <GatsbyImage image={image} alt={`${title}_thumb`} />
            </div>
            <div className={styles.articleDetailsContainer}>
                <div className={styles.titleLine}>
                    <h3>{title}</h3>
                    <p>{publishDate}</p>
                </div>
                <CategoryList categories={categories} />
                <div className={styles.articlePreview}>
                    <BlockContent
                      blocks={previewText}
                      serializers={{
                            ...serializers,
                            marks: {},
                        }}
                    />
                </div>
            </div>
        </Link>
    )
}

export default ArticleRow
