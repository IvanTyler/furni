import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store/Store";
import { IGetDataContacts } from "../../Interfaces/contacts";
import { initialState } from '../initialState'

export const dataSlice = createSlice({
    name: 'getData',
    initialState,
    reducers: {
        getReferalCode(state, action: PayloadAction<any>) {
            state.referal_code = action.payload
        },
        getYouHaveEarned(state, action: PayloadAction<any>) {
            state.you_have_earned = Math.round(action.payload / 100) // as the backend gives these numbers not in AED by multiplied by 100
        },
        setAuth(state, action: PayloadAction<any>) {
            state.isLoadingAuth = action.payload
        },
        getDataLoadingContacts(state) {
            state.isloading = 'loading';
        },
        getDataLoadingContactsError(state) {
            state.isloading = 'error';
        },
        getDataLoadingEvents(state) {
            state.isloading = 'loading';
        },
        getDataLoadingEventsError(state) {
            state.isloading = 'error';
        },
        getDataFetchError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.isLoadingAuth = false
            state.isLoadingContent = false
        },
        getDataFetchContacts(state, action: PayloadAction<any>) {
            state.contacts = action.payload
            state.isloading = 'ok';
        },
        getDataFetchEvents(state, action: PayloadAction<any>) {
            state.events = action.payload
            state.isloading = 'ok';
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
    getDataFetchError,
    getDataFetchContacts,
    getDataLoadingEvents,
    setfilterBy,
    getDataFetchEvents,
    getDataLoadingContacts,
    setAuth,
    getReferalCode,
    getYouHaveEarned,
    getDataLoadingContactsError,
    getDataLoadingEventsError,
} = dataSlice.actions
