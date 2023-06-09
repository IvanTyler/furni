import { createSlice } from "@reduxjs/toolkit";
import { initialState } from '../initialState'

export const dataSlice = createSlice({
    name: 'codeCopied',
    initialState,
    reducers: {
        codeCopiedActiveReducer(state) {
            state.codeCopied = true
        },
        codeCopiedNotActiveReducer(state) {
            state.codeCopied = false
        },
    }
})


export default dataSlice.reducer
export const {
    codeCopiedActiveReducer,
    codeCopiedNotActiveReducer,
} = dataSlice.actions
