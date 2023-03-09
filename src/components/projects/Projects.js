import React from 'react'
import {Link} from 'react-router-dom'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {IconContext} from 'react-icons'
import "./project.css"

const Projects = () => {
  return (
    <section id='projects'>
      <div className='container social'>
    <h2>Project Links</h2>
    <p className='u-text-small u-text-light'>Follow links to visit my social platforms</p>
    <div className='social-icons'>
    <IconContext.Provider value={{size:'15', color:'white'}}>
      <div className='social-icon'>
       <a href='https://leadpayroll.com'>Lead Payroll</a> 
       <a href='https://samsplc.com'>SAMSNG</a>
       <a href='https://www.octopusdms.com/'>Octopus DMS</a>
       <a href='/#'>Sabitrade mobile application</a>
      </div>
    </IconContext.Provider>
    </div>
      </div>
    </section>
  )
}

export default Projects
