import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>chrisWO92</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>

        <a href="https://www.linkedin.com/in/cristian-pineda-developer/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/chrisWO92" target='_blank' rel='noreferrer'><BsGithub /></a>
        <a href="https://twitter.com/CrisWo11" target='_blank' rel='noreferrer'><BsTwitter /></a>

        {/* <a href="https://facebook.com" target='_blank' rel="noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target='_blank' rel="noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target='_blank' rel="noreferrer"><FaTwitter /></a> */}
      </div>

      <div className="footer__copyright">
        <small>&copy; chrisWO92. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer;