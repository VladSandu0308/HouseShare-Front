import React from 'react';

const Pagination = ({ perPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='flex justify-center mr-10'>
      <nav>
        <ul className='flex list-style-none'>
            <li key="001" className='page-item'>
              <button onClick={() => paginate(Math.max(currentPage - 1, 1))} className='page-link pagination'>
                Previous
              </button>
            </li>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              { currentPage === number ? (
                <button onClick={() => paginate(number)} className='page-link pagination bg-secondary'>
                  {number}
                </button>
              ) : (
                <button onClick={() => paginate(number)} className='page-link pagination'>
                  {number}
                </button>
              )

              }    
            </li>
          ))}

            <li key="000" className='page-item'>
              <button onClick={() => paginate(Math.min(currentPage + 1, Math.ceil(totalPosts/perPage)))} className='page-link pagination'>
                Next
              </button>
            </li>
        </ul>
      </nav>
    </div>
    
  );
};

export default Pagination;