import React from 'react'
import Card from './shared/Card'
import CardMain from './shared/CardMain'
import Button from './shared/Button'
import { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'
import happy from '../images/hasher-happy-sticker.gif'
import iloveu from '../images/my-linh.jpg'
import mylinh from '../images/my-linh-2.jpg'
import img3 from '../images/giphy.gif'
import love from '../images/download.png'

function FeedbackForm() {

  return (
    <div style={{backgroundColor: "green"}}>
    <CardMain>
      <form style={{ background: "url(iloveu)"}}>
        <h2>CHÚC MỪNG SINH NHẬT</h2>
        <h2>"Cô bạn thân" MỸ LINH</h2>
        <h2>18.09.2022</h2>
        <img src={happy} style={{width: "200px", height: "196px", borderRadius: "15px"}}  />
        <img src={iloveu} style={{width: "200px", height: "196px", borderRadius: "15px"}}  />
        <img src={mylinh} style={{width: "200px", height: "196px", borderRadius: "15px"}}  />
        {/* <img src={img3} style={{width: "200px", height: "196px", borderRadius: "15px"}}  />
        <img src={love} style={{width: "400px", height: "196px", borderRadius: "15px"}}  /> */}
      </form>
    </CardMain>


    </div>
  )
}

export default FeedbackForm
