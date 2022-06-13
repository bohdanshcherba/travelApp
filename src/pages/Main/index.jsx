import React, {useState} from 'react';
import './style.css'
import * as data from '../../assets/data/data'
import {BookingModal} from '../../components/index'

import {TripCard, TripFilter} from "../../components/index"
const Main = (props) => {

    const [trips, setTrips] = useState(data.trips)

    return (<main>
            <h1 className="visually-hidden">Travel App</h1>
            <TripFilter setTrips={setTrips} trips={trips}/>
            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <ul className="trip-list">
                    {trips.map(trip=>{
                        return <TripCard trip={trip} key={trip.id}/>
                    })}


                </ul>
            </section>

        </main>

    )
}

export default Main;
