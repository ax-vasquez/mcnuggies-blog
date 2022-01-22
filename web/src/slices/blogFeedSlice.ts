/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const blogFeedSlice = createSlice({
    name: `blogFeed`,
    initialState: {
        activeCategories: [],
        filterText: ``,
        showModal: false,
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
            state.filterText = action.payload
        },
        clearFilterText(state) {
            state.filterText = ``
        },
        toggleShowModal(state) {
            state.showModal = !state.showModal
        },
    },
})

export const {
    addActiveCategory,
    removeActiveCategory,
    setFilterText,
    clearFilterText,
    toggleShowModal,
} = blogFeedSlice.actions
export default blogFeedSlice.reducer
