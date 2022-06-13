import React, {useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {PublicRouters, ProtectedRoutersUser} from './common'
import {SignUp, SignIn, Main, Booking, Trip} from './pages'
import {Header, Footer} from "./components";

const App = () => {

    const [ user, setUser] = useState({
        fullName:'',
        password:'',
        email:'',
        isAuth: false
    })

    return (
        <div className="App">
            <Header user={user} setUser={setUser}/>
            <Routes>
                <Route path={'*'} element={<Navigate to={'/'}/>}/>

                <Route element={<PublicRouters isAuth={user.isAuth}/>}>
                    <Route path={'/sign-up'} element={<SignUp setUser={setUser}/>}/>
                    <Route path={'/sign-in'} element={<SignIn user={user} setUser={setUser}/>}/>

                </Route>
                <Route element={<ProtectedRoutersUser isUser={user.isAuth}/>}>
                    <Route path={'/bookings'} element={<Booking/>}/>
                    <Route path={'/trip/:tripId'} element={<Trip user={user}/>}/>

                </Route>

                <Route path={'/'} element={<Main/>}/>

            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
