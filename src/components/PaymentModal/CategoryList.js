import React from 'react';

const CategoryList = ({categories, setCategory}) => {
  return(
    <ul className='CategoryList'>
    {categories.map((category, index) =>
         <div key={index} onClick={setCategory.bind({}, category.name)}>
          <span>{category.name}</span>
         </div>
    )}
    </ul>
  )
}

export default (CategoryList)