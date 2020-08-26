/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Resumes.css'
import {ReactComponent as Coop} from './assets/technical-resume-co-op-download.svg'
import {ReactComponent as Portfolio} from './assets/graphic-portfolio-link.svg'

function Resumes() {
    return (
        <div className="Resumes">
            <a className="Resumes-header">
                Take home the important bits
            </a>
            <ul className="Resumes-list">
                <Coop className="Resume-download-button"/>
                <Portfolio className="Resume-portfolio-button"/>
            </ul>
        </div>
    )
}

export default Resumes;