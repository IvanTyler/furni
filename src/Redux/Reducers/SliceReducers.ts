import { createSlice } from "@reduxjs/toolkit";
import { initialState } from '../initialState'


export const codeCopiedSlice = createSlice({
    name: 'codeCopied',
    initialState,
    reducers: {
        codeCopiedActiveReducer(state) {
            state.codeCopied = true
        },
        codeCopiedNotActiveReducer(state) {
            state.codeCopied = false
        }
    }
})

export default codeCopiedSlice.reducer
export const {
    codeCopiedActiveReducer,
    codeCopiedNotActiveReducer,
} = codeCopiedSlice.actions
