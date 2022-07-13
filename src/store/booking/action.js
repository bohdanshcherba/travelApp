import {createAsyncThunk} from '@reduxjs/toolkit';
import ActionType from './common';

const getBookings = createAsyncThunk(ActionType.GET_BOOKINGS, async (request, {extra: {services}}) => {
        const bookings = await services.booking.getAll()
        return {bookings}
    }
);


const create = createAsyncThunk(ActionType.POST_BOOKING, async (request, {extra: {services}}) => {

    const booking = await services.booking.create(request)

    return {booking}
})

const deleteById = createAsyncThunk(ActionType.DELETE_BOOKING, async (request, {extra: {services}}) => {
    const { id } = request
    await services.booking.delete(id)
})


export {getBookings,create, deleteById}
