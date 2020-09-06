/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './Status.css';

function Status() {
    return (
        <div className="Status">
            <h2 className="Status-header">
                ❗️ Status ❗️
            </h2>
            <h4 className="Status-subheader">
                Last updated: August 5th, 2020
            </h4>
            <ul className="Status-list">
                <li>👀 &nbsp; Looking for software development internships/co-op for the winter term (January, 2020)</li>
                <li>💻 &nbsp; Working part-time at HappyHour as a Front-end Software Engineer Intern</li>
                <li>👨‍🏫 &nbsp; Working full-time at UBC as a Undergraduate Teaching Assistant</li>
                <li>🏫 &nbsp; Enrolled full-time at UBC for Winter Term 1, 2020</li>
            </ul>
        </div>
    );
}

export default Status;