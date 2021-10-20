import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Footer.css';
const Footer = () => {
    const element1 = <FontAwesomeIcon icon={faCoffee} />
    const element2 = <FontAwesomeIcon icon={faCoffee} />
    const element3 = <FontAwesomeIcon icon={faCoffee} />
    const element4 = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div className="body">
            <footer>
                <div className="waves">
                    <div className="wave" id="wave_1"></div>
                    <div className="wave" id="wave_2"></div>
                    <div className="wave" id="wave_3"></div>
                    <div className="wave" id="wave_4"></div>
                </div>
                <ul className="social_icon">
                    <li>{element1}</li>
                    <li>{element2}</li>
                    <li>{element3}</li>
                    <li>{element4}</li>
                </ul>
                <ul className="menu">
                    <li> <a href="http://">Home</a></li>
                    <li> <a href="http://">Service</a></li>
                    <li> <a href="http://">Appoinment</a></li>
                    <li> <a href="http://">More</a></li>
                </ul>
                <p>@2021 Labaid Hospital | All Rights Reserved.</p>
            </footer>
        </div>

    );
};

export default Footer;