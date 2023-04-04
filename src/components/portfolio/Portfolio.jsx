import React from 'react';
import './portfolio.css';
import IMG5 from '../../assets/attack-on-titan-game.png'
import IMG1 from '../../assets/pomodoro-timer.png'
import IMG2 from '../../assets/drum-machine.png'
import IMG3 from '../../assets/online-calculator.png'
import IMG4 from '../../assets/random-quote-machine.png'

const data = [
  {
    id: 5,
    image: IMG5,
    title: 'Attack on Titan Game',
    github: 'https://github.com/chrisWO92/attack-on-titan-game',
    demo: 'https://jolly-mermaid-3cbc8f.netlify.app/*  */'
  },
  {
    id: 1,
    image: IMG1,
    title: '25 + 5 Pomodoro Timer',
    github: 'https://github.com/chrisWO92/pomodoro-timer',
    demo: 'https://fancy-wisp-2164a4.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Drum Machine',
    github: 'https://github.com/chrisWO92/drum-machine',
    demo: 'https://warm-truffle-5bf2e3.netlify.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Online Calculator',
    github: 'https://github.com/chrisWO92/online-calculator',
    demo: 'https://resilient-gnome-0c3caa.netlify.app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Random Quote Machine',
    github: 'https://github.com/chrisWO92/random-quote-machine',
    demo: 'https://eloquent-torrone-398a5d.netlify.app'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item__image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item__cta">
                  <a href={github} className='btn' target="__blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="__blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;