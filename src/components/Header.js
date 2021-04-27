import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <span className='logo__letter'>
          T
        </span>
      </div>

      <div className='menu'>
        <nav className='menu__nav'>
          <label htmlFor='menu__icon' className='menu__label'>&#9776;</label>
          <input type='checkbox' className='menu__icon' id='menu__icon' />

          <div className='menu__items'>
            <a href='index.html'>Home</a>
            <a href='about.html'>About</a>
            <a href='reviews.html'>Reviews</a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header