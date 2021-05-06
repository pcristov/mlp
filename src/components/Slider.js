/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import SliderContent from './SliderContent'
import Arrow from './Arrow'
import '../slider.css'

const Slider = ({ slides }) => {
  const getWidth = () => window.innerWidth

  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45
  })

  const { translate, transition, activeSlide } = state

  // Function to handleClick of next arrow
  const nextSlide = () => {

    // if activeSlide is the last one
    if (activeSlide === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeSlide: 0
      })
    }

    setState({
      ...state,
      activeSlide: activeSlide + 1,
      translate: (activeSlide + 1) * getWidth()
    })
  }

  // Function to handleClick of previous arrow
  const prevSlide = () => {

    // if activeSlide is the first one
    if (activeSlide === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * getWidth(),
        activeSlide: slides.length - 1
      })
    }

    setState({
      ...state,
      activeSlide: activeSlide - 1,
      translate: (activeSlide - 1) * getWidth()
    })
  }

  return (
    <div className='slider'>
      <SliderContent translate={ translate } transition={ transition } width={ getWidth() * slides.length } content={ slides } />

      <Arrow direction='left' handleClick={ prevSlide } />
      <Arrow direction='right' handleClick={ nextSlide } />
    </div>
  )
}

export default Slider