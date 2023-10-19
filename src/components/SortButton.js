import React from 'react';

function SortButton({ onSortByName, onSortById }) {
  return (
    <div className="my-4 flex items-center">
      <button onClick={onSortByName} className="mx-2 bg-blue-500 text-white px-4 py-2 rounded">
        Sort by Name
      </button>
      <button onClick={onSortById} className="mx-2 bg-blue-500 text-white px-4 py-2 rounded">
        Sort by ID
      </button>
    </div>
  );
}

export default SortButton;