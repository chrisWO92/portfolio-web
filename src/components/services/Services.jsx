import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='services__container'>
        {/* <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article> */}
        {/*END OF UI/UX*/}
        <article className='service'>
          <div className='service__head'>
            <h3 className='subtitle'>Front-end Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Responsive Websites for Desktop and Mobile</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Single-Page Apps with React</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>User experience optimization</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Development and maintenance of user interfaces</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Improvement of site interaction regardless of the browser</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Bug fixing and usability testing</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>SEO best practices implementation</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}
        {/* <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list__icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article> */}
        {/*END OF CONTENT CREATION*/}
        
      </div>
    </section>
  )
}

export default Services