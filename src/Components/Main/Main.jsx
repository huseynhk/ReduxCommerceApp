import React from 'react'
import NavBar from '../NavBar/NavBar'
import Slider from '../Slider/Slider'
import NavigateButtons from '../NavigateButtons/NavigateButtons'

const Main = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Slider></Slider>
        <NavigateButtons/>
    </div>
  )
}

export default Main