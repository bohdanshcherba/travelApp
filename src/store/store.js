import {configureStore} from '@reduxjs/toolkit'
import * as services from '../services/services'
import {UserReducer, TripsReducer} from "./rootReducer";

export const store = configureStore({
    reducer: {
        user: UserReducer,
        trips: TripsReducer
    },
    middleware: getDefaultMiddleware => (getDefaultMiddleware({
        thunk: {
            extraArgument: {services}
        }
    })),
    devTools: true
})
