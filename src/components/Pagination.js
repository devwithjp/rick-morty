import React from 'react';

function Pagination({ charactersPerPage, totalCharacters, currentPage, setCurrentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={
                currentPage === number
                  ? 'bg-blue-500 text-white p-2 rounded-lg mx-1'
                  : 'bg-gray-300 text-gray-700 p-2 rounded-lg mx-1 hover:bg-blue-500 hover:text-white'
              }
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;