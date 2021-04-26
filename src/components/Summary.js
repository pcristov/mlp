import React from 'react'

const Dashboard = () => {
  return (
    <div className='summary'>
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

      <div className='product-items'>
        <div>Product Items</div>
        <div>Summary</div>
      </div>
      <div className='deposited'>
        <div className='deposited__title'>Deposited</div>
        <div>$2500.00</div>
      </div>
      <div className='withdrawn'>
        <div className='withdrawn__title'>Withdrawn</div>
        <div>$700.00</div>
      </div>
      <div className='graph'>
        <div className='graph__image' style={{ '--p': 25, '--s': 0 }}></div>
      </div>
    </div>
  )
}

export default Dashboard