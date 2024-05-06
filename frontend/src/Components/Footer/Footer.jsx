import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import ig_icon from '../Assets/instagram_icon.png'
import wa_icon from '../Assets/whatsapp_icon.png'

const  Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>KENTANG</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icon-container'>
                <img src={ig_icon} alt=''/>
            </div>
            <div className='footer-icon-container'>
                <img src={wa_icon} alt=''/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default  Footer