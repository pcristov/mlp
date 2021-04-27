/* eslint-disable react/prop-types */
import React from 'react'
import Item from './Item'

const ItemList = ({ images }) => {
  return (
    <div className='item-list'>
      <div className='item-list__text'>Lorem ipsum dummy text. Lorem isum not just dummy text</div>
      <div className='item-list__available-items item-list--selected'>Available Items</div>
      <div className='item-list__information-one'>Information One</div>
      <div className='item-list__images'>
        { images && images.map((image, index) => (
          <Item item={ image } key={ index } />
        ))
        }
      </div>
    </div>
  )
}

export default ItemList