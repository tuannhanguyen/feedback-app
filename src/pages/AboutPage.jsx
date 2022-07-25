import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'


function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        {/* <p>This is a project created by Nguyen Vo Tuan Nhan to celebrate My Linh's birthday 18/09/2022</p> */}
        <p>Đây là năm đầu tiên sinh tui được chúc mừng sinh nhật bà,</p>
        <p>Tui mong sinh nhật bà nhiều năm sau nữa..., tui vẫn được ở bên cạnh bà nha.</p>
        <p>Chúc những điều tốt đẹp nhất luôn đến với bà</p>
        <p>Version: 1.0.0</p>
        <p>&copy; Nguyen Vo Tuan Nhan 2022</p>
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
