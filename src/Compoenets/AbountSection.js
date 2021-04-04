import React from 'react'
import home1 from '../img/home1.png'
import {About, Description, Hide, Image} from '../Styles'

function AbountSection() {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>Your <span>dream</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact us for photographt and videoagraphy and anything we will help youe get your goal.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="Guy with a camera"/>
            </Image>
        </About>
    )
}



export default AbountSection
