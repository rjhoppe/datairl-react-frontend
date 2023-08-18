import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <div className='nav__links'>
        <ul className='nav__list'>
          <div className='nav__list__left'>
            <li>About</li>
            <li>App</li>
          </div>
          <div className='nav__list__right'>
            <li>Design</li>
            <li>Contact</li>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Nav