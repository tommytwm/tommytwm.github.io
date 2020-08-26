import React from 'react';
import './Deck.css';

function Deck(props) {
    const isTech = props.isTech ? true : false;
    const isEducation = props.isEducation ? true : false;
    const isService = props.isService ? true : false;
    const isDesign = props.isDesign ? true : false;

    return (
        <div className="Deck">
            <div className={
                isTech ? 'tech-label' :
                isEducation ? 'education-label' :
                isService ? 'service-label' :
                isDesign ? 'design-lavel' :
                null
            }>
                <h4>{props.jobTitle}</h4>
            </div>
            <ol className="desc-list">
                <li className="date">{props.date}</li>
                <li>{props.employer}</li>
                <li>{props.team}</li>
            </ol>
        </div>
    );
}

export default Deck;