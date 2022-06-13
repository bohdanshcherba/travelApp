import React from 'react';
import './header.css'
import {Link, useNavigate} from "react-router-dom";
import icon from '../../assets/images/briefcase.svg'
import profileIcon from '../../assets/images/user.svg'

const Header = ({user, setUser}) => {

    const navigate = useNavigate()
    const logout = () => {
      setUser({
          fullName:user.fullName,
          password:user.password,
          email:user.email,
          isAuth: false
      })
        navigate('/sign-in')
    }

    return (
        <div>
            <header className="header">
                <div className="header__inner">
                    <Link to="/" className="header__logo">Travel App</Link>
                    {user.isAuth ?
                    <nav className="header__nav">
                        <ul className="nav-header__list">
                            <li className="nav-header__item" title="Bookings">
                                <Link to="/bookings" className="nav-header__inner">
                                    <span className="visually-hidden">Bookings</span>
                                    <img src={icon} alt=" icon"/>
                                </Link>
                            </li>
                            <li className="nav-header__item" title="Profile">
                                <div className="nav-header__inner profile-nav" tabIndex="0">
                                    <span className="visually-hidden">Profile</span>
                                    <img src={profileIcon} alt="profile icon"/>
                                    <ul className="profile-nav__list">
                                        <li className="profile-nav__item profile-nav__username">{user.fullName}</li>
                                        <li className="profile-nav__item">
                                            <button className="profile-nav__sign-out button" onClick={logout}>Sign Out</button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>: null }
                </div>
            </header>
        </div>
    )
}

export default Header;
