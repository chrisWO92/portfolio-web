import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/cristian-pineda-developer/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/chrisWO92" target='_blank' rel='noreferrer'><BsGithub /></a>
        <a href="https://twitter.com/CrisWo11" target='_blank' rel='noreferrer'><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials