import React, {useState} from 'react'
import {SiAlfaromeo, Si} from 'react-icons/si'
import {AiOutlineBars} from 'react-icons/ai'
import {RiCloseLine} from 'react-icons/ri'
import './Navbar.css'
import Button from '../ui/button/Button'
import '../ui/button/Button.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)
  return (
    <nav className='container navbar'>
      <div className='logo'>
        <SiAlfaromeo color='#fff' size={33} />
        <p className='logo-text'>
          KingDev<span>X</span>
        </p>
      </div>
      <menu className='menu'>
        <ul className='nav-links' id={showMenu ? "nav-links-mobile" :"nav-links-mobile-hide"}>
          <li><a href='/'>Home</a></li>
          <li><a href='#features'>About me</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#social'>Social</a></li>
          <li><a href='#contact'>Contact</a></li>
          <li className='nav-btn'>
            <Button text="Get Started" href="#faq" btnClass={"btn-dark"}  />
          </li>
        </ul>
      </menu>
      <div className='menu-icon' onClick={toggleMenu}>
        {
          showMenu ? < RiCloseLine color='#fff' size={30} /> : <  AiOutlineBars color='#fff' size={27} />
        }
      </div>
    </nav>
  )
}

export default Navbar
