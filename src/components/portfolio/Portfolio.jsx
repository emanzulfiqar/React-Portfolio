import React from 'react';
import './portfolio.scss';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img8 from '../../assets/img8.png';

// import img1 from '../../assets/img1.png';
// import img7 from '../../assets/img7.png';
// import img9 from '../../assets/img9.png';


const data=[
  
  {
  id:1,
  image:img2,
  title:'Survey Form',
  github:'https://github.com/emanzulfiqar/SurveyForm',
  demo:'https://emanzulfiqar.github.io/SurveyForm/'
  },
  {
  id:2,
  image:img3,
  title:'Basic Portfolio',
  github:'https://github.com/emanzulfiqar/BeginnerPortfolio',
  demo:'https://emanzulfiqar.github.io/BeginnerPortfolio/'
  },
  {
  id:3,
  image:img4,
  title:'Covid-19 Screening App',
  github:'https://github.com/emanzulfiqar/CovidScreeningApp',
  demo:'https://emanzulfiqar.github.io/CovidScreeningApp/'
  },
  {
  id:4,
  image:img5,
  title:'Markdown Previewer',
  github:'https://github.com/emanzulfiqar/MarkdownPreviewer',
  demo:'https://emanzulfiqar.github.io/MarkdownPreviewer'
  },
  {
  id:5,
  image:img6,
  title:'Random Quote Machine',
  github:'https://github.com/emanzulfiqar/RandomQuoteMachine',
  demo:'https://emanzulfiqar.github.io/RandomQuoteMachine/'
  },
  
  {
  id:6,
  image:img8,
  title:'Drum Kit',
  github:'https://github.com/emanzulfiqar/Drum-Kit',
  demo:'https://emanzulfiqar.github.io/Drum-Kit/'
  },
  // id:1,
  // image:img1,
  // title:'Technical Documentation',
  // github:'https://github.com/emanzulfiqar/TechnicalDocumentation',
  // demo:'https://emanzulfiqar.github.io/TechnicalDocumentation/'
  // },
  // {
  // id:7,
  // image:img7,
  // title:'Calculator',
  // github:'https://github.io',
  // demo:'https://codepen.io'
  // },
  // {
  // {
  //   id:9,
  //   image:img9,
  //   title:'Pomodaro Clock',
  //   github:'https://github.io',
  //   demo:'https://codepen.io'
  //   }
  ]




const Portfolio=()=>{
   
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {
          data.map(({id,image,title,github,demo})=>{
            return (
              <article key={id} className='portfolio-item'>
          <div className='portfolio-item-img' >
            <img src={image} alt={title} />
          </div>
          <h3 >{title}</h3>
          <div className='portfolio-item-btn'>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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