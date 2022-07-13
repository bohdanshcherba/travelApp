import {createAsyncThunk} from '@reduxjs/toolkit';
import ActionType from './common';

const getTrips = createAsyncThunk(ActionType.GET_TRIPS, async (request, {extra: {services}}) => {


        let token = services.storage.getItem('token')
        let trips = null

        if (token) {
            trips = await services.trips.getAll(token)
        }


    return {trips}
    }
);


const getTripById = createAsyncThunk(ActionType.TRIP_BY_ID, async (request, {extra: {services}}) => {
    const {id} = request
    console.log(id)
    let token = services.storage.getItem('token')

    const trip = await services.trips.getById(id, token)

    return {trip}
})


export {getTrips,getTripById}
