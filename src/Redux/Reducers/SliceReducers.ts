import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from '../initialState'


export const dataSlice = createSlice({
    name: 'getData',
    initialState,
    reducers: {
        codeCopiedActiveReducer(state) {
            state.codeCopied = true
        },
        codeCopiedNotActiveReducer(state) {
            state.codeCopied = false
        },
        getDataFetching(state) {
            state.isloading = true;
        },
        getDataFetchingSuccess(state, action: PayloadAction<any>) {
            state.data = action.payload
            state.data.status = true
            state.isloading = false;
        },
    }
})

export default dataSlice.reducer
export const {
    codeCopiedActiveReducer,
    codeCopiedNotActiveReducer,
    getDataFetchingSuccess,
    getDataFetching,
} = dataSlice.actions
