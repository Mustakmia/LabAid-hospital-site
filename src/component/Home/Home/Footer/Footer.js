import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithubSquare, faLinkedinIn, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import React from 'react';
import './Footer.css';
const Footer = () => {
    const icon1 = <FontAwesomeIcon icon={faGithubSquare} />
    const icon2 = <FontAwesomeIcon icon={faFacebookF} />
    const icon3 = <FontAwesomeIcon icon={faTwitterSquare} />
    const icon4 = <FontAwesomeIcon icon={faLinkedinIn} />

    return (
        <div className="body">
            <footer>
                <div className="waves">
                    <div class Name="wave" id="wave_1"></div>
                    <div className="wave" id="wave_2"></div>
                    <div className="wave" id="wave_3"></div>
                    <div className="wave" id="wave_4"></div>
                </div>
                <ul className="social_icon">
                    <li>{icon1}</li>
                    <li>{icon2}</li>
                    <li>{icon3}</li>
                    <li>{icon4}</li>
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