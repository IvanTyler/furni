import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from '../initialState'
import { IGetDataEvents } from "../../Interfaces/Events";

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
        getDataFetchEvents(state, action: PayloadAction<IGetDataEvents[]>) {
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
