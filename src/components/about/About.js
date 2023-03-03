import React from 'react'
import {FcCheckmark} from 'react-icons/fc'
import "./about.css"


const About = () => {
  return (
    <div className='feature'>
    <div className='feature-content'>
        <div className='feature-icon'>
            <FcCheckmark color='orange' size={20} />
        </div>
        <div className='feature-text'>
        <h3>Result oriented</h3>
        <p u-text-small>
        I believe that any project I am part of must succeed. This comes from my philosophy that if I put in the neccessary efffort and skills then result is achievable.
        I believe in result and nothing less.
        </p>
        </div>
    </div>
       
    <div className='feature-content'>
        <div className='feature-icon'>
            <FcCheckmark color='orange' size={20} />
        </div>
        <div className='feature-text'>
        <h3>Collaboration</h3>
        <p u-text-small>
        For any team to be effective and deliver optimal result, collaboration amongst engineers is key. 
        I have been able to enhance my ability to collaborate with teams on any projects.
        </p>
        </div>

    </div>
        
    <div className='feature-content'>
        <div className='feature-icon'>
            <FcCheckmark color='orange' size={20} />
        </div>
        <div className='feature-text'>
        <h3>Problem solver</h3>
        <p u-text-small>
        I believe that software engineering is all about solving problems of different magnitude.
        I have developed a personalized approach to solving problems over the years as developer
        </p>
        </div>

    </div>
    </div>
  )
}

export default About