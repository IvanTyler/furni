import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store/Store";
import { IGetDataContacts } from "../../Interfaces/contacts";
import { initialState } from '../initialState'

export const dataSlice = createSlice({
    name: 'getData',
    initialState,
    reducers: {
        getDataFetchingReferalCode(state, action: PayloadAction<number>) {
            state.referal_code = action.payload
            state.isloading = 'success';
        },
        getDataFetchingYouEarned(state, action: PayloadAction<number>) {
            state.you_earned = Math.round(action.payload / 100) // as the backend gives these numbers not in AED by multiplied by 100
        },
        getDataFetchingToken(state) {
            state.isloading = 'loading';
            state.isLoadingContent = true
        },
        getDataFetchingSuccessToken(state) {
            state.isloading = 'success';
            state.isLoadingContent = false
            state.isLoadingAuth = true
        },
        setAuth(state, action: PayloadAction<boolean>) {
            state.isLoadingAuth = action.payload
        },
        getDataLoadingOverview(state) {
            state.isloading = 'pending';
        },
        getDataLoadingSuccessLeadId(state) {
            state.isloadingId = 'ok';
        },
        getDataLoadingLoadingLeadId(state) {
            state.isloadingId = 'pending';
        },
        getDataLoadingErrorLeadId(state) {
            state.isloadingId = 'error';
        },
        getDataFetchError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.isLoadingAuth = false
            state.isLoadingContent = false
        },
        
    }
})


export default dataSlice.reducer
export const {
    getDataFetchingToken,
    getDataFetchingSuccessToken,
    getDataFetchError,
    setAuth,
    getDataFetchingReferalCode,
    getDataFetchingYouEarned,
    getDataLoadingOverview,
    getDataLoadingErrorLeadId,
    getDataLoadingSuccessLeadId,
    getDataLoadingLoadingLeadId,
} = dataSlice.actions
