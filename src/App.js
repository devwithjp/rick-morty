import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, setSortConfig, setCharacters } from './redux/actions';
import CharacterTable from './components/CharacterTable';
import SearchBar from './components/SearchBar';
import SortButton from './components/SortButton';
import Pagination from './components/Pagination';
import CharacterDetailModal from './components/CharacterDetailModal';

function App() {
  const searchTerm = useSelector((state) => state.searchTerm);
  const sortConfig = useSelector((state) => state.sortConfig);
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Fetch data from the API and update the 'characters' state
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCharacters(data.results));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [dispatch]);

  // Handle search functionality
  

  useEffect(() => {
    console.log("FRFRF")
    const filteredChars = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
   setFilteredCharacters(filteredChars);
  }, [searchTerm, characters,dispatch]);

  // Handle sorting functionality
  const sortData = (key) => {
    let sortedData = [...filteredCharacters];
    if (sortConfig && sortConfig.key === key) {
      sortedData.reverse();
    } else {
      sortedData.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    }
    dispatch(setSortConfig({ key, direction: 'asc' }));
    setFilteredCharacters(sortedData);
  };



  // Handle pagination
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Rick and Morty Characters</h1>
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <SortButton
        onSortByName={() => sortData('name')}
        onSortById={() => sortData('id')}
      />
      <CharacterTable
        characters={currentCharacters}
        openModal={setSelectedCharacter}
      />
      <Pagination
        charactersPerPage={charactersPerPage}
        totalCharacters={filteredCharacters.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {selectedCharacter && (
        <CharacterDetailModal
          character={selectedCharacter}
          closeModal={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}

export default App;