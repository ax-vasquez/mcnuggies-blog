import { Article, Creator, Employer, JobTitle, Project, ProjectLink, ProjectLinkProvider, Series } from "../../types/sanity"
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'

type SanityInternalFields = {
    _id: string
    _rev: string
    _createdAt: string
    _updatedAt: string
  }

/**
 * Helper method to generate mock "internal" data. 
 * 
 * This data is specific to Sanity. If the data source for the site ever changes, then this will need to change, too.
 * 
 * Returns Sanity-internal fields configured using the following logic:
 * 1. Assigned a random UUID (not a static ID - cannot be used as an identifier in tests)
 * 2. Assigned a static value for the "revision" value (we can't meaningfully-test Sanity history API - we just need this value to be defined for testing purposes)
 * 3. Given a creation date of 1 year ago
 * 4. Given a last-updated date of 6 months ago
 * 
 * @see https://www.sanity.io/docs/ids
 */
const generateMockInternalData = () => {

    const now = Date.now()

    return {
        _id: uuidv4(),
        // This value "doesn't matter" in testing, but IS important for querying document history - we simply can't reasonably test this on our end in Cypress tests
        _rev: 'asdfasdfasdfasdf',
        _createdAt: moment(now).subtract('1', 'y').format(),
        _updatedAt: moment(now).subtract('6', 'm').format()
    } as SanityInternalFields
}

type BlockChild = {
    _key: string
    _type: 'span'
    marks: ['strong' | 'highlight' | 'em' | 'code']
    /**
     * The "text content" for this block child
     */
    text: string
}

/**
 * @see https://www.sanity.io/docs/span-type
 */
type MarkDefs = [{
    _key: string
    _type: string
    url?: string
    href?: string
}] | []

type TextBlockConfig = {
    _type: 'block'
    children: BlockChild[]
    markDefs: MarkDefs
    style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
    level?: number
    listItem?: 'bullet'
}

/**
 * @see https://www.sanity.io/docs/block-content
 */
const generateMockTextBlock = (config: TextBlockConfig) => {
    
}

// TODO: Add linting rule/CI check to ensure that there is a key for each type in this mock object
export const MOCK_GENERATOR = () => {

    return {
        'article': (): Article => {
            return {
                _type: 'article',
                ...generateMockInternalData(),
            }
        },
        'creator': (): Creator => {
            return {
                _type: 'creator',
                ...generateMockInternalData(),
            }
        },
        'employer': (): Employer => {
            return {
                _type: 'employer',
                ...generateMockInternalData(),
            }
        },
        'jobTitle': (): JobTitle => {
            return {
                _type: 'jobTitle',
                ...generateMockInternalData(),
            }
        },
        'project': (): Project => {
            return {
                _type: 'project',
                ...generateMockInternalData(),
            }
        },
        'projectLink': (): ProjectLink => {
            return {
                _type: 'projectLink',
                ...generateMockInternalData(),
            }
        },
        'projectLinkProvider': (): ProjectLinkProvider => {
            return {
                _type: 'projectLinkProvider',
                ...generateMockInternalData(),
            }
        },
        'series': (): Series => {
            return {
                _type: 'series',
                ...generateMockInternalData(),
            }
        }
    }
}