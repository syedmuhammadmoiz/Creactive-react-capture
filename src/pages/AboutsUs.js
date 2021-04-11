import React from 'react'
import AboutSection from '../Compoenets/AbountSection'
import ServicesSection from '../Compoenets/ServicesSection'
import FaqSection from '../Compoenets/FaqSection'
import {motion} from 'framer-motion'
import {PageAnimation} from '../animation'

function AboutsUs() {
    return (
        <motion.div variants = { PageAnimation} 
        initial = "hidden"
         animate="show"
         exit="exit"
         >
       <AboutSection/>
       <ServicesSection/>
       <FaqSection/>
       </motion.div>
    )
}

export default AboutsUs
