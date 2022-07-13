import React, {useEffect, useState} from 'react';
import './style.css'
import {TripCard, TripFilter} from "../../components/index"
import { tripsActionCreator } from '../../store/actions';
import {useDispatch, useSelector} from "react-redux";

const Main = (props) => {
    const dispatch = useDispatch()


    const {trips1} = useSelector(state => ({
        trips1: state.trips.trips
    }));

    const [trips, setTrips] = useState(trips1)

    useEffect(()=>{
        dispatch(tripsActionCreator.getTrips())
        setTrips(trips1)
    },[dispatch])


    return (<main>
            <h1 className="visually-hidden">Travel App</h1>
            <TripFilter setTrips={setTrips} trips={trips}/>
            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <ul className="trip-list">
                    {trips1.map(trip=>{
                        return <TripCard trip={trip} key={trip.id}/>
                    })}
                </ul>
            </section>

        </main>

    )
}

export default Main;
