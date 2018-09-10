import React from 'react'

const PreviousName = ({name}) => {
  return(
    <span
      className='previous__list--category'
      title={name}
      >{name}:
    </span>
  )
}

export default (PreviousName)
