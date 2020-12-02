import { CLEAR_MOVIE, GET_MOVIE, LOAD_MOVIE, MOVIE_ERROR } from '../config';

const INITIAL_STATE = {
  movie: {},
  loading: false,
  errorMessage: null,
};

export default function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        loading: false,
        movie: { ...action.payload },
      };
    case LOAD_MOVIE:
      return {
        ...state,
        movie: action.payload.movie,
        errorMessage: null,
        loading: action.payload.loading,
      };
    case MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.error,
      };
    case CLEAR_MOVIE:
      return {
        ...state,
        movie: action.payload.movie,
      };
    default:
      return state;
  }
}
