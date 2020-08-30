import React, { useState } from 'react';
import './Deck.css';

function Deck(props) {
    const [isHover, setHover] = useState(false);

    const isTech = props.isTech ? true : false;
    const isEducation = props.isEducation ? true : false;
    const isService = props.isService ? true : false;
    const isDesign = props.isDesign ? true : false;

    function handleClick(link) {
        window.open(link, "_blank");
    };

    return (
        <div className="Deck">
            {isHover && 
                <div className={
                    isTech ? 'tech-label-hover' :
                    isEducation ? 'education-label-hover' :
                    isService ? 'service-label-hover' :
                    isDesign ? 'design-label-hover' :
                    null}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() => handleClick(props.link)}
                >
                    <h4>{props.jobTitle}</h4>
                </div>
            }
            {!isHover && 
                <div className={
                    isTech ? 'tech-label' :
                    isEducation ? 'education-label' :
                    isService ? 'service-label' :
                    isDesign ? 'design-label' :
                    null}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <h4>{props.jobTitle}</h4>
                </div>
            }
            <ol className="desc-list">
                <li className="date">{props.date}</li>
                <li>{props.employer}</li>
                <li>{props.team}</li>
            </ol>
        </div>
    );
};

export default Deck;