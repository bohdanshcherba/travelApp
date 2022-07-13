import React, {useState, useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {PublicRouters, ProtectedRoutersUser} from './common'
import {SignUp, SignIn, Main, Booking, Trip} from './pages'
import {Header, Footer} from "./components";
import { userActionCreator } from './store/actions';
import {useDispatch, useSelector} from "react-redux";
import {storage} from "./services/services";

const App = () => {

    const dispatch = useDispatch()

    const {user} = useSelector(state => ({
        user: state.user.currentUser
    }));

    const token = Boolean(storage.getItem('token'));

    const isAuth = Boolean(user);

    useEffect(() => {
        if (token) {
            dispatch(userActionCreator.loadCurrentUser());
        }
    }, [dispatch]);

    const handleSignUpSubmit = (payload) => {
        dispatch(userActionCreator.registration(payload));
    };

    const handleSignInSubmit = (payload) => {
        dispatch(userActionCreator.login(payload));
    };

    const handleLogOutSubmit = () => {
        dispatch(userActionCreator.logout());
    };


    return (
        <div className="App">
            <Header user={user} isAuth={isAuth} handleLogOutSubmit={handleLogOutSubmit}/>
            <Routes>
                <Route path={'*'} element={<Navigate to={'/'}/>}/>

                <Route element={<PublicRouters isAuth={isAuth}/>}>
                    <Route path={'/sign-up'} element={<SignUp handleSignUpSubmit={handleSignUpSubmit}/>}/>
                    <Route path={'/sign-in'} element={<SignIn handleSignInSubmit={handleSignInSubmit}/>}/>

                </Route>
                <Route element={<ProtectedRoutersUser isUser={isAuth}/>}>
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
