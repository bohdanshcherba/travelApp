import {createReducer, isAnyOf} from '@reduxjs/toolkit';
import {tripsActionCreator} from '../actions'

const initialState = {
    trips: [{
        "id": "",
        "title": "",
        "description": "",
        "level": "",
        "duration": 10,
        "price": 7000,
        "image": "https://i.gyazo.com/0aae9c20e73caebb07c0dbdfe2bbd89c.jpg",
        "createdAt": "2022-05-21T14:37:00.049Z"
    }],
    trip: null,
    isLoading: true
};

const reducer = createReducer(initialState, builder => {

    builder.addCase(tripsActionCreator.getTrips.fulfilled, (((state, action) => {
        state.trips = action.payload.trips
        state.isLoading = false
    })))

    builder.addCase(tripsActionCreator.getTripById.fulfilled, (((state, action) => {
        state.trip = action.payload.trip
        state.isLoading = false
    })))


    builder.addMatcher(isAnyOf(tripsActionCreator.getTrips.pending, tripsActionCreator.getTripById.pending),((state, action) => {
        state.isLoading = true
    }))

})


export {reducer}
