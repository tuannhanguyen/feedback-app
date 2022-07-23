import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, version, type, isDisable }) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisable}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    type: 'button',
    version: 'primary',
    isDisable: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isDisable: PropTypes.bool.isRequired,
}

export default Button
