import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { SanityEmployer } from '../../../graphql-types'
import { THEME } from '../../style/colors'
import EmploymentHistoryJobTitle from './EmploymentHistoryJobTitle'

const StyledEmployerRow = styled.div`
    display: inline-flex;
    vertical-align: middle;
    margin: 1rem 0 1rem 0;
    & {
        h3 {
            margin: 0 0 0 0.5rem; 
        }
    }
`

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
    padding-left: 0 !important;
    & {
        ul {
            padding-left: 0;
        }
    }
`

const StyledJobTitleListItem = styled.li`
    list-style-type: none;
    padding-left: 0 !important;
`

const StyledEmployerIcon = styled(GatsbyImage)`
    width: 2rem;
    height: 2rem;
`

const EmploymentHistoryList = ({ employers }: { employers: SanityEmployer[] }) => {
    return (
        <div>
            <h2>Employment History</h2>
            <StyledEmploymentHistoryList>
                {employers.length > 0
                    ? employers.map((employer) => {
                        const employerIcon = getImage(employer.image.asset.gatsbyImageData)
                        return (
                            <StyledEmploymentHistoryListItem>
                                <StyledEmployerRow>
                                    <a href={employer.homePage} target="_blank" rel="noreferrer">
                                        <StyledEmployerIcon image={employerIcon} alt="employer_image" />
                                    </a>
                                    <h3>{employer.name}</h3>
                                </StyledEmployerRow>
                                <ul>
                                    {employer.jobTitles.map((jobTitle) => {
                                        return (
                                            <StyledJobTitleListItem>
                                                <EmploymentHistoryJobTitle jobTitle={jobTitle} />
                                            </StyledJobTitleListItem>
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
