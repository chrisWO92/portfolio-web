import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Video from '../../assets/header_video.mp4'

const Header = () => {
  return (
    <header>
      <div className="header-bg">
        <video src={Video} autoplay='autoplay' muted loop type="video/mp4" id='video-bg'/>
      </div>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>CrisWO92</h1>
        <h5 className='text-light'>React Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scrol Down</a>
      </div>
    </header>
  )
}

export default Header;