import { createSlice } from "@reduxjs/toolkit";
import { initialState } from '../initialState'

export const dataSlice = createSlice({
    name: 'getDataTokens',
    initialState,
    reducers: {
        getDataFetchingToken(state) {
            state.isloading = 'loading';
            state.isLoadingContent = true
        },
        getDataFetchingSuccessToken(state) {
            state.isloading = 'ok';
            state.isLoadingContent = false
            state.isLoadingAuth = true
        },
    }
})

export default dataSlice.reducer
export const {
    getDataFetchingToken,
    getDataFetchingSuccessToken,
} = dataSlice.actions
