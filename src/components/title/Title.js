import React from 'react'
import './Title.css'

function Title() {
    return (
        <div className="Title">
            <a className="Title-subtitle">
                Hello! I'm
            </a>
            <h1 className="Title-header">
                Tommy Tho
            </h1>
            <a className="Title-subheader">
                I'm a computer science undergrad at UBC. I do software development and some graphic design on the side.
            </a>
        </div>
    )
}

export default Title;