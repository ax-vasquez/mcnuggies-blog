import { Article, Creator, Employer, JobTitle, Project, ProjectLink, ProjectLinkProvider, Series } from "../../types/sanity"
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import kebabCase from "../../util/kebabCase"

type SupportedTextStyles = `normal` | `h1` | `h2` | `h3` | `h4` | `blockquote`

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
        _rev: `asdfasdfasdfasdf`,
        _createdAt: moment(now).subtract(`1`, `y`).format(),
        _updatedAt: moment(now).subtract(`6`, `m`).format()
    } as SanityInternalFields
}

type BlockChild = {
    _key: string
    _type: `span`
    marks: [`strong` | `highlight` | `em` | `code`] | []
    /**
     * The "text content" for this block child
     */
    text: string
}

/**
 * Local type definition for the object containing link configuration for links within an article
 * body
 * 
 * @see https://www.sanity.io/docs/span-type
 */
type MarkDefs = [{
    _key: string
    _type: string
    url?: string
    href?: string
}] | []

type MockTextBlock = {
    _type: `block`
    children: BlockChild[]
    markDefs: MarkDefs
    style: SupportedTextStyles
    // TODO: implement logic to mock this data - low priority since it doesn't concern functionality
    level?: number
    // TODO: implement logic to mock this data - low priority since it doesn't concern functionality
    listItem?: `bullet`
}

/**
 * @see https://www.sanity.io/docs/block-content
 */
const generateMockTextBlock = ({ textSegments, style }: {
    textSegments: string[],
    style: SupportedTextStyles
}) => {
    return {
        children: textSegments.map(text => {
            return {
                _key: `abc123`, // TODO: find a more meaningful test constant to use here
                marks: [],  // TODO: Implement configurability for the various marks (pretty low priority; tests generally don't care about font styles)
                text: text,
            } as BlockChild
        }),
        markDefs: [],   // TODO: Implement configurability for links (IMPORTANT - this is needed in order to test mocked articles with links - link logic should be tested)
        style,
    } as MockTextBlock
}

const generateMockArticleBody = ({ sectionCount }: {
    sectionCount: number
}) => {
    let i = 0
    const bodyArray = [] as MockTextBlock[]
    while (i < sectionCount) {
        const sectionHeader = generateMockTextBlock({
            textSegments: [`Heading ${i}`],
            style: `h2`
        })
        const sectionBody = generateMockTextBlock({
            textSegments: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.`
            ],
            style: `normal`
        })
        bodyArray.push(sectionHeader)
        bodyArray.push(sectionBody)
        i++
    }

    return bodyArray
}

/**
 * Generate an arbitrary mock Creator bio
 * 
 * @returns an array of block text objects containing the mock bio
 */
const generateMockCreatorBio = () => {
    return [generateMockTextBlock({ textSegments: [`Some bio`], style: `normal` })]
}

export const MOCK_GENERATOR = () => {

    return {
        /**
         * Generate a mocked article
         * 
         * @param title         The title of the mocked article
         * @param publishDate   The publish date to use for the mocked article
         * @returns 
         */
        'article': ({ title, publishDate }: { title: string, publishDate: string }): Article => {
            return {
                _type: `article`,
                ...generateMockInternalData(),
                title,
                slug: {
                    _type: `slug`,
                    current: kebabCase(title),
                },
                publishDate,
                // TODO: Figure out how to get an image mocked (as with author, this is a "reference" field)
                image: undefined,
                // author: null - DON'T MOCK AUTHOR DATA HERE (unless you need to clear an error) - mocking author is pointless here - you need to mock the author separately
                body: generateMockArticleBody({ sectionCount: 5 }),
                summary: [{
                    _key: `asdf1234`,
                    ...generateMockTextBlock({ textSegments: [`Some summary text`], style: `normal` }),
                }]
                // categories - TODO
                // series - TODO
                // seriesIndex - TODO
            }
        },
        'creator': ({ name, githubUrl, linkedInUrl }: { name: string, githubUrl: string, linkedInUrl: string }): Creator => {
            return {
                _type: `creator`,
                ...generateMockInternalData(),
                name,
                slug: {
                    _type: `slug`,
                    current: kebabCase(name)
                },
                // TODO: Figure out how to get an image mocked through Sanity
                image: undefined,
                githubUrl,
                linkedInUrl,
                bio: generateMockCreatorBio()
            }
        },
        'employer': (): Employer => {
            return {
                _type: `employer`,
                ...generateMockInternalData(),
            }
        },
        'jobTitle': (): JobTitle => {
            return {
                _type: `jobTitle`,
                ...generateMockInternalData(),
            }
        },
        'project': (): Project => {
            return {
                _type: `project`,
                ...generateMockInternalData(),
            }
        },
        'projectLink': (): ProjectLink => {
            return {
                _type: `projectLink`,
                ...generateMockInternalData(),
            }
        },
        'projectLinkProvider': (): ProjectLinkProvider => {
            return {
                _type: `projectLinkProvider`,
                ...generateMockInternalData(),
            }
        },
        'series': (): Series => {
            return {
                _type: `series`,
                ...generateMockInternalData(),
            }
        }
    }
}