/* eslint-disable react/prop-types */
import React from 'react'

const Item = ({ item }) => {
  return (
    <div className='item-list__image'>
      <img src={ item.thumbnailUrl } alt={ item.title }></img>
    </div>
  )
}

export default Item