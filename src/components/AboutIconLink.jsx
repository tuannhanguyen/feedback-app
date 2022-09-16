import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link' style={{margin: 30}}>
      <Link to="/about">
      About this project
      </Link>
    </div>
  )
}

export default AboutIconLink
