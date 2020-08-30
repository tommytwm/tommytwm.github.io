/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './Skills.css';

import {ReactComponent as Terminal} from './assets/terminal.svg';
import {ReactComponent as Frameworks} from './assets/frameworks.svg';
import {ReactComponent as Codewindows} from './assets/code-windows.svg';

function Skills() {
    return (
        <div className="Skills" id="Skills">
            <h2 className="Skills-header">
                Here are some things I can do 🛠
            </h2>
            <div className="Skills-row">
                <div className="Skills-img-1">
                    <Terminal/>
                </div>
                <div className="Skills-text-1">
                    <h3>Write code! 🧑‍💻</h3>
                    <p>
                        <b>JavaScript, HTML, & CSS</b> have been my daily drivers for web-development 
                        in the most recent years, but I started off my journey with <b>Java</b>, followed 
                        by <b>C#, C, C++,</b> and <b>TypeScript</b>. I also have experience writing automation on 
                        <b> GroovyScript</b>.
                    </p>
                </div>
            </div>
            <div className="Skills-row">
                <div className="Skills-img-2">
                    <Frameworks/>
                </div>
                <div className="Skills-text-2">
                    <h3>Use coding frameworks! 💁‍♂️</h3>
                    <p>
                    I have experience working with <b>Spring, ASP .NET, NodeJS, React, & React Native</b> in web development 
                    internships. I also know how to use <b>Semantic</b> and <b>Bootstrap</b> components. I also have experience unit 
                    testing on JavaScript with <b>Jest</b> and <b>Enzyme</b> testing suites.
                    </p>
                </div>
            </div>
            <div className="Skills-row">
                <div className="Skills-img-3">
                    <Codewindows/>
                </div>
                <div className="Skills-text-3">
                    <h3>IDE’s & VCS’s 🤖</h3>
                    <p>
                    My preferred IDE is <b>Visual Studio Code</b>, but I also know how to use <b>Webstorm, IntelliJ, XCode, Atom,</b> and 
                    <b> Notepad++</b>. I also have experience working with <b>Bitbucket</b> and <b>Git</b> as version control systems. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skills;