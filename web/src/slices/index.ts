import { configureStore, createStore } from "@reduxjs/toolkit"
import blogFeedReducer from "./blogFeedSlice"

const reduxStore = configureStore({
    reducer: {
        blog: blogFeedReducer
    }
})

export default reduxStore
