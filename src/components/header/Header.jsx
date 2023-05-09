import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/astronaut4.png'
import HeaderSocials from './HeaderSocials'
import { TypeAnimation } from 'react-type-animation'

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className='header__text'>
          <TypeAnimation
            sequence={[
            "Welcome to my site :D",
            1000,
            "I'm chrisWO92",
            1000,
            'Front-end Developer...',
            1000,
            'Books & Music Lover...',
            1000,
            'Sci-fi Consumer...',
            1000,
            "And Life-long learner!",
            1000,
            '',
            1300,
            ]}
            speed={30}
            className='animated_text'
            wrapper="span"
            repeat={Infinity}
          />
          <CTA />
        </div>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scrol Down</a>
      </div>
    </header>
  )
}

export default Header;