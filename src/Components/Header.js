import React from 'react'
import Logo from '../assests/images.svg'
function Header() {
  return (
    <div id = "container1">
    <img src={Logo} alt='img' className='logo'></img>
    <p id="help">|  Help Center </p>
    <div id="btns">
    <button className='button' id='button1'>Submit a request</button>
    <button className='button' id='button2'>Sign in</button>
    </div>
    </div>
  )
}

export default Header;