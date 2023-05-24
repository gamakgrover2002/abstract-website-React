import React from 'react'
import Logo from '../assests/logo.svg'
function Footer() {
  return (
    <div className="container4">
 <div className='listclass'>
    <ul className='list' >
    <li id= "head">Abstract</li>
    <li id='content'>Start Trial</li>
    <li id='content'>Pricing</li>
    <li id='content'>Download</li>
    </ul>
    <ul className='list'>
    <li id='head'>Resources</li>
    <li id='content'>Blog</li>
    <li id='content'>Help Center</li>
    <li id='content'>Release Note</li>
    <li id='content'>Status</li>
    </ul>
    <ul className='list'>
    <li id='head'>Community</li>
    <li id='content'>Twitter</li>
    <li id='content'>LinkedIn</li>
    <li id='content'>Facebook</li>
    <li id='content'>Dribble</li>
    <li id='content'>Podcast</li>
    </ul>
    <div id="list-container">
    <div id="list1">
    <ul className='list'>
    <li id='head'>Company</li>
    <li id='content'>About Us</li>
    <li id='content'>Careers</li>
    <li id='content'>Legal</li>
   
    </ul>
    </div>
 
    <ul className='list'>
    <li id="sublist-head">Contact us</li> 
    <li id='content'>info@abstract.com</li>
    </ul>
    </div>
    </div>
    <div className='copyright'>

    <img id="logo-img" src = {Logo} alt=''></img>
    <p id= "footer-text">
    
© Copyright 2023<br/>

Abstract Studio Design, Inc.<br/>

All rights reserved</p>
       </div>
    </div>
   

  )
}

export default  Footer;