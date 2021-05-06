/* eslint-disable react/prop-types */
import React from 'react'
import Slide from './Slide'
import '../slider.css'

const SliderContent = ({ translate, transition, width, content }) => {
  return (
    <div className='slider__slider-content' style={{ '--translate': -translate + 'px', '--transition': transition + 's', '--width': width + 'px' }}>
      { content.map((slide) => (
        <Slide key={ slide.id } url={ slide.url } />
      )) }
    </div>
  )
}

export default SliderContent