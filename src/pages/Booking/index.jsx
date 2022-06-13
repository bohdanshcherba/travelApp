import React from 'react';
import './style.css'
import {BookingItem} from "../../components";

const Booking = (props) => {

    return (<main className="bookings-page">
        <h1 className="visually-hidden">Travel App</h1>
        <ul className="bookings__list">
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>

        </ul>
    </main>
    )
}

export default Booking;
