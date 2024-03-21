import React from 'react'
import './Footer.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    
    <div className='footer'>
      <div className='icons'>
      <div className='icons-1'>
       <FaXTwitter /></div>
       <div className='icons-2'>
       <FaInstagram /></div>
       <div className='icons-3'>
       <FaFacebookSquare /></div></div>
       <div className="copyrights">
      Conditions of Use Privacy Notice Your Ads Privacy Choices<br/> 
    © 2024, JourneyGlobe.com, Inc. or its affiliates</div></div>
  )
}

export default Footer