import React, { useState } from 'react';
import './Tag.css';

function Tag(props) {
    const [isHover, setHover] = useState(false);

    const isTech = props.isTech ? true : false;
    const isEducation = props.isEducation ? true : false;
    const isService = props.isService ? true : false;
    const isDesign = props.isDesign ? true : false;

    return (
        <div className="Tag">
            {!isHover && 
                <div className={
                    isTech ? 'tech' :
                    isEducation ? 'education' :
                    isService ? 'service' :
                    isDesign ? 'design' :
                    null
                    }
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                />
            }
            {isHover && 
                <div className={
                    isTech ? 'tech-hover' :
                    isEducation ? 'education-hover' :
                    isService ? 'service-hover' :
                    isDesign ? 'design-hover' :
                    null
                    }
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                />
            }
            <h4 className="tag-name">
                {props.tagName}
            </h4>
        </div>
    );
};

export default Tag;