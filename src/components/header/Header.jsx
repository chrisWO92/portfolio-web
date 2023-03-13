import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/astronaut2.png'
import HeaderSocials from './HeaderSocials'
// import Video from '../../assets/header_video.mp4'
import { TypeAnimation } from 'react-type-animation'

const Header = () => {
  return (
    <header>
      {/* <div className="header-bg">
        <video src={Video} autoplay='autoplay' muted loop type="video/mp4" id='video-bg'/>
      </div> */}
      <div className="container header__container">
        <div className='header__text'>
          {/* <h5>Hello I'm</h5>
          <h2>CrisWO92</h2> */}
          {/* <h5 className='text-light'>Frontend Developer</h5> */}
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
            "Welcome to my site :D",
            1000,
            "I'm chrisWO92",
            1000,
            'Front-end Developer...',
            1000,
            'Books & Music Lover...',
            1000,
            'Yoga Practitioner...',
            1000,
            "And Life-long learner!",
            1000,
            '',
            1300,
            ]}
            speed={60} // Custom Speed from 1-99 - Default Speed: 40
            className='animated_text'
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
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