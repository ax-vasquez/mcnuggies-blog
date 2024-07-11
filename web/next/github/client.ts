import { Octokit } from "@octokit/core"

const octokitClient = new Octokit({
    auth: process.env.GITHUB_API_TOKEN
})

export default octokitClient
