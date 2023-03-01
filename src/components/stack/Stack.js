import React from 'react'
import './stacks.css'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import Description from './Description'
import { data } from './data'

const Stack = () => {
  return (
    <section id='section'>
    <div className='container footer'>
      <div className='u-title'>
      <BsFillBriefcaseFill size={30} color="orange" />
      <h2>Stack</h2>
          <p className='u-text-small u-text-light'>
         I have worked extensively with JavaScript and TypeScript and other JavaScript framework
         to build stunning and amazing applications
          </p>
        </div>
          <div className='description-div'>
            <Description title="" data={data} />
          </div>
    </div>
    </section>
  )
}

export default Stack
