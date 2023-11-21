import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { initialState } from '../initialState'

export const dataSlice = createSlice({
    name: 'getData',
    initialState,
    reducers: {
        getDataLoadingOverview(state) {
            state.isloading = 'pending';
        },
    }
})

export default dataSlice.reducer
export const {
    getDataLoadingOverview,
} = dataSlice.actions
