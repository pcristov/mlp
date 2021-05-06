/* eslint-disable react/prop-types */
import React from 'react'
import '../slider.css'

const Slide = ({ url }) => {
  return (
    <div className='slider__slide' style={{ 'backgroundImage': 'url(' + url + ')' }} />
  )
}

export default Slide