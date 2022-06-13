import React from 'react';
import './footer.css'

import heart from '../../assets/images/heart.svg'
import {Link} from "react-router-dom";

const Footer = (props) => {

    return (<div>
            <footer className="footer">
              <span className="footer__text">
                from <Link className="footer__link" to="https://binary-studio.com">binary studio</Link> with
                <img className="footer__icon" src={heart} alt="heart icon"/>
              </span>
            </footer>
        </div>)
}

export default Footer;
