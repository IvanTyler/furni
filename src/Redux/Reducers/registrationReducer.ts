import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
    isLoadingRegistration: boolean;
    responseMessage: string;
}

export const initialState: IInitialState = {
    isLoadingRegistration: false,
    responseMessage: '',
}


export const dataSlice = createSlice({
    name: 'getDataUsers',
    initialState,
    reducers: {
        
        
    }
})


export default dataSlice.reducer
export const {
} = dataSlice.actions
