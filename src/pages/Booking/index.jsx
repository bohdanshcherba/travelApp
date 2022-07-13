import React,{useEffect} from 'react';
import './style.css'
import {BookingItem, TripCard} from "../../components";
import {useDispatch, useSelector} from "react-redux";

import {tripsActionCreator, bookingActionCreator} from "../../store/actions";


const Booking = (props) => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(bookingActionCreator.getBookings())
    },[dispatch])

    const {bookings} = useSelector(state => ({
        bookings: state.booking.bookings
    }));

    const handleDelete = (id) => {
        dispatch(bookingActionCreator.deleteById({id}))
    }

    return (<main className="bookings-page">
        <h1 className="visually-hidden">Travel App</h1>
        <ul className="bookings__list">
            {bookings.map(booking=>{
                return <BookingItem Booking={booking} handleDelete={handleDelete}/>
            })}

        </ul>
    </main>
    )
}

export default Booking;
