import React from 'react';
import './Tag.css';

function Tag(props) {
    const isTech = props.isTech ? true : false;
    const isEducation = props.isEducation ? true : false;
    const isService = props.isService ? true : false;
    const isDesign = props.isDesign ? true : false;

    return (
        <div className="Tag">
            <div className={
                isTech ? 'tech' :
                isEducation ? 'education' :
                isService ? 'service' :
                isDesign ? 'design' :
                null
            }/>
            <h4 className="tag-name">
                {props.tagName}
            </h4>
        </div>
    );
};

export default Tag;