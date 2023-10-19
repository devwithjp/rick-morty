// Action Types
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_SORT_CONFIG = 'SET_SORT_CONFIG';
export const SET_CHARACTERS = 'SET_CHARACTERS';

// Action Creators
export const setSearchTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});

export const setSortConfig = (sortConfig) => ({
  type: SET_SORT_CONFIG,
  payload: sortConfig,
});

export const setCharacters = (characters) => ({
  type: SET_CHARACTERS,
  payload: characters,
});