import React from 'react'
import home1 from '../img/home1.png'
import {About, Description, Hide, Image} from '../Styles'
import {motion} from 'framer-motion'
import { fade, titleAnim, photoAnim } from '../animation'
import Wave from './Wave'

function AbountSection() {


    return (
        <About>
            <Description>
                <motion.div >
                    <Hide>
                        <motion.h2 variants={titleAnim} >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Your <span>dream</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for photographt and videoagraphy and anything we will help youe get your goal.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image >
                <motion.img variants={photoAnim} src={home1} alt="Guy with a camera"/>
            </Image>
            <Wave/>
        </About>
    )
}

export default AbountSection