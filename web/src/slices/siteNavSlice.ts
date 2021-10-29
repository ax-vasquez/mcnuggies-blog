import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const siteNavSlice = createSlice({
    name: 'siteNav',
    initialState: {
        showSidebar: false,
    },
    reducers: {
        toggleShowSidebar(state, action) {
            state.showSidebar = !state.showSidebar
        },
    },
})

export const {
    toggleShowSidebar,
} = siteNavSlice.actions
export default siteNavSlice.reducer
