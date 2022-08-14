import React from 'react';
import './about.scss';
import Me from '../../assets/about-me-img.png';
import CV from '../../assets/Eman-Zulfiqar-Ghani.pdf';


function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={Me} alt="about-me-img" />
          </div>
        </div>
        <div className="about-content">
          <p className='subhead'>Hey there, my name is <strong>Eman Zulfiqar Ghani</strong> and I am based in <strong>Rawalpindi, Pakistan</strong>. I am passionate about creating things for the Web.
I'm a front-end web developer who is motivated to fuse the programming and design arts. </p>
<p>Among other technologies, my expertise includes
HTML/HTML5, CSS/CSS3, Bootstrap, jQuery, JavaScript, and React.js. I have a working knowledge of WordPress, the most popular content management
system. My career goal is to become a web developer.</p>
          <a href={CV} className="btn btn-primary" download>Download Resume</a>
        </div>
      </div>
    </section>
  )
};

export default About;