import React from 'react';
import './experience.css';

import {DiJavascript1} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {FaBootstrap} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {DiVisualstudio} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {SiGit} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiTailwindcss} from 'react-icons/si'




const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="experience__container">
        <div className="experience__frontend">
          <h3 className='experience_subtitle'>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <TbBrandNextjs className='experience__details__icon' />
              <h4 className='skill_tag'>Next.js</h4>
            </article>
            <article className='experience__details'>
              <SiTailwindcss className='experience__details__icon' />
              <h4 className='skill_tag'>Tailwind</h4>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details__icon' />
              <h4 className='skill_tag'>React</h4>
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
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details__icon' />
              <h4 className='skill_tag'>HTML</h4>
            </article>
            <article className='experience__details'>
              <IoLogoCss3 className='experience__details__icon' />
              <h4 className='skill_tag'>CSS</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;