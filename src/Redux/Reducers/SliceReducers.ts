import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store/Store";
import { IGetDataContacts } from "../../Interfaces/contacts";
import { initialState } from '../initialState'


export const dataSlice = createSlice({
    name: 'getData',
    initialState,
    reducers: {
        getDataFetching(state) {
            state.isloading = true;
        },
        getDataToken(state) {
            state.isloading = false;
            state.status = true
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
            state.contacts = action.payload
        },
        getDataFetchEvents(state, action: PayloadAction<any>) {
            state.events = action.payload
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

export const totalDirectSales = createSelector([contactsSelector], (contactsSelector) => {
    return contactsSelector.reduce((acc: any, el) => acc + el.detail.direct_sales, 0)
})

export const totalViaPartners = createSelector([contactsSelector], (contactsSelector) => {
    return contactsSelector.reduce((acc: any, el) => acc + el.detail.via_partners, 0)
})

export const totalViaSubPartners = createSelector([contactsSelector], (contactsSelector) => {
    return contactsSelector.reduce((acc: any, el) => acc + el.detail.via_subpartners, 0)
})

export default dataSlice.reducer
export const {
    codeCopiedActiveReducer,
    codeCopiedNotActiveReducer,
    getDataFetching,
    getDataFetchError,
    getDataFetchContacts,
    getDataToken,
    setfilterBy,
    getDataFetchEvents,
} = dataSlice.actions