import React from 'react'
import './About.css'
import Ai from './Ai.jpg'
import Ai1 from './Ai1.jpg'

const About = () => {
    return (
        <>
        <div className="wrapper">
            <h1>Our Team</h1>
            <div className="team">
                <div className="team_member">
                    <div className="team_img">
                        <img src="https://godwinav.github.io/images/my%20page.jpg" alt="Team_image"/>
                    </div>
                    <h3>Paul Doe</h3>
                    <p className="role">Web Develpoper</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                </div>
                <div className="team_member">
                    <div className="team_img">
                        <img src={Ai} alt="Team_image"/>
                    </div>
                    <h3>Rosie Meg</h3>
                    <p className="role">Tester</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                </div>
                <div className="team_member">
                    <div className="team_img">
                        <img src={Ai1} alt="Team_image"/>
                    </div>
                    <h3>Alex Wood</h3>
                    <p className="role">Support Lead</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                </div>
          </div>
      </div>   
        </>
    )
}

export default About
