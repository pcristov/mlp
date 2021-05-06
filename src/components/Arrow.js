/* eslint-disable react/prop-types */
import React from 'react'
import previousArrow from '../img/previous.png'
import nextArrow from '../img/next.png'

const Arrow = ({ direction, handleClick }) => {
  const margin = direction === 'right' ? { right: '25px' } : { left: '25px' }

  return (
    <div onClick={ handleClick } className='slider__arrow' style={ margin }>
      { direction === 'right' ?
        <img src={ nextArrow } /> : <img src={ previousArrow } />
      }
    </div>
  )
}

export default Arrow