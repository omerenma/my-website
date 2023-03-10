import React from 'react'
import './Footer.css'
import {FaPhoneAlt, FaEnvelope, FaGlobe, FaMap} from 'react-icons/fa'
import {BiNavigation} from 'react-icons/bi'
import {FcContacts} from 'react-icons/fc'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer container'>
        <div className='footer-box'>
        <h2><BiNavigation color='orange' /></h2>
          <div className='footer-link'>
            {/* <a href='/'>Home</a> */}
            <a href='#about'>About</a>
            <a href='#projects'>Project</a>
            <a href='#social'>Social</a>
          </div>
        </div>
        <div className='footer-box'>
        <h2><FaGlobe color='orange' /></h2>
          <div className='footer-link'>
            <a href='https://github.com/omerenma'>Github</a>
            <a href='https://linkedin.com/in/omerenma2018'>Linkedin</a>
            <a href='#social'>Social</a>
          </div>
        </div>
        <div className='footer-box'>
        <h2><FcContacts color='orange' /></h2>
          <div className='footer-link'>
            <a href='#'><span><FaPhoneAlt color='orange' /></span>+2348130299583</a>
            <a href='#'><span><FaEnvelope color='orange' /></span>Godwin2341@gmail.com</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
