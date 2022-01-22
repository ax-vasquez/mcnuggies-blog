/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: `rootSlice`,
    initialState: {
        showPrivacyModal: false,
    },
    reducers: {
        toggleShowPrivacyModal(state) {
            state.showPrivacyModal = !state.showPrivacyModal
        },
    },
})

export const {
    toggleShowPrivacyModal,
} = rootSlice.actions
export default rootSlice.reducer
