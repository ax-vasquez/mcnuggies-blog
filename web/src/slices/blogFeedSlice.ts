import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const blogFeedSlice = createSlice({
    name: 'blogFeed',
    initialState: {
        activeCategories: [],
        filterText: '',
    },
    reducers: {
        addActiveCategory(state, action: PayloadAction<string>) {
            state.activeCategories.push(action.payload)
        },
        removeActiveCategory(state, action: PayloadAction<string>) {
            const index = state.activeCategories.indexOf(action.payload)
            state.activeCategories.splice(index, 1)
        },
        setFilterText(state, action: PayloadAction<string>) {
            state.filterText = action.payload // eslint-disable-line no-param-reassign
        },
        clearFilterText(state) {
            state.filterText = '' // eslint-disable-line no-param-reassign
        },
    },
})

export const {
    addActiveCategory,
    removeActiveCategory,
    setFilterText,
    clearFilterText,
} = blogFeedSlice.actions
export default blogFeedSlice.reducer
