import React from 'react'

const Summary = () => {
  return (
    <div className='summary'>
      <div className='product-items'>
        <div>Product Items</div>
        <div>Summary</div>
      </div>
      <div className='deposited'>
        <div className='deposited__text'>Deposited</div>
        <div>$2500.00</div>
      </div>
      <div className='withdrawn'>
        <div className='withdrawn__text'>Withdrawn</div>
        <div>$700.00</div>
      </div>
      <div className='graph'>
        <div className='graph__image' style={{ '--p': 25, '--s': 0 }}></div>
      </div>
    </div>
  )
}

export default Summary