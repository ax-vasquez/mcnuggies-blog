import { configureStore } from '@reduxjs/toolkit'
import blogFeedReducer from './blogFeedSlice'
import siteNavReducer from './siteNavSlice'

const reduxStore = configureStore({
    reducer: {
        blog: blogFeedReducer,
        nav: siteNavReducer
    },
})

export default reduxStore
