import React from 'react';
import './testimonials.css';
import AVATAR from '../../assets/avatar-client.png'

// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const testimonials = [
  {
    id: 1,
    avatar: AVATAR,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, alias pariatur mollitia molestiae at sapiente a, sit facilis enim aliquid laudantium quaerat maxime doloribus deleniti fuga quia, reiciendis ad ducimus.'
  },
  {
    id: 2,
    avatar: AVATAR,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, alias pariatur mollitia molestiae at sapiente a, sit facilis enim aliquid laudantium quaerat maxime doloribus deleniti fuga quia, reiciendis ad ducimus.'
  },
  {
    id: 3,
    avatar: AVATAR,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, alias pariatur mollitia molestiae at sapiente a, sit facilis enim aliquid laudantium quaerat maxime doloribus deleniti fuga quia, reiciendis ad ducimus.'
  },
  {
    id: 4,
    avatar: AVATAR,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, alias pariatur mollitia molestiae at sapiente a, sit facilis enim aliquid laudantium quaerat maxime doloribus deleniti fuga quia, reiciendis ad ducimus.'
  },
  {
    id: 5,
    avatar: AVATAR,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, alias pariatur mollitia molestiae at sapiente a, sit facilis enim aliquid laudantium quaerat maxime doloribus deleniti fuga quia, reiciendis ad ducimus.'
  },
  {
    id: 6,
    avatar: AVATAR,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, alias pariatur mollitia molestiae at sapiente a, sit facilis enim aliquid laudantium quaerat maxime doloribus deleniti fuga quia, reiciendis ad ducimus.'
  }

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="testimonials__container"
        spaceBetween={40}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        navigation
      >

      {
        testimonials.map(({id, avatar, name, review}) => {
          return (
            <SwiperSlide key={id} className='testimonial'>
              <div className="client__avatar">
              <img src={avatar} alt={name} />  
              </div>
              <h5>{name}</h5>
              <small className='client__review'>
                {review}
              </small>      
            </SwiperSlide>
          )
        })
      }
        
      </Swiper>

    </section>
  )
}

export default Testimonials;