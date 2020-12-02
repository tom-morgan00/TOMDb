import { GET_MOVIES, LOAD_MOVIES, MOVIES_ERROR } from '../config';

const INITIAL_STATE = {
  movies: [],
  loading: false,
  errorMessage: null,
  searchTerm: '',
};

export default function homeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MOVIES:
      // console.log(action.payload);
      return {
        ...state,
        loading: false,
        movies: [...action.payload.movies],
        searchTerm: action.payload.searchTerm,
        errorMessage: null,
      };
    case MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        searchTerm: action.payload.searchTerm,
        errorMessage: action.payload.error,
      };
    case LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload.movies,
        errorMessage: null,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
}
