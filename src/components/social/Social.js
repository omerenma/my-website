import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {IconContext} from 'react-icons'
import "./Social.css"

const Social = () => {
  return (
    <section id='social'>
      <div className='container social'>
    <h2>SOCAIL LINKS</h2>
    <p className='u-text-small u-text-light'>Follow links to visit my social platforms</p>
    <div className='social-icons'>
    <IconContext.Provider value={{size:'15', color:'white'}}>
      <div className='social-icon'>
       <a href='https://www.github.com/omerenma'><AiFillGithub  /></a> 
       <a href='https://www.linkedin.com/in/omerenma2018'><AiOutlineLinkedin  /></a>
       <a href='https://www.github.com/omerenma'><BsTwitter  /></a>
      </div>
    </IconContext.Provider>
    </div>
      </div>
    </section>
  )
}

export default Social
