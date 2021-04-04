import React from 'react'
import styled from 'styled-components'
import {About} from '../Styles'

function FaqSection() {
    return (
        <Faq>
            <h2>Any Question <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, doloremque.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, doloremque.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, doloremque.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What product do you offer</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, doloremque.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
}

const Faq = styled(About)`
display: block;
span{
    display:block;
}
h2{
    padding-bottom: 2rem;
    font-weight: bold;
}
.faq-line{
    background:#cccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width:100%
}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer{
    p{
        padding: 1rem 0rem;
    }
}
`;


export default FaqSection
