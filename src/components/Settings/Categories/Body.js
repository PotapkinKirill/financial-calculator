import React from 'react'
import PreviousName from '../../PaymentModal/Previous/Name'
import Pencil from './Pencil'
import Trash from './Trash'

const CategoriesBody = ({categories, onClickEdit, onClickDelete}) => {
  return(
    <div className='CategoryBody'>
      {categories.map(category => 
        <div key={category.id}>
          - <PreviousName name={category.name} />
          <span className='CategoryBody__buttons'>
            <button
              className='edit'
              onClick={onClickEdit(category)}
              style={{fill: category.color}}
              ><Pencil/>
            </button>
            <button
              className='delete'
              onClick={onClickDelete(category)}
              ><Trash/>
            </button>
          </span>
        </div>
      )}
    </div>
  )
}

export default (CategoriesBody)
