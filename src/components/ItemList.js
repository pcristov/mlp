/* eslint-disable react/prop-types */
import React from 'react'
import Slider from './Slider'

const ItemList = ({ images }) => {
  return (
    <div className='item-list'>
      <div className='item-list__text'>Lorem ipsum dummy text. Lorem isum not just dummy text</div>
      <div className='item-list__available-items item-list--selected'>Available Items</div>
      <div className='item-list__information-one'>Information One</div>
      <Slider slides={ images } />
    </div>
  )
}

export default ItemList