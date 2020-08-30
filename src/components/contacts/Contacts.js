/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './Contacts.css'

import Resume from '../resumes/Resumes';
import Photo from './assets/pic.png';

function Contacts() {
    return (
        <div className="Contacts">
            <div className="Row-1">
                <h2 className="Contacts-header">
                    Interested? Call me 🤙😉📲
                </h2>
            </div>
            <div className="Row-2">
                <div>
                        I’m currently looking for internships and work, and I’d be interested in collaborating in your next project!
                    <ul className="Contacts-list">
                        <li>
                            <a href="mailto:tommythowm@gmail.com">
                                tommythowm@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/tommythowm" target="_blank">
                                linkedin.com/in/tommythowm
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/tommytwm" target="_blank">
                                github.com/tommytwm
                            </a>
                        </li>
                    </ul>
                    <div className="Resume-downloads">
                        <Resume />
                    </div>
                </div>
                <img 
                    className="footer-image"
                    src={Photo}
                    alt={"Me in Malaysia, having two ice cream cones"}
                />
            </div>
        </div>
    )
}

export default Contacts;