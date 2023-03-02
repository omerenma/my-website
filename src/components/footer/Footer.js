import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer container'>
        <div className='footer-box'>
        <h2>Links</h2>
          <div className='footer-link'>
            <a href='/'>Home</a>
            <a href='#about'>About</a>
            <a href='#projects'>Project</a>
            <a href='#social'>Social</a>
          </div>
        </div>
        <div className='footer-box'>
        <h2>Social</h2>
          <div className='footer-link'>
            <a href='/'>Github</a>
            <a href='#about'>Linkedin</a>
            <a href='#social'>Social</a>
          </div>
        </div>
        <div className='footer-box'>
        <h2>Contact</h2>
          <div className='footer-link'>
            <a href='/'><span>Phone:</span>+2348130299583</a>
            <a href='#about'><span>Email:</span>Godwin2341@gmail.com</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
