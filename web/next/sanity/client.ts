import client from '@sanity/client'

export default client({
    projectId: process.env.SANITY_PROJECT || `abc123`,
    dataset: process.env.SANITY_DATASET || `production`,
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: `v2021-10-21`
})
