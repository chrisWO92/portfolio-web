import React from 'react';
import './about.css';
import ME from '../../assets/about-me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>

          <div className="about__me">
            <div className="about__me__image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 + Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Clients Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quibusdam. Pariatur magnam iure exercitationem modi fuga, totam inventore voluptatem saepe repellendus quidem magni harum consequuntur cum blanditiis, ipsa, hic repellat.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          {/*Voy por 1:28*/}

        </div>
      </div>
    </section>
  )
}

export default About;