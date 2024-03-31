
import React from 'react'
import '../App.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>lama dev</span>
      <div className="links">
        <a href="#">Homepage</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
}

export default Navbar