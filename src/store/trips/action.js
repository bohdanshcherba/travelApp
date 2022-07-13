import {createAsyncThunk} from '@reduxjs/toolkit';
import ActionType from './common';

const getTrips = createAsyncThunk(ActionType.GET_TRIPS, async (request, {extra: {services}}) => {
        const trips = await services.trips.getAll()
        return {trips}
    }
);


const getTripById = createAsyncThunk(ActionType.TRIP_BY_ID, async (request, {extra: {services}}) => {
    const {id} = request
    const trip = await services.trips.getById(id)

    return {trip}
})


export {getTrips,getTripById}
