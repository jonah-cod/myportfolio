import React from 'react'
import '../css/style.css'
import whatsapp from '../images/whatsapp.png'
import linkedin from '../images/linkedin.png'
import gmail from '../images/gmail.png'
import git from '../images/git.png'
import { Mailto } from './mailto'


export const Footer = () => {
    return (
        <div className ="contactme">
            <h4>How to Reach Me</h4>
            <div className="contacts">
                <div className="contact">
                    <img src={gmail} alt="" />
                    <Mailto/>               
                </div>

                <div className="contact">
                    <img src={linkedin} alt="" />
                    <a href="https://www.linkedin.com/in/jonathan-kinyoki-72007719b">LinkedIn</a>
                </div>

                <div className="contact">
                    <img src={whatsapp} alt="" />
                    <a href="https://wa.me/0799541853">WhatsApp</a>
                </div>

                <div className="contact">
                    <img src={git} alt="" />
                    <a href="https://github.com/jonah-cod">GitHub</a>
                </div>
            </div>
        </div>
    )
}
