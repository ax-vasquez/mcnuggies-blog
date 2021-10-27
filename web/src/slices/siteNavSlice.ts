import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalData } from '../types/modal'

const siteNavSlice = createSlice({
    name: 'siteNav',
    initialState: {
        showSidebar: false,
        modal: null as ModalData,
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
