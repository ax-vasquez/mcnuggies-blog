import React, { useState } from 'react'
import styled from 'styled-components'
import { THEME } from '../../style/colors'
import { StyledBlockContent } from '../styled-components/common'

const StyledProjectsListItem = styled.li<{ hovered: boolean }>`
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-top: solid;
    border-bottom: solid;
    border-width: 2px;
    border-color: ${THEME.light.border.default};
    ${(props) => (props.hovered ? `
        background-color: ${THEME.light.background.defaultHovered};
    ` : '')}
`

const StyledIntegrationImage = styled.img`
    height: 2rem;
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

    const [hovered, setHovered] = useState(false)

    return (
        <StyledProjectsListItem hovered={hovered} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div>
                <h2>{title}</h2>
                <StyledBlockContent blocks={_rawDescription} />
                <div>
                    <a href={repoUrl} target="_blank" rel="noreferrer">
                        <StyledIntegrationImage src="/GitHub-Mark-64px.png" alt="gh-logo" />
                    </a>
                </div>
            </div>
        </StyledProjectsListItem>
    )
}

export default ProjectRow
