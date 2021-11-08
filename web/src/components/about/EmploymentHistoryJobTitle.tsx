import React from 'react'
import styled from 'styled-components'
import { SanityJobTitle } from '../../../graphql-types'
import { THEME } from '../../style/colors'

const StyledJobTitleSpan = styled.span`
    display: inline-flex;
    width: 100%;
    align-items: center;
    & {
        p {
            padding-left: 1rem;
            font-style: italic;
            color: ${THEME.light.font.accent};
        }
    }
`

const EmploymentHistoryJobTitle = ({ jobTitle }: { jobTitle: SanityJobTitle }) => {
    return (
        <div>
            <StyledJobTitleSpan>
                <h4>{jobTitle.title}</h4>
                <p>
                    {jobTitle.startDate}
                    {' '}
                    -
                    {' '}
                    {(jobTitle.currentJobTitle) ? 'Present' : jobTitle.endDate}
                </p>
            </StyledJobTitleSpan>
            <ul>
                {jobTitle.responsibilities.map((responsibility) => <li>{responsibility}</li>)}
            </ul>
        </div>
    )
}

export default EmploymentHistoryJobTitle
