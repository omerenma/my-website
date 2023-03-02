import React from 'react'
import './stacks.css'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import Description from './Description'
import { data } from './data'

const Stack = () => {
  return (
    <section id='section'>
    <div className='container stack'>
      <div className='u-title'>
      <BsFillBriefcaseFill size={30} color="orange" />
      <h2>Technologies I have worked with</h2>
          <p className='u-text-small u-text-light'>
         I have worked professionally and extensively with the following technologies
          </p>
        </div>
          <div className='description-div'>
          {
            data.map(item => (
              
                <Description key={item.id} title={item.title} description={item.description} />

            ))
          }
          </div>
    </div>
    </section>
  )
}

export default Stack
