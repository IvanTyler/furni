import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { initialState } from '../initialState'
import { RootState } from "../Store/Store";
import { IGetDataContacts } from "../../Interfaces/contacts";
import { IgetDataContactsDto } from "../../Interfaces/getDataDto";
import { FilterByType } from "../../Interfaces/FilterContacts";

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
        getDataFetchContacts(state, action: PayloadAction<IgetDataContactsDto[]>) {
            state.contacts = action.payload
            state.isloading = 'success';
        },
        setfilterBy(state, action: PayloadAction<FilterByType | null>) {
            state.filterBy = action.payload
        }
    }
})

const contacts = (state: RootState) => state.dataContacts.contacts
const filterBy = (state: RootState) => state.dataContacts.filterBy

export const contactsSelector = createSelector([contacts, filterBy], (contacts, filterBy): IGetDataContacts[] => {
    if (filterBy) {
        return contacts.filter((el: IgetDataContactsDto) => el.detail[filterBy] > 0)
            .map((el: IgetDataContactsDto) => {
                return {
                    ...el,
                    titleTotal: el.detail[filterBy]
                }
            })
    }
    return contacts.map((el: IgetDataContactsDto) => {
        return {
            ...el,
            titleTotal: Object.values(el.detail).reduce((acc: number, el) => acc + el, 0)
        }
    })
})

export const grandTotalSelector = createSelector([contactsSelector], (contactsSelector) => {
    return contactsSelector.reduce((acc: number, el) => acc + el.titleTotal, 0)
})

export default dataSlice.reducer
export const {
    getDataFetchContacts,
    getDataFetchingContacts,
    getDataFetchingContactsError,
    setfilterBy,
} = dataSlice.actions
