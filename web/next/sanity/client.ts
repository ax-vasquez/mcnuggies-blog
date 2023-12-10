import client from '@sanity/client'

export default client({
    projectId: process.env.SANITY_PROJECT,
    dataset: process.env.SANITY_DATASET,
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: `v2023-06-12`,
})
