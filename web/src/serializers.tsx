import React from 'react'
import { Link } from 'gatsby'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import styled from 'styled-components'
import { COLORS } from './style/colors'

const StyledHighlightSpan = styled.span`
    border-radius: 0.25rem;
    padding: 0.25rem;
    background-color: ${COLORS.yellow[200]};
`

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
                <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>
            )
        },
    },
    marks: {
        highlight: ({ children }) => <StyledHighlightSpan>{children}</StyledHighlightSpan>,
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
    // Wrap each list item in a span - allows for greater control in styling
    listItem: ({ children }) => <li><span>{children}</span></li>,
}

export default serializers
