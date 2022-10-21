import { useState, useEffect } from "react"

const useUserAgent = () => {
    const [userAgent, setUserAgent] = useState("")

    useEffect(() => {
        if (navigator) {
            setUserAgent(navigator.userAgent)
        }
    }, [])

    return userAgent
}

export default useUserAgent
