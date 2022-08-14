import React, { useEffect } from 'react';
import HeaderBtn from './HeaderBtn';
import HeaderSocials from './HeaderSocials';
import AnimatedLetters from './AnimatedLetters';
import { useState } from 'react';
import './header.scss';

function Header() {
  const [letterClass, setLetterClass] = useState('text-animation')
  const nameArray = ['E','m','a','n',' ','Z','u','l','f','i','q','a','r',' ','G','h','a','n','i'];
  const jobArray = ['f','r','o','n','t','e','n','d',' ','d','e','v','e','l','o','p','e','r','.'];

  useEffect(() => {
     setTimeout(()=>{
      setLetterClass('text-animation-hover');
    },6000)
  },[])

  return (
    <div>
      <header>
        <div className="container header-container">
          <div className='text-zone'>
          <h5 className='header-h5'>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i, </span>
            <span className={`${letterClass} _13`}> I</span>
            <span className={`${letterClass} _14`}>'m </span>          
            </h5>
          <h1 className='header-h1'><AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/></h1>
          <h5 className='text-light header-h5'><AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={34}/></h5>
          <HeaderBtn />
          <HeaderSocials/>
          <a href="#contact" className='scroll-down'>Scroll Down</a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;