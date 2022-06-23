import React from 'react';

export default function Pagination({ currentPage, lastPage, setCurrentPage }) {
  return (
    <div>
      <p>{currentPage + 1}</p>
      <button disabled={currentPage <= 0} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
      <button disabled={currentPage >= lastPage} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>  
    </div>
  );
}
