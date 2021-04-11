import React from 'react'
import home1 from '../img/home1.png'
import {About, Description, Hide, Image} from '../Styles'
import {motion} from 'framer-motion'

function AbountSection() {


    return (
        <About>
            <Description>
                <motion.div >
                    <Hide>
                        <motion.h2 >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>Your <span>dream</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </motion.div>
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
