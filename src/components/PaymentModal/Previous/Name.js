import React from 'react'
import shortName from '../../../utils/shortName'

const PreviousName = ({name}) => {
  return(
    <span
      className='previous__list--category'
      title={name}
      >{name}
      <span style={{overflow: 'visible'}}>:</span>
    </span>
  )
}

export default (PreviousName)
