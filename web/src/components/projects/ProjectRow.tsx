import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import { THEME } from '../../style/colors'

const StyledProjectsListItem = styled.li`
    margin-bottom: 1rem;
    padding: 1rem;
    border-top: solid;
    border-bottom: solid;
    border-width: 2px;
    border-color: ${THEME.light.border.default};
`

const StyledIntegrationImage = styled.img`
    height: 1.5rem;
`

const StyledProjectHeaderRow = styled.div`
    display: inline-flex;
    align-items: center;
    & {
        h2 {
            padding: 0;
            margin: 0;
        }
        a {
            margin-right: 1rem;
            background: none;
            padding: 0.25rem;
            border-radius: 2px;
            &:hover {
                background: #DFDFDF;
            }
        }
    }
`

const ProjectRow = ({
    title,
    repoUrl,
    _rawDescription,
}: {
    title: string
    repoUrl: string
    _rawDescription: any // TODO: Find out what the type should be here
}) => {

    return (
        <StyledProjectsListItem>
            <div>
                <StyledProjectHeaderRow>
                    <a href={repoUrl} target="_blank" rel="noreferrer">
                        <StyledIntegrationImage src="/GitHub-Mark-64px.png" alt="gh-logo" />
                    </a>
                    <h2>{title}</h2>
                </StyledProjectHeaderRow>
                <BlockContent blocks={_rawDescription} />
            </div>
        </StyledProjectsListItem>
    )
}

export default ProjectRow
