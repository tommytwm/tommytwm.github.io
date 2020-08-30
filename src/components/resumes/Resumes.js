/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './Resumes.css'

import Resume from './assets/CoopResume2020.pdf';

function Resumes() {

    const [isHover1, setHover1] = useState(false);
    const [isHover2, setHover2] = useState(false);


    return (
        <div className="Resumes">
            <a 
                className={
                    isHover1 ? "Btn-hover" : "Btn"
                }
                href={Resume}
                download
                onMouseEnter={() => setHover1(true)}
                onMouseLeave={() => setHover1(false)}
            >
                Resume
            </a>
            <a 
                className={
                    isHover2 ? "Btn-hover" : "Btn"
                }
                href="https://drive.google.com/open?id=0B1R-JpvilwH6VUFlcHl6SkZGTms"
                target="_blank"
                onMouseEnter={() => setHover2(true)}
                onMouseLeave={() => setHover2(false)}
            >
                Graphic Portfolio
            </a>
        </div>
    )
}

export default Resumes;