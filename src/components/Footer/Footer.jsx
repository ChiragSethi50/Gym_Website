import React from 'react'
import './Footer.css'
import gitHub from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedIn from '../../assets/linkedin.png'
import logo from '../../assets/gym-logo.png'


const Footer = () => {
  
  return (
    <div className='footer'>

      <hr/>
      <div className='blur blur-f1'></div>
      <div className='blur blur-f2'></div>
      <div className='links'>
        <div className='footer-img'>
          <a href='https://github.com/'> <button ><img src={gitHub} /></button></a>
          <a href='https://instagram.com/'> <button><img src={instagram} /></button></a>
          <a href='https://in.linkedin.com/'> <button><img src={linkedIn} /></button></a>
        
        </div>
        <div className='logo-f'>
            <img src={logo} />
        </div>
      </div>
      
    </div>
  )
}

export default Footer
