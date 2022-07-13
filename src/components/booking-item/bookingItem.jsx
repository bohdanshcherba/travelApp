import React from 'react';

const BookingItem = ({Booking, handleDelete}) => {

    let date = Booking.date.split("T")[0]

    const handleDeleteBooking = (e) => {

        handleDelete(Booking.id)
        
    }

    return (
        <li className="booking">
        <h3 className="booking__title">{Booking.trip.title}</h3>
        <span className="booking__guests">{Booking.guests} guests</span>
        <span className="booking__date">{date}</span>
        <span className="booking__total">{Booking.totalPrice}$</span>
        <button className="booking__cancel" title="Cancel booking" onClick={handleDeleteBooking}>
            <span className="visually-hidden">Cancel booking</span>
            ×
        </button>
    </li>
    )
}

export default BookingItem;
