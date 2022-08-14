import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {ImCodepen} from 'react-icons/im';

function HeaderSocials() {
  return (
    <div className='header-socials'>
      <a href="https://linkedin.com/in/eman-zulfiqar-ghani" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/emanzulfiqar" target='_blank'><FaGithub/></a>
      <a href="https://codepen.io/emanzulfiqar" target='_blank'><ImCodepen/></a>
    </div>
  )
}

export default HeaderSocials;