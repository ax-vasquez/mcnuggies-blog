import { configureStore } from '@reduxjs/toolkit'
import blogFeedReducer from './blogFeedSlice'
import siteNavReducer from './siteNavSlice'
import rootReducer from './rootSlice'

const reduxStore = configureStore({
    reducer: {
        blog: blogFeedReducer,
        nav: siteNavReducer,
        root: rootReducer,
    },
})

export default reduxStore
