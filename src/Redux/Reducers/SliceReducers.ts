import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { IgetDataContactsDto, IgetDataDto } from "../../Interfaces/getDataDto";
import { RootState } from "../Store/Store";
import { IFilterContacts } from "../../Interfaces/FilterContacts";
import { IGetDataContacts } from "../../Interfaces/contacts";


export interface IInitialState {
    codeCopied: boolean;
    contacts: IGetDataContacts[];
    isloading: boolean;
    filterBy: null | string;
    error: null | string;
}

export const initialState: IInitialState = {
    codeCopied: false,
    isloading: false,
    contacts: [],
    filterBy: null,
    error: '',
}

export const dataSlice = createSlice({
    name: 'getData',
    initialState,
    reducers: {
        getDataFetching(state) {
            state.isloading = true;
        },
        getDataToken(state) {
            state.isloading = false;
        },
        getDataFetchingSuccess(state, action: PayloadAction<any>) {
            state.isloading = false;
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
        getDataFetchContacts(state, action: PayloadAction<any>) {
            state.contacts = action.payload.contacts
        },
        setfilterBy(state, action: PayloadAction<any>) {
            state.filterBy = action.payload
        }
    }
})


const contacts = (state: RootState) => state.data.contacts
const filterBy = (state: RootState) => state.data.filterBy

export const contactsSelector = createSelector([contacts, filterBy], (contacts, filterBy) => {
    if (filterBy) {
        contacts = contacts.filter((el: any) => el.detail[filterBy] > 0)
    }
    return contacts.map((el: IGetDataContacts) => {
        return {
            ...el,
            titleTotal: Object.values(el.detail).reduce((acc: number, el) => acc + el, 0)
        }
    })
})

export const grandTotalSelector = createSelector([contactsSelector], (contactsSelector) => {
    return contactsSelector.reduce((acc: any, el) => acc + el.titleTotal, 0)
})

export default dataSlice.reducer
export const {
    codeCopiedActiveReducer,
    codeCopiedNotActiveReducer,
    getDataFetchingSuccess,
    getDataFetching,
    getDataFetchError,
    getDataFetchContacts,
    getDataToken,
    setfilterBy,
} = dataSlice.actions