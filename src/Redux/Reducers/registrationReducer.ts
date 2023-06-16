import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
    isLoadingRegistration: boolean;
    responseMessageError: string;
}

export const initialState: IInitialState = {
    isLoadingRegistration: false,
    responseMessageError: '',
}

export const dataSlice = createSlice({
    name: 'getDataUsers',
    initialState,
    reducers: {
        getResponseErrorMessage(state, action: PayloadAction<any>) {
            state.responseMessageError = action.payload
        },
        
    }
})


export default dataSlice.reducer
export const {
    getResponseErrorMessage
} = dataSlice.actions
