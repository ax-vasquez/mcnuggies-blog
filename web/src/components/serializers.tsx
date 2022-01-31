import React from 'react'
import { Link } from 'gatsby'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import * as styles from './serializers.module.scss'

/**
 * @see https://www.sanity.io/docs/portable-text-to-react#proptypes
 */
const serializers = {
    container: ({ children }) => {
        return (
            children.map((block) => {
                return (
                    <div
                      key={`${block.key}`}
                      className="article-block"
                    >
                        {block}
                    </div>
                )
            })
        )
    },
    types: {
        code: (props) => {
            const { language, code } = props.node
            return (
                <SyntaxHighlighter theme="" language={language}>{code}</SyntaxHighlighter>
            )
        },
    },
    marks: {
        highlight: ({ children }) => <span className={styles.highlight}>{children}</span>,
        internalLink: ({ mark, children }) => {
            const { slug } = mark.reference
            return <Link to={`/blog/${slug.current}`}>{children}</Link>
        },
        link: ({ mark, children }) => {
            return (
                <a href={mark.url} target="_blank" rel="noreferrer">
                    {children}
                </a>
            )
        },
    },
}

export default serializers
