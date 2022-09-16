import React from 'react'
import PropTypes from 'prop-types'

function CardMain({children, reverse}) {
  return (
    <div className={`card ${reverse && 'reverse' }`} style={{backgroundColor: "pink"}}> 
      {children}
    </div>
  )
}



export default CardMain
