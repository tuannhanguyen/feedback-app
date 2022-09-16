import React from 'react'
import Card from './shared/Card'
import CardMain from './shared/CardMain'
import Button from './shared/Button'
import { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'
import happy from '../images/hasher-happy-sticker.gif'
import iloveu from '../images/download.png'
import img3 from '../images/giphy.gif'

function FeedbackForm() {

  return (
    <div style={{backgroundColor: "green"}}>
    <CardMain>
      <form>
        <h2>CHÚC MỪNG SINH NHẬT</h2>
        <h2>"Cô bạn thân" MỸ LINH</h2>
        <h2>18.09.2022</h2>
        <img src={happy} alt="" />
        <img src={iloveu}  />
      </form>
    </CardMain>


    </div>
  )
}

export default FeedbackForm
