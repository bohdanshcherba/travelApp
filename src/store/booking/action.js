import {createAsyncThunk} from '@reduxjs/toolkit';
import ActionType from './common';

const getBookings = createAsyncThunk(ActionType.GET_BOOKINGS, async (request, {extra: {services}}) => {
    let token = services.storage.getItem('token')

    const bookings = await services.booking.getAll(token)
        return {bookings}
    }
);


const create = createAsyncThunk(ActionType.POST_BOOKING, async (request, {extra: {services}}) => {
    let token = services.storage.getItem('token')

    const booking = await services.booking.create(request, token)

    return {booking}
})

const deleteById = createAsyncThunk(ActionType.DELETE_BOOKING, async (request, {extra: {services}}) => {
    let token = services.storage.getItem('token')

    const { id } = request
    await services.booking.delete(id, token)
})


export {getBookings,create, deleteById}
