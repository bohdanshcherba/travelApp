import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoutersUser = ({isUser}) => {

    return isUser ? <Outlet/> : <Navigate to={'/sign-in'}/>


};

export default ProtectedRoutersUser;

