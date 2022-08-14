import React from 'react';
import CV from '../../assets/Eman-Zulfiqar-Ghani.pdf';

function HeaderBtn() {
  return (
    <div className='cta buttons'>
        <a href="https://drive.google.com/file/d/10gFTGj31iud-k-EEBGMyz41NVKjJCr-f/view?usp=sharing" target="_blank" className='btn'>My Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default HeaderBtn;