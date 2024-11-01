import { combineReducers, configureStore } from "@reduxjs/toolkit";
import getData from '../Reducers/SliceReducers'
import getCopyCopied from '../Reducers/codeCopiedReducer'
import getDataUsers from '../Reducers/registrationReducer'
import getDataContacts from '../Reducers/getDataContactsReducer'
import getDataEvents from '../Reducers/getDataEventsReducer'
import getDataOverview from '../Reducers/getDataEventsReducer'


import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
    data: getData,
    copyCopied: getCopyCopied,
})

export const store = configureStore({
    reducer: {
        data: getData,
        copyCopied: getCopyCopied,
        dataUsers: getDataUsers,
        dataContacts: getDataContacts,
        dataEvents: getDataEvents,
        dataOverview: getDataOverview,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector