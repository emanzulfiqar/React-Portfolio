import React from 'react';
import './nav.scss';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBriefcase} from 'react-icons/bi';
import {AiOutlineMessage} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {useState} from 'react';




function Nav() {

  const [activeNav,setActiveNav]= useState("#");


  return (
    <nav>
      <a href="#" className={activeNav === "#" ? 'active' : ""} onClick={() => setActiveNav('#')}><AiOutlineHome/></a>
      <a href="#about" className={activeNav === "#about" ? 'active' : ""} onClick={() => setActiveNav('#about')}><AiOutlineUser/></a>
      <a href="#skills" className={activeNav === "#skills" ? 'active' : ""} onClick={() => setActiveNav('#skills')}><BiBook/></a>
      <a href="#portfolio" className={activeNav === "#portfolio" ? 'active' : ""} onClick={() => setActiveNav('#portfolio')}><BiBriefcase/></a>
      <a href="#contact" className={activeNav === "#contact" ? 'active' : ""} onClick={() => setActiveNav('#contact')}><AiOutlineMessage/></a>
     
    </nav>
  )
}

export default Nav;