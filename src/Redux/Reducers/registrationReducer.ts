import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
    users: any[];
    email: string;
    password: string;
    fullName: string;
    phone: string;
    referalCode: string;
    isLoadingRegistration: boolean;
}

export const initialState: IInitialState = {
    users: [],
    email: '',
    password: '',
    fullName: '',
    phone: '',
    referalCode: '',
    isLoadingRegistration: false,
}


export const dataSlice = createSlice({
    name: 'getDataUsers',
    initialState,
    reducers: {
        getDataFetchUsers(state, action: PayloadAction<any>) {
            state.users = action.payload
        },
        getDataLetsStarted(state, action: PayloadAction<any>) {
            state.email = action.payload.email
            state.password = action.payload.password
        },
        getDataYourDetails(state, action: PayloadAction<any>) {
            state.fullName = action.payload.fullName
            state.phone = action.payload.phoneNumber
            state.referalCode = action.payload.referalCode
        },
        clearDataUser(state) {
            state.email = ''
            state.password = ''
            state.fullName = ''
            state.phone = ''
            state.referalCode = ''
        }
    }
})


export default dataSlice.reducer
export const {
    getDataFetchUsers,
    getDataLetsStarted,
    getDataYourDetails,
    clearDataUser,
} = dataSlice.actions
