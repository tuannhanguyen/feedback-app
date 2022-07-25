import React from 'react'
import PropTypes from 'prop-types'

function Header( {text, bgColor, textColor} ) {
    const headerStyles = {
      backgroundColor: bgColor, 
      color: textColor
    }
  return (
    <header style={headerStyles} >
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps= {
  text: 'CHÚC MỪNG SINH NHẬT MỸ LINH - 18/09/2022',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

export default Header