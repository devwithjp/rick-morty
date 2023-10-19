import React from 'react';

function CharacterDetailModal({ character, closeModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={closeModal}></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
          <span className="hover:text-gray-300">
            &times;
          </span>
        </div>

        <div className="modal-content py-4 text-left px-6">
          <div className="text-xl font-bold mb-2">
            Character Details
          </div>

          <div className="mb-4">
            <img
              src={character.image}
              alt={character.name}
              className="w-32 h-32 mx-auto rounded-full"
            />
          </div>

          <div className="mb-2">
            <span className="font-semibold">Name:</span> {character.name}
          </div>

          <div className="mb-2">
            <span className="font-semibold">Gender:</span> {character.gender}
          </div>

          <div className="mb-2">
            <span className="font-semibold">Location:</span> {character.location.name}
          </div>

          <div className="mb-4">
            <span className="font-semibold">Origin:</span> {character.origin.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetailModal;