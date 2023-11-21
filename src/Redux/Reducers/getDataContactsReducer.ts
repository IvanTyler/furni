import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { initialState } from '../initialState'
import { RootState } from "../Store/Store";
import { IGetDataContacts } from "../../Interfaces/contacts";
import { log } from "console";

export const dataSlice = createSlice({
    name: 'getData',
    initialState,
    reducers: {
        getDataFetchingContacts(state) {
            state.isloading = 'pending';
        },
        getDataFetchingContactsError(state) {
            state.isloading = 'error';
        },
        getDataFetchContacts(state, action: PayloadAction<any>) {
            state.contacts = action.payload
            state.isloading = 'success';
        },
        setfilterBy(state, action: PayloadAction<null | string>) {
            state.filterBy = action.payload
        }
    }
})

const contacts = (state: RootState) => state.dataContacts.contacts
const filterBy = (state: RootState) => state.dataContacts.filterBy

export const contactsSelector = createSelector([contacts, filterBy], (contacts, filterBy) => {
    if (filterBy) {
        return contacts = contacts.filter((el: any) => el.detail[filterBy] > 0)
            .map((el: IGetDataContacts | any) => {
                return {
                    ...el,
                    titleTotal: el.detail[filterBy]
                }
            })
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
    getDataFetchContacts,
    getDataFetchingContacts,
    getDataFetchingContactsError,
    setfilterBy,
} = dataSlice.actions
