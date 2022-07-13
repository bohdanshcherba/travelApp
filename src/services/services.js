import {User} from "./user.service";
import {Trips} from './trips.service'
import {Booking} from './booking.service'
import {Storage} from './storage.service'

const user = new User()
const trips = new Trips()
const booking = new Booking()
const storage = new Storage()

export {user, storage, trips, booking}
