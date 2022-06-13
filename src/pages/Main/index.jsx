import React from 'react';
import './style.css'

import {TripCard, TripFilter} from "../../components/index"
const Main = (props) => {

    return (<main>
            <h1 className="visually-hidden">Travel App</h1>
            <TripFilter/>
            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <ul className="trip-list">
                    <TripCard/>
                    <TripCard/>
                </ul>
            </section>
        </main>

    )
}

export default Main;
