import { SET_SEARCH_TERM, SET_SORT_CONFIG, SET_CHARACTERS } from './actions';

const initialState = {
  searchTerm: '',
  sortConfig: { key: '' },
  characters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case SET_SORT_CONFIG:
      return { ...state, sortConfig: action.payload };
    case SET_CHARACTERS:
      return { ...state, characters: action.payload };
    default:
      return state;
  }
};

export default rootReducer;