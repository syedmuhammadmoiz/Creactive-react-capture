import React from 'react'
import home1 from '../img/home1.png'

function AbountSection() {
    return (
        <div>
            <div className="discription">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>Your <span>dream</span>come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact us for photographt and videoagraphy and anything we will help youe get your goal.</p>
            </div>
            <div className="image">
                <img src={home1} alt="Guy with a camera"/>
            </div>
        </div>
    )
}

export default AbountSection
