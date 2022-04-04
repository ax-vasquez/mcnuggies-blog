import { Article, Creator, Employer, JobTitle, Project, ProjectLink, ProjectLinkProvider, Series } from "../../types/sanity"

// TODO: Add linting rule/CI check to ensure that there is a key for each type in this mock object
export const MOCKS = () => {
    return {
        'article': () => {
            return {

            } as Article
        },
        'creator': () => {
            return {

            } as Creator
        },
        'employer': () => {
            return {

            } as Employer
        },
        'jobTitle': () => {
            return {

            } as JobTitle
        },
        'project': () => {
            return {
                
            } as Project
        },
        'projectLink': () => {
            return {

            } as ProjectLink
        },
        'projectLinkProvider': () => {
            return {

            } as ProjectLinkProvider
        },
        'series': () => {
            return {

            } as Series
        }
    }
}