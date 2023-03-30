import React from 'react'
import './Header.css'
import pix from '../../assets/omerenma.jpg'
import "../ui/button/Button.css"
import {BsMouse} from 'react-icons/bs'
import AnimatedText from 'react-animated-text-content';
import { useContextGreet } from '../UseContext'
import PassDownContext from '../UseContext'
const Header = () => {
  return (
    <section id='header'>
    
      <div className='container header'>
        <div className='header-left'>
          <div className='header-text'>
           <AnimatedText
                type="words" // animate words or chars
                animation={{
                  x: '200px',
                  y: '-20px',
                  scale: 1.1,
                  ease: 'ease-in-out',
                }}
                animationType="rifle"
                interval={0.06}
                duration={0.8}
                tag="p"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
                >
  Hi, I'm Kingsley a Full Stack engineer with 5 years of professional experience working extensively with JavaScript and Typescript
</AnimatedText>;
            <span>crafting solutions that scale across multiple platforms</span>
            {/* <p className='util-text-small util-text-light'>We are leaders in the Smart Attendance Managment System</p> */}
          </div>
        {/* <div className='header-cta'>
          <Button text={"Get Started"} btnClass="btn-dark" href={"#"} />
          <Button text={"How It Works"} btnClass="btn-orange" href={"#faq"} />
        </div> */}
        </div>
        <div className='header-right'>
          <img  src={pix} alt="logo"  />
        </div>
      </div>
       <div className='floating-icon'>
   
          <BsMouse color='#fff' size={25} className='mouse' />
        <a href='features'  >
        </a>
      </div>

      
    </section>
  )
}

export default Header
