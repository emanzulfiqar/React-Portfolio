import React from 'react';
import './skills.scss';
import { IoLogoHtml5 } from 'react-icons/io';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { SiJquery } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';





function Skills() {
  return (
    <section id="skills" className="section">
      <h5>What Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container skills-container">
        <div className="skills-frontend">
          <h3>Frontend Developement</h3>




          <div className="skills-content">
            <article className="skills-details">
              <IoLogoHtml5 className='skills-details-icons' />
              
            </article>
            <article className="skills-details">
              <IoLogoCss3 className='skills-details-icons' />
             
            </article>
            <article className="skills-details">
              <SiJavascript className='skills-details-icons' />
              
            </article>

            <article className="skills-details">
              <BsFillBootstrapFill className='skills-details-icons' />
              
            </article>

            <article className="skills-details">
              <SiJquery className='skills-details-icons' />
              
            </article>

            <article className="skills-details">
              <FaReact className='skills-details-icons' />
              
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;