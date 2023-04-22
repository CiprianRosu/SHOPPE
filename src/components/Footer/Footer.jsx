import React from 'react'
import './Footer.css'
import { BsArrowRight} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='footer'>

      <div className='left'>
        <ul>
          <li>CONTACT</li>
          <li>TERMS OF SERVICES</li>
          <li>SHIPPING AND RETURNS</li>
        </ul>


        <p>
        © 2021 Shelly. Terms of use and privacy policy.
        </p>

      </div>


      <div className='right'>
        <div className='up_right'>
          <p>
          Give an email, get the newsletter.
          </p>

          <a href="">
          <BsArrowRight/>
          </a>
        </div>

        <div className='some'>
          <a><FaLinkedinIn/></a>
          <a><FaFacebookF/></a>
          <a><FaInstagram/></a>
          <a><BsTwitter/></a>
        </div>
        
      </div>

    </div>
  )
}

export default Footer