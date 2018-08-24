import React from 'react'
import shortName from '../../../utils/shortName'

const PreviousName = ({name}) => {
  let isLongName = name.length > 30
  return(
    <span 
      className={'previous__list--category ' + (isLongName ? 'previous--help' : '')} 
      title={(isLongName ? name : null)}
      >{shortName(name)}:
    </span>
  )
}

export default (PreviousName)