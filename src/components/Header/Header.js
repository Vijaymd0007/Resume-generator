import React from 'react'
import styles from './Header.css'
import logo from "../../assets/logo.svg"

export const Header = () => {
  return (
    <div className="container">
        <div className='left'>
            <p className='heading'>
                A <span>Resume</span> that stands out!
            </p>
            <p className='heading'>
                Make your own resume. <span>It's free</span>
            </p>
        </div>
        <div className='right'><img src={logo} alt="Resume" /></div>
        
       
    </div>
  )
}
