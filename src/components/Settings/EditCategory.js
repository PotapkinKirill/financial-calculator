import React from 'react';

const EditCategory = (props) => {
  return(
    <div className='EditCategory'>
      <div className='fade' onClick={props.onClose}/>
      <div className='form'>
        <div className='form__header'>
          <h2>Edit category '{props.category.name}'</h2>
        </div>
        <div className='form__body'>
          <input className='Payments__input' defaultValue={props.category.name}/>
        </div>
        <div className='form__footer'>
          <button 
            className='Payments__button Payments__save'
            onClick={props.updateCategory}
            >Save
          </button>
          <button
            className='Payments__button Payments__cancel'
            onClick={props.onClose}
            >Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default (EditCategory)