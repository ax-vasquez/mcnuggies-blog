/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const siteNavSlice = createSlice({
    name: 'siteNav',
    initialState: {
        showSidebar: false,
    },
    reducers: {
        toggleShowSidebar(state) {
            state.showSidebar = !state.showSidebar
        },
    },
})

export const {
    toggleShowSidebar,
} = siteNavSlice.actions
export default siteNavSlice.reducer
