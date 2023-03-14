import React from 'react';
import './experience.css';

import {BsPatchCheckFill} from 'react-icons/bs'

import {DiJavascript1} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {FaBootstrap} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {DiVisualstudio} from 'react-icons/di'
import {SiGit} from 'react-icons/si'


import {FaReact} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details__icon' />
              <h4 className='skill_tag'>HTML</h4>
            </article>
            <article className='experience__details'>
              <IoLogoCss3 className='experience__details__icon' />
              <h4 className='skill_tag'>CSS</h4>
            </article>
            <article className='experience__details'>
              <DiJavascript1 className='experience__details__icon' />
              <h4 className='skill_tag'>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <FaBootstrap className='experience__details__icon' />
              <h4 className='skill_tag'>Bootstrap</h4>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details__icon' />
              <h4 className='skill_tag'>React</h4>
            </article>
            <article className='experience__details'>
              <BsGithub className='experience__details__icon' />
              <h4 className='skill_tag'>Github</h4>
            </article>
            <article className='experience__details'>
              <DiVisualstudio className='experience__details__icon' />
              <h4 className='skill_tag'>VSCode</h4>
            </article>
            <article className='experience__details'>
              <SiGit className='experience__details__icon' />
              <h4 className='skill_tag'>Git</h4>
            </article>
          </div>
        </div>
        {/* <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Experience;