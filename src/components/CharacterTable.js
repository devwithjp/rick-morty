import React from 'react';

function CharacterTable({ characters, openModal }) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Species
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Detail
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {characters.map((character) => (
          <tr key={character.id}>
            <td className="px-6 py-4 whitespace-nowrap">{character.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{character.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{character.status}</td>
            <td className="px-6 py-4 whitespace-nowrap">{character.species}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                onClick={() => openModal(character)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                Detail
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CharacterTable;