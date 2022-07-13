import {configureStore} from '@reduxjs/toolkit'
import * as services from '../services/services'
import {UserReducer, TripsReducer,BookingReducer } from "./rootReducer";

export const store = configureStore({
    reducer: {
        user: UserReducer,
        trips: TripsReducer,
        booking: BookingReducer()
    },
    middleware: getDefaultMiddleware => (getDefaultMiddleware({
        thunk: {
            extraArgument: {services}
        }
    })),
    devTools: true
})
