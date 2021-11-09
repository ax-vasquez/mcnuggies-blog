import React from 'react'
import styled from 'styled-components'
import { SanityJobTitle } from '../../../graphql-types'
import { THEME } from '../../style/colors'

const StyledJobTitleDiv = styled.div`
    margin-left: 4rem;
`

const StyledJobTitleSpan = styled.span`
    display: inline-flex;
    width: 100%;
    align-items: center;
    & {
        h4 {
            margin-top: 0;
            margin-bottom: 0;
        }
        p {
            margin-top: 0;
            margin-bottom: 0;
            padding-left: 1rem;
            font-style: italic;
            color: ${THEME.light.font.accent};
        }
    }
`

const StlyedResponsibilitiesList = styled.ul`
    border-left: solid 3px;
    border-color: ${THEME.light.border.default};
    padding: 0px !important;
    margin-left: 1rem;
`

/**
 * The — symbol is the "em dash", which is the "long dash" symbol. To enter it (on linux),
 * press CTRL+SHIFT+U > type `2014` and press `ENTER`
 */
const StyledResponsibilitiesListItem = styled.li`
    margin: 1rem 0 1rem 0;
    list-style-type: none;
`

const EmploymentHistoryJobTitle = ({ jobTitle }: { jobTitle: SanityJobTitle }) => {
    return (
        <StyledJobTitleDiv>
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
            <StlyedResponsibilitiesList>
                {jobTitle.responsibilities.map((responsibility) => (
                    <StyledResponsibilitiesListItem>
                        {responsibility}
                    </StyledResponsibilitiesListItem>
                  ))}
            </StlyedResponsibilitiesList>
        </StyledJobTitleDiv>
    )
}

export default EmploymentHistoryJobTitle
