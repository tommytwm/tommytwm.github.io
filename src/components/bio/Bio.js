import React from 'react';
import './Bio.css';

import Photo from './assets/pic.png';

function Bio() {
    return (
        <div className="Bio">
            <div className="Bio-text">
                <h2 className="Bio-header">
                    So this is me 🤗
                </h2>
                <div className="Bio-body">
                    <p>
                        I’m 21 years old, born and raised in Malaysia! I currently reside in <b>Vancouver, BC.</b> I’ve been living in Canada since August 2017 as an international student — and so far, loving the west coast! I’ve made this website to tell my story.
                    </p>
                    <p>
                        I’m a fourth-year undergrad, majoring in <b>Computer Science</b> at The University of British Columbia and I’m expected to graduate by Fall 2022. After graduation, I plan to pursure a career in software!
                    </p>
                    <p>
                        When I’m not coding, I’m usually out looking for another coffee joint, climbing at the bouldering gym, cooking, tinkering with my PC, designing another website, or just hanging out with my friends. :)
                    </p>
                </div>
            </div>
            <div className="Bio-img">
                <img
                    src={Photo}
                    alt={"Me in Alberta, during Summer of 2019"}
                />
            </div>
        </div>
    );
};

export default Bio;