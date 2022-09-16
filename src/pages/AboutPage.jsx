import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'


function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>
          <Link to="/">Back to home</Link>
        </p>
        <p>Version: 1.0.0</p>
        <p>&copy; Development by tuannhan</p>
        <p>Development: 14.09.2022</p>
        <p>Production: 15.09.2022</p>
      </div>
    </Card>
  )
}

export default AboutPage
