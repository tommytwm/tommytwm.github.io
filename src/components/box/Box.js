import React from 'react';
import './Box.css';

function Box(props) {
    return (
        <div className="Box" onClick={() => handleClick(props.link)}>
            <h4>{props.workplace}</h4>
            <p>{props.title}</p>
            <p>{props.details}</p>
        </div>
    );
}

function handleClick(link) {
    window.open(link, '_blank');
}

export default Box;