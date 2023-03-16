import React from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ohhpl39', 'template_v2y3nzb', form.current, '8FwO34Ut8BhZg5YRs');
    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option__icon'/>
            <h4>Email</h4>
            {/* <h5>chrisworkingonline@gmail.com</h5> */}
            <a href="mailto:chrisworkingonline@gmail.com" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
          <article style={{display: 'none'}}  className='contact__option'>
            <RiMessengerLine className='contact__option__icon'/>
            <h4>Facebook</h4>
            {/* <h5>My Facebook</h5> */}
            <a href="https://facebook.com" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option__icon'/>
            <h4>Whatsapp</h4>
            {/* <h5>+5491123750562</h5> */}
            <a href="https://api.whatsapp.com/send?phone+5491123750562" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary send_btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;