import React from 'react';

const AddCategory = (props) => {
  return(
    <div className='AddCategory'>
      <div className='fade' onClick={props.onClose}/>
      <div className='form'>
        <div className='form__header'>
          <h2>Add category</h2>
        </div>
        <div className='form__body'>
          <input className='Payments__input'/>
        </div>
        <div className='form__footer'>
          <button 
            className='Payments__button Payments__add'
            onClick={props.addCategory}
            >Add
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

export default (AddCategory)