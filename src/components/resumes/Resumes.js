import React from 'react'
import './Resumes.css'
import {ReactComponent as Coop} from './assets/technical-resume-co-op-download.svg'

function Resumes() {
    return (
        <div className="Resumes">
            <a className="Resumes-header">
                Take home a little bit about me
            </a>
            <ul className="Resumes-list">
                <Coop className="Resume-download-button"/>
            </ul>
        </div>
    )
}

export default Resumes;