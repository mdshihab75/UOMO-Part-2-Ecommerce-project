import React from 'react'

const Listitems = ({children, className, onClick}) => {
  return (
    <li onClick={onClick} className={className}>{children}</li>
  )
}

export default Listitems