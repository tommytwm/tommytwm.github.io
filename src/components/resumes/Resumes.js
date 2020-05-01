import React from 'react'
import './Resumes.css'

function Resumes() {
    return (
        <div className="Resumes">
            <a className="Resumes-header">
                Take home a little bit about me
            </a>
            <ul className="Resumes-list">
                <a href="CoopResume2020.pdf" download>UBC Co-op Resume 2020</a>
            </ul>
        </div>
    )
}

export default Resumes;