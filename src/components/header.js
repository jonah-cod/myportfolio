import React from 'react'
import user from "../images/im.jpg"
import "../css/style.css"

export const Header = () => {
    return (
        <div className="header">
            <div className="wrap">
                <img src={user} alt=""/>
                <h1>Jonathan Mwaniki</h1>
                <span><i>Web Developer</i></span>
            </div>
        </div>
    )
}
