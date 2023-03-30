import React from 'react'
import {BsFillBookFill} from 'react-icons/bs'
import pix from '../../assets/omerenma.jpg'
import About from './About'
import './abouts.css'

const Abouts = () => {
  return (
    <section id='about'>
      <div className='container features '>
        <div className='u-title'>
          <BsFillBookFill color="orange" size={30} />
          <h2>Just a little about me</h2>
          <p className='u-text-small u-text-light responsive-style'>
          Kingsley is a talented software engineer with 5 years of experience working on a variety of projects. He is a specialist in frontend and backend development with JavaScript, Typescript,Node.JS React.JS, Angular and other related technologies and frameworks. He holds a Bachelor’s Degree in Chemistry and has undergone several software development courses at Udacity with verifiable links to certificate of completion. He has experience working in small and medium-sized companies building complex front-end solutions. For Kingsley TDD is a must, he has vast experience working with unit tests using tools such as Jest, Jasmine and Cypress.
Kingsley is skilled at communicating with the diverse parties involved in the development process to efficiently solve problems. He is passionate about his work and adapts quickly to new technologies, constantly looking to improve and learn. His experience allows him to get involved in the full development process from planning to deployment.
          </p>
        </div>
        <div className='features-content'>
          <div className='features-left'>
              <img src={pix} alt="phone" className='img' />
          </div>
          <div className='features-right'>
            <About />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Abouts
