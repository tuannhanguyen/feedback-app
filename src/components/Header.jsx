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
            <h3>{text}</h3>
        </div>
    </header>
  )
}

Header.defaultProps= {
  text: 'Happy Birthday My Linh',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

export default Header