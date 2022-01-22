import React from 'react'
import styled from 'styled-components'
import { SanityJobTitle } from '../../../graphql-types'
import { MONTHS } from '../../pages/blog'
import { THEME } from '../../style/colors'
import { device } from '../../style/devices'

const StyledJobTitleDiv = styled.div`
    @media ${device.mobileS} {
        margin-left: 1rem;
    }
    @media ${device.tablet} {
        margin-left: 4rem;
    }
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
    const {
        title,
        startDate,
        endDate,
        currentJobTitle,
        responsibilities,
    } = jobTitle

    const startDateParts = startDate.split(`-`)
    const startDateString = `${MONTHS[startDateParts[1]]}, ${startDateParts[0]}`
    let endDateParts = []
    let endDateString = ``

    if (endDate) {
        endDateParts = endDate.split(`-`)
        endDateString = `${MONTHS[endDateParts[1]]}, ${endDateParts[0]}`
    }

    return (
        <StyledJobTitleDiv>
            <StyledJobTitleSpan>
                <h4>{title}</h4>
                <p>
                    {startDateString}
                    {` `}
                    -
                    {` `}
                    {(currentJobTitle) ? `Present` : endDateString}
                </p>
            </StyledJobTitleSpan>
            <StlyedResponsibilitiesList>
                {responsibilities.map((responsibility) => (
                    <StyledResponsibilitiesListItem key={`responsibility-${responsibility}`}>
                        {responsibility}
                    </StyledResponsibilitiesListItem>
                  ))}
            </StlyedResponsibilitiesList>
        </StyledJobTitleDiv>
    )
}

export default EmploymentHistoryJobTitle
