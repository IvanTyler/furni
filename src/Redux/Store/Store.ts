import { combineReducers, configureStore } from "@reduxjs/toolkit";

import getData from '../Reducers/SliceReducers'

const rootReducer = combineReducers({
    data: getData,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']