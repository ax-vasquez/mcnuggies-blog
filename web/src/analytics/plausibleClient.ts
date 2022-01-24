export const PlausibleClient = ({ token, domain }: { token: string, domain: string }) => {

    const baseRequestOptions = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return {
        async getViewsForPage({ page }: { page: string }) {
            const response = await fetch(`https://plausible.io/api/v1/stats/aggregate?site_id=${domain}&filters=event:page==${page}`, {
                ...baseRequestOptions,
                method: `GET`,
            })
            const fullResponseJson = await response.json()
            return fullResponseJson.results.visitors.value
        },
    }
}
