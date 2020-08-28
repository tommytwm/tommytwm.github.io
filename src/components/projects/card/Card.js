import React, { useState } from 'react';
import './Card.css';

function Card(props) {
    const [isHover, setHover] = useState(false);

    function handleClick(link) {
        window.open(link, "_blank");
    };

    return (
        <div className="Card">
            <ol className="Card-list">
                <li className="title">{props.title}</li>
                <li className="date">{props.date}</li>
                <li>{props.event}</li>
                <li className="description">{props.description}</li>
            </ol>
            <div 
                className={
                    props.link ? isHover ? "Card-btn-hover" : "Card-btn" : "no-card"
                }
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => handleClick(props.link)}
            >
                { props.link && <>Github link</> }
            </div>
        </div>
    );
};

export default Card;
