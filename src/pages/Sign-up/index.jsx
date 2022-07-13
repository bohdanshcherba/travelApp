import React, {useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import './style.css'

const SignUp = ({handleSignUpSubmit}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

      if(password.length >= 3 && password.length <= 20){
          handleSignUpSubmit({
              fullName:username,
              email:email,
              password:password,
          })

          return (<Navigate to={'/'}/>)
      }

    }

    return (
        <main className="sign-up-page">
            <h1 className="visually-hidden">Travel App</h1>
            <form className="sign-up-form" autoComplete="off">
                <h2 className="sign-up-form__title">Sign Up</h2>
                <label className="trip-popup__input input">
                    <span className="input__heading">Full name</span>
                    <input name="full-name" type="text" value={username} onChange={event => setUsername(event.target.value)} required/>
                </label>
                <label className="trip-popup__input input">
                    <span className="input__heading">Email</span>
                    <input name="email" type="email" value={email} onChange={event => setEmail(event.target.value)} required/>
                </label>
                <label className="trip-popup__input input">
                    <span className="input__heading">Password</span>
                    <input name="password" type="password" min='3' max='20' autoComplete="new-password" value={password} onChange={event => setPassword(event.target.value)} required/>
                </label>
                <button className="button" type="submit" onClick={submitHandler}>Sign Up</button>
            </form>
            <span>
        Already have an account?
        <Link to="/sign-in" className="sign-up-form__link">Sign In</Link>
      </span>
        </main>
    )
}

export default SignUp;
