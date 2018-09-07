import React from 'react'

const CategoriesHead = ({type, onClickAdd}) => {
  return(
    <div className='CategoryHead'>
      <span className='CategoryHead__title'>{type} categories</span>
      <span className='CategoryHead__add' onClick={onClickAdd}>
        Add new
        <div className='Category__add'>
          <div className='Category__add-button'></div>
        </div>
      </span>
    </div>
  )
}

export default (CategoriesHead)
