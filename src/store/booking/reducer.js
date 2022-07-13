import {createReducer, isAnyOf} from '@reduxjs/toolkit';
import {bookingActionCreator} from '../actions'

const initialState = {
    bookings: [{
        "tripId": "",
        "userId": "",
        "guests": 0,
        "totalPrice": 0,
        "date": "2022-05-21T14:37:00.049Z",
        "createdAt": "2022-05-21T14:37:00.049Z",
        "trip": {
            "title": "Iceland",
            "duration": 10,
            "price": 7000
        }
    }],
    booking: null,
    isLoading: true
};

const reducer = createReducer(initialState, builder => {

    builder.addCase(bookingActionCreator.getBookings.fulfilled, (((state, action) => {
        state.bookings = action.payload.bookings
        state.isLoading = false
    })))

    builder.addCase(bookingActionCreator.create.fulfilled, (((state, action) => {
        state.booking = action.payload.booking
        state.isLoading = false
    })))

    builder.addCase(bookingActionCreator.deleteById.fulfilled, (((state, action) => {
        state.isLoading = false
    })))

    builder.addMatcher(isAnyOf(bookingActionCreator.getBookings.pending, bookingActionCreator.create.pending),((state, action) => {
        state.isLoading = true
    }))

})


export {reducer}
