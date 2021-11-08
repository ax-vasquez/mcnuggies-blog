import React from 'react'
import styled from 'styled-components'
import { SanityEmployer } from '../../../graphql-types'
import { THEME } from '../../style/colors'
import EmploymentHistoryJobTitle from './EmploymentHistoryJobTitle'

const StyledEmploymentHistoryList = styled.ul`
    list-style-type: none !important;
    padding-left: 0px !important;
`

const StyledEmploymentHistoryListItem = styled.li`
    border-top: solid;
    border-bottom: solid;
    border-width: 2px;
    border-color: ${THEME.light.border.default};
    padding-bottom: 2rem;
`

const EmploymentHistoryList = ({ employers }: { employers: SanityEmployer[] }) => {
    return (
        <div>
            <h2>Employment History</h2>
            <StyledEmploymentHistoryList>
                {employers.length > 0
                    ? employers.map((employer) => {
                        return (
                            <StyledEmploymentHistoryListItem>
                                <div>
                                    <h3>{employer.name}</h3>
                                </div>
                                <ul>
                                    {employer.jobTitles.map((jobTitle) => {
                                        return (
                                            <li>
                                                <EmploymentHistoryJobTitle jobTitle={jobTitle} />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </StyledEmploymentHistoryListItem>
                        )
                    })
                : null}
            </StyledEmploymentHistoryList>
        </div>
    )
}

export default EmploymentHistoryList
