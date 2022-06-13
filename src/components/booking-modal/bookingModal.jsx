import React from 'react';
import './style.css'

const BookingModal = ({handleBook, guests, setGuests, setTime , time, trip}) => {

    return (
        <div className="modal">
            <div className="trip-popup">
                <button className="trip-popup__close">×</button>
                <form className="trip-popup__form" autoComplete="off">
                    <div className="trip-info">
                        <h3 className="trip-info__title">{trip.title}</h3>
                        <div className="trip-info__content">
                            <span className="trip-info__duration"><strong>{trip.duration}</strong> days</span>
                            <span className="trip-info__level">{trip.level}</span>
                        </div>
                    </div>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Date</span>
                        <input name="date" type="date" required value={time} onChange={event => setTime(event.target.value)}/>
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Number of guests</span>
                        <input name="guests" type="number" min="1" max="10" value={guests} onChange={event => setGuests(event.target.value)} required />
                    </label>
                    <span className="trip-popup__total">
              Total: <output className="trip-popup__total-value">{trip.price * guests}$</output>
            </span>
                    <button className="button" type="submit" onClick={handleBook}>Book a trip</button>
                </form>
            </div>
        </div>
    )
}

export default BookingModal;
