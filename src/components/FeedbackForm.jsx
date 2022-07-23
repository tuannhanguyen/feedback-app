import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'
import RatingSelect from './RatingSelect'

function FeedbackForm({ handleAdd }) {

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(4)

    const handleTextChange = (e) => {
        if (text === '') {
            setMessage(null)
            setBtnDisabled(true)
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback)
        }
    }
    
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)}></RatingSelect>
        <div className='input-group'>
            <input type="text" onChange={handleTextChange} value={text} placeholder='Write a review' />
            <Button type='submit' isDisable={btnDisabled}>Send</Button>
        </div>
        {message && <div>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
