import React from 'react'
import {Link} from 'react-router-dom'
import './learnings.css'
const Learnings = () => {
  return (
    <section id='learnings'>
      <h1>My Learnings</h1>
     <div className='learning'>
        <div>
        <p className='program'>Udacity Nanodegree program</p>
        <p>Front End Web developer, 2021</p>
        <Link className='link' to='https://confirm.udacity.com/KLTUKHHP'>Verify</Link>
        </div>
        <div>
        <p className='program'>Udacity Nanodegree program</p>
        <p>React, 2021</p>
        <Link className='link' to='https://confirm.udacity.com/WLCKKUA3'>Verify</Link>
        </div>
        <div>
        <p className='program'>Udacity Nanodegree program</p>
            <p>Full Stack JavaScript Developer, 2023</p> 
            <Link className='link' to='https://confirm.udacity.com/HKS6GTNK'>Verify</Link>
        </div>
        <div>
        <p  className='program'>Google Africa Developer</p>
        Mobile Web Specialist
        </div>
     </div>
    </section>
  )
}

export default Learnings
