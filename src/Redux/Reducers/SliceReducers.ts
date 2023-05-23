import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from '../initialState'


export const dataSlice = createSlice({
    name: 'getData',
    initialState,
    reducers: {
        getDataFetching(state) {
            state.isloading = true;
        },
        getDataFetchingSuccess(state, action: PayloadAction<any>) {
            state.data = action.payload
            state.isloading = false;
            state.data.status = true
        },
        codeCopiedActiveReducer(state) {
            state.codeCopied = true
        },
        codeCopiedNotActiveReducer(state) {
            state.codeCopied = false
        },
        getDataFetchError(state, action: PayloadAction<string>) {
            state.isloading = false;
            state.error = action.payload
        },
    }
})

export default dataSlice.reducer
export const {
    codeCopiedActiveReducer,
    codeCopiedNotActiveReducer,
    getDataFetchingSuccess,
    getDataFetching,
    getDataFetchError,
} = dataSlice.actions
