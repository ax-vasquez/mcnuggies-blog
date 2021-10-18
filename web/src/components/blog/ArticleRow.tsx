import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import serializers from '../../serializers'

const ArticleRow = (
    {
        title, publishDate, image, previewText, slug,
    }:
    {
        title: string,
        publishDate: string,
        image: IGatsbyImageData,
        previewText: string,
        slug: string
    },
) => {
    return (
        <Link to={slug} className="article-row">
            <div className="article-row-thumbnail-container">
                <GatsbyImage image={image} alt={`${title}_thumb`} className="article-row-thumbnail" />
            </div>
            <div className="article-row-details">
                <div className="article-row-title-line">
                    <h3 className="inline-block my-auto">{title}</h3>
                    <p className="inline-block">{publishDate}</p>
                </div>
                <blockquote>
                    <BlockContent
                      blocks={previewText}
                      serializers={{
                            ...serializers,
                            marks: {},
                        }}
                    />
                </blockquote>
            </div>
        </Link>
    )
}

export default ArticleRow
