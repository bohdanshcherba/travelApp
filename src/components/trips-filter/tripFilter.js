import React, {useState} from 'react';
import * as data from '../../assets/data/data'

const TripFilter = ({setTrips, trips}) => {

    const [searching, setSearching] = useState('')
    const [level, setLevel] = useState('')
    const [duration, setDuration] = useState('')

    const searchHandle = (event)=>{
        setSearching(event.target.value)
        if (event.target.value===''){
            setTrips(data.trips)
        }
        else {
            let res = data.trips.filter(el => event.target.value === el.title)
            setTrips(res)
        }
    }

    const durationHandle = (event)=>{
        setDuration(event.target.value)

        if (event.target.value===''){
            setTrips(trips)
        }

        else {

            let res = data.trips.filter(el => {
                if (event.target.value === '0_x_5'){

                    if(0 < el.duration && el.duration <= 5){
                        return el
                    }
                }
                else if(event.target.value === '5_x_10'){
                    if(5 < el.duration && el.duration < 10){
                        return el
                    }
                }
                else if(event.target.value === '10_x'){
                    if(5 <= el.duration <= 10){
                        return el
                    }
                }
                else if (event.target.value===''){
                    return el
                }

            })
            setTrips(res)
        }
    }

    const levelHandle = (event)=>{
        setLevel(event.target.value)

        if (event.target.value===''){
            setTrips(trips)
        }

        else {

            let res = data.trips.filter(el => {
                if (event.target.value === el.level){
                    return el
                }

                else if (event.target.value===''){
                    return el
                }

            })
            setTrips(res)
        }
    }

    return (
        <section className="trips-filter">
            <h2 className="visually-hidden">Trips filter</h2>
            <form className="trips-filter__form" autoComplete="off" >
                <label className="trips-filter__search input">
                    <span className="visually-hidden">Search by name</span>
                    <input name="search" type="search" placeholder="search by title" value={searching}
                           onChange={searchHandle}/>
                </label>
                <label className="select">
                    <span className="visually-hidden">Search by duration</span>
                    <select name="duration" value={duration} onChange={durationHandle}>
                        <option value="">duration</option>
                        <option value="0_x_5">&lt; 5 days</option>
                        <option value="5_x_10">&lt; 10 days</option>
                        <option value="10_x">&ge; 10 days</option>
                    </select>
                </label>
                <label className="select">
                    <span className="visually-hidden">Search by level</span>
                    <select name="level" onChange={levelHandle} value={level}>
                        <option value="">level</option>
                        <option value="easy">easy</option>
                        <option value="moderate">moderate</option>
                        <option value="difficult">difficult</option>
                    </select>
                </label>
            </form>
        </section>
    )
}

export default TripFilter;
