import React from 'react'
import CardMain from './shared/CardMain'
import happy from '../images/hasher-happy-sticker.png'
import iloveu from '../images/download.png'

function FeedbackForm() {

  return (
    <div style={{backgroundColor: "green"}}>
    <CardMain>
      <form>
        <h2>CHÚC MỪNG SINH NHẬT</h2>
        <h2>"Cô bạn thân" MỸ LINH</h2>
        <h2>18.09.2022</h2>
        <img src={iloveu}  />
        <img src={happy}/>
      </form>
    </CardMain>


    </div>
  )
}

export default FeedbackForm
