import React from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option__icon'/>
            <h4>Email</h4>
            <h5>chrisworkingonline@gmail.com</h5>
            <a href="mailto:chrisworkingonline@gmail.com" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option__icon'/>
            <h4>Facebook</h4>
            <h5>My Facebook</h5>
            <a href="https://facebook.com" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option__icon'/>
            <h4>Whatsapp</h4>
            <h5>+5491123750562</h5>
            <a href="https://api.whatsapp.com/send?phone+5491123750562" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Sen Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;