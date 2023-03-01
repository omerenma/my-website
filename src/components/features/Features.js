import React from 'react'
import {BsFillBookFill} from 'react-icons/bs'
import phoneFeatures from '../../assets/phone-features.png'
import pix from '../../assets/omerenma.jpg'
import Feature from './Feature'
import './features.css'

const Features = () => {
  return (
    <section id='features'>
      <div className='container features '>
        <div className='u-title'>
          <BsFillBookFill color="orange" size={30} />
          <h2>Just a little about me</h2>
          <p className='u-text-small u-text-light responsive-style'>
          Hi, I'm Kingsley, a Full Stack software Engineer who is passionate about building solutions that scales across multiple platforms.
        I recently developed a full stack B2B and B2C e-commerce application using Node.js with Typescript and Angular that connects  businesses to customers with proximity functionality to show users and customers businesses with products of interest close to them.
      I work with JavaScript | Typescript | React | React-Native | Angular
          </p>
        </div>
        <div className='features-content'>
          <div className='features-left'>
              <img src={pix} alt="phone" className='img' />
          </div>
          <div className='features-right'>
            <Feature />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
