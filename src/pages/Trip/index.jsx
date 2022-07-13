import React, {useState, useEffect} from 'react';
import './style.css'
import {BookingModal} from "../../components";
import {useDispatch, useSelector} from "react-redux";

import {tripsActionCreator, bookingActionCreator} from "../../store/actions";


const Trip = ({user}) => {
    let ref = window.location.href

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(tripsActionCreator.getTripById({id: ref.split('/')[4]}))
    },[dispatch])

    const {trip} = useSelector(state => ({
        trip: state.trips.trip
    }));

    console.log(trip)

    const [modal, setModal] = useState(false)
    const [guests, setGuests] = useState(5)
    const [time, setTime] = useState('')

    const handleBook = () => {
        dispatch(tripsActionCreator.getTripById({id: ref.split('/')[4]}))

    }


    return (
        <main className="trip-page">
            <h1 className="visually-hidden">Travel App</h1>
            <div className="trip">
                <img src={trip.image} className="trip__img" alt="trip image"/>
                <div className="trip__content">
                    <div className="trip-info">
                        <h3 className="trip-info__title">{trip.title}</h3>
                        <div className="trip-info__content">
                            <span className="trip-info__duration"><strong>{trip.duration}</strong> days</span>
                            <span className="trip-info__level">{trip.level}</span>
                        </div>
                    </div>
                    <div className="trip__description">
                        {trip.description}
                    </div>
                    <div className="trip-price">
                        <span>Price</span>
                        <strong className="trip-price__value">{trip.price} $</strong>
                    </div>
                    <button className="trip__button button" onClick={()=>{setModal(true)}}>Book a trip</button>
                </div>
            </div>
            {modal?<BookingModal handleBook={handleBook} guests={guests}
                                 setGuests={setGuests}
                                 time={time}
                                 setTime={setTime}
                                 trip={trip}
            />:null}
        </main>
    )
}

export default Trip;
