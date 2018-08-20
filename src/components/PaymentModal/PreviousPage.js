import React from 'react';

const PreviousPage = ({page, pages, handleClickPrev, handleClickNext}) => {
  return (
    <div className='previous__page'>
      <p>Page {page + 1}/{pages}</p>
      {
        page > 0 &&
        <button
          className='button button_size_s button--prev'
          onClick={handleClickPrev}>
          {'<< Prev'}
        </button>
      }
      {
        page < pages - 1 &&
        <button
          className = 'button button_size_s button--next'
          onClick={handleClickNext}
          >{'Next >>'}
        </button>
      }
    </div>
  )
}

export default (PreviousPage)