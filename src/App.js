import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {PublicRouters, ProtectedRoutersUser} from './common'
import {SignUp, SignIn, Main, Booking, Trip} from './pages'
import {Header, Footer} from "./components";

const App = () => {

    let isAuth = true

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'*'} element={<Navigate to={'/'}/>}/>

                <Route element={<PublicRouters isAuth={isAuth}/>}>
                    <Route path={'/sign-up'} element={<SignUp/>}/>
                    <Route path={'/sign-in'} element={<SignIn/>}/>

                </Route>
                <Route element={<ProtectedRoutersUser isUser={isAuth}/>}>
                    <Route path={'/bookings'} element={<Booking/>}/>
                    <Route path={'/trip/:tripId'} element={<Trip/>}/>

                </Route>

                <Route path={'/'} element={<Main/>}/>

            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
