import React from 'react';
import './about.css';
import ASTRONAUT from '../../assets/astronaut2.png'
import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const about_text = [
  {
    id: 1,
    text: "I’m a guy with a deep passion for learning and challenging myself to do new and fancy stuff. A few time ago I got delighted with tech world, reason why I’ve spent the last two years improving my programming and creative skills. I’ve gone through highly recommended courses and bootcamps, youtube tutorials, and built an interesting array of personal projects that you’ll see in next sections."
  },
  {
    id: 2,
    text: "I’ve fallen in love with Front-End Development and the incredible things I can build with JavaScript Libraries. One of my hobbies is looking in the internet for new and creative ways for making dynamic pages, getting my knowledge to the next level."
  },
  {
    id: 3,
    text: "I’m an Electrical Engineer graduated in the Universidad del Norte of Colombia, that decided to drop it all and pursue Web Development by passion. Programming is the professional carrer where I’m finding the values and objectives that mativates me the most: learning, innovation and freedom."
  },
  {
    id: 3,
    text: "But life is not just about sitting in front of a computer. I also like books, hanging out with my friends, and playing soccer. Feel free to send me a message and telling me who you are. This page isn’t just for making professional contacts, but to make new friends :). "
  }

]

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>

          
        <div className="about__me__image">
          <img src={ASTRONAUT} alt="About" />
        </div>
          

        <div className="about__content">

          <div className="about__cards">
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 + Years</small>
            </article>
            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Clients Worldwide</small>
            </article> */}
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
            
          </div>
          {/* <p className='about_text'>
          I’m a guy with a deep passion for learning and challenging myself to do new and fancy stuff. A few time ago I got delighted with tech world, reason why I’ve spent the last two years improving my programming and creative skills. I’ve gone through highly recommended courses and bootcamps, youtube tutorials, and built an interesting array of personal projects that you’ll see in the next section.
          </p> */}
          
          <Swiper
            className="text_container"
            spaceBetween={40}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            navigation
            >

            {
              about_text.map(({id, text}) => {
                return (
                  <SwiperSlide key={id} className='about_text'>
                    <p>
                      {text}
                    </p>      
                  </SwiperSlide>
                )
              })
            }
        
          </Swiper>

          <a href="#contact" className='btn btn-primary about_cta'>Let's Talk</a>



        </div>
      </div>
    </section>
  )
}

export default About;