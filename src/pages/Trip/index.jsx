import React, {useState} from 'react';
import './style.css'
import * as data from '../../assets/data/data'
import {BookingModal} from "../../components";


const Trip = ({user}) => {
    let ref = window.location.href
    let trip = data.trips.find(el=>el.id === ref.split('/')[4])
    let id = 0
    const [modal, setModal] = useState(false)
    const [guests, setGuests] = useState(5)
    const [time, setTime] = useState('')

    const handleBook = () => {
      data.bookings.append({
          "id": id++,
          "userId": user.fullName,
          "tripId": trip.id,
          "guests": guests,
          "date": time,
          "trip": {
              "title": trip.title,
              "duration": trip.duration,
              "price": trip.price
          },
          "totalPrice": trip.price * guests,
          "createdAt": new Date()
      })
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
