import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import './footer.scss';

function Footer() {
  return (
    <footer id="footer">
      <a href="" className='footer-logo'>Eman</a>

      <ul className='pagelinks'>
        <li><a href="#">Home </a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
      <a target="_blank"href='https://www.facebook.com/emanzulfiqarghani'><FaFacebookF/></a>
      <a target="_blank"href='https://www.instagram.com/_frontend_coding_/'><BsInstagram/></a>
      <a target="_blank"href='https://linkedin.com/in/eman-zulfiqar-ghani'><FaLinkedinIn/></a>
      </div>

      <div className="footer-copyright">
        <small>&copy;Eman Zulfiqar Ghani.</small>
      </div>
    </footer>
  )
}

export default Footer