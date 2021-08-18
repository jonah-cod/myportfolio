import React from 'react'

export const ContentBody = () => {
    return (
        <div className="contentBody">
            <div className="profile">
                <div className="me">
                    <h4>Profile</h4>
                    <p>I am a Web developer with robust problem-solving skills and proven able to learn attitude aiming to grow in this field and provide more solutions to our community's daily challenges.

                    </p>
                </div>

                <div className="education">
                    <h4>Education Background</h4>
                    <h6>Kabete National Polytechnic</h6>
                    <p>Attained Diploma in Information Communication Technology</p>
                </div>
            </div>
            <div className="skills">
                <div className="skill">
                    <h6>HTML</h6>
                    <div className="skillcon">
                        <p>HTML5</p>
                    </div>
                </div>
                    
                <div className="skill">
                    <h6>JavaScript</h6>
                    <div className="skillcon">
                        <ul >
                            <li>JavaScript</li>
                            <li>NodeJS</li>
                            <li>ReactJS</li>
                            <li>JQuery</li>
                        </ul>
                    </div>
                </div>
                
                <div className="skill">
                    <h6>CSS</h6>
                    <div className="skillcon">
                        <p>CSS</p>
                    </div>
                </div>

                <div className="skill">
                    <h6>DataBases</h6>
                    <div className="skillcon">
                        <ul>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>

                <div className="skill">
                    <h6>Source Control</h6>
                    <div className="skillcon">
                        <ul>
                            <li>GIT/GITHub/GITLab</li>
                        </ul>
                    </div>
                </div>

                <div className="skill">
                    <h6>Android Development</h6>
                    <small>currently learning</small>
                    <div className="skillcon">
                        <ul>
                            <li>Kotlin</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="referenceshobbies">
                    <div className="reference">
                        <h4>Character References</h4>
                        <pre>
                            <b>Zephaniah N. Makhoha Hsc</b> <br/>
                            Commanding Officer,<br/>
                            Mutongwe NYS Station,<br/>
                            TEL: +2547-28 118 388<br/>
                            <br/>
                            <b>Benson Bundi</b><br/>
                            IT consultant and Software Developer<br/>
                            TEL: +2547-24 654 695<br/>
                            <br/>
                            <b>Mr. Oweki,</b><br/>
                            IT consultant and Software Developer<br/>
                            TEL: +2547-00 833 003<br/>
                        </pre>
                    </div>
                    <div className="hobbies">
                        <h4>Hobbies</h4>
                        <ul >
                            <li>Cycling</li>
                            <li>Watching Movies</li>
                            <li>Nature Walks</li>
                            <li>Listening to Music</li>
                        </ul>
                    </div>

            </div>
        </div>
    )
}
