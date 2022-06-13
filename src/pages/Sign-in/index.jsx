import React, {useState} from 'react';
import {Link, useNavigate } from "react-router-dom";


const SignIn = ({user, setUser}) => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const signInHandler = () => {
      if (email === user.email && password === user.password){
          setUser({
              fullName:user.fullName,
              password:user.password,
              email:user.email,
              isAuth: true
          })
          navigate('/')
      }


    }

    return (<main className="sign-in-page">
        <h1 className="visually-hidden">Travel App</h1>
        <form className="sign-in-form" autoComplete="off">
            <h2 className="sign-in-form__title">Sign In</h2>
            <label className="trip-popup__input input">
                <span className="input__heading">Email</span>
                <input name="email" type="email" required value={email} onChange={event => setEmail(event.target.value)}/>
            </label>
            <label className="trip-popup__input input">
                <span className="input__heading">Password</span>
                <input name="password" type="password" autoComplete="new-password" required value={password} onChange={event => setPassword(event.target.value)}/>
            </label>
            <button className="button" type="submit" onClick={signInHandler}>Sign In</button>
        </form>
        <span>
        Already have an account?
        <Link to="/sign-up" className="sign-in-form__link">Sign Up</Link>
      </span>
    </main>)
}

export default SignIn;
