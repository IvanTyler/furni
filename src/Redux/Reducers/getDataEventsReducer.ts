import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { initialState } from '../initialState'
import { RootState } from "../Store/Store";
import { IGetDataContacts } from "../../Interfaces/contacts";

export const dataSlice = createSlice({
    name: 'getData',
    initialState,
    reducers: {
        getDataLoadingEvents(state) {
            state.isloading = 'pending';
        },
        getDataLoadingEventsError(state) {
            state.isloading = 'error';
        },
        getDataFetchEvents(state, action: PayloadAction<any>) {
            state.events = action.payload
            state.isloading = 'success';
        },
    }
})

export default dataSlice.reducer
export const {
    getDataLoadingEvents,
    getDataFetchEvents,
    getDataLoadingEventsError,
} = dataSlice.actions
