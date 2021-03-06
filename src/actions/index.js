import {
  GET_MOVIES,
  GET_MOVIE,
  API_KEY,
  LOAD_MOVIES,
  LOAD_MOVIE,
  MOVIES_ERROR,
  MOVIE_ERROR,
  CLEAR_MOVIE,
  API_URL,
} from '../config';
import { calcRuntime } from '../helpers';

export const getMovies = (query, page = 1) => async (dispatch) => {
  dispatch({
    type: LOAD_MOVIES,
    payload: {
      loading: true,
      movies: [],
    },
  });
  try {
    const data1 = await (
      await fetch(`${API_URL}/?${API_KEY}&s=${query}&page=${page}`)
    ).json();
    const data2 = await (
      await fetch(`${API_URL}/?${API_KEY}&s=${query}&page=${page + 1}`)
    ).json();
    console.log(data1);
    console.log(data2);
    if (data1.Response === 'True' && data2.Response === 'True') {
      const movies = [...data1.Search, ...data2.Search];
      dispatch({
        type: GET_MOVIES,
        payload: {
          movies,
          searchTerm: query,
        },
      });
    } else {
      dispatch({
        type: MOVIES_ERROR,
        payload: {
          error: data1.Error,
          searchTerm: query,
        },
      });
    }
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: {
        error: err.message,
        searchTerm: query,
      },
    });
  }
};

export const getMovie = (id) => async (dispatch) => {
  dispatch({
    type: LOAD_MOVIE,
    payload: {
      loading: true,
      movie: {},
    },
  });
  try {
    const data = await (await fetch(`${API_URL}/?${API_KEY}&i=${id}`)).json();
    console.log(data);
    if (data.Response === 'True') {
      dispatch({
        type: GET_MOVIE,
        payload: {
          actors: data.Actors,
          awards: data.Awards,
          boxOffice: data.BoxOffice,
          country: data.Country,
          director: data.Director,
          genre: data.Genre,
          plot: data.Plot,
          poster: data.Poster,
          production: data.Production,
          rated: data.Rated,
          ratings: data.ratings,
          released: data.Released,
          runtime: calcRuntime(data.Runtime),
          title: data.Title,
          type: data.type,
          writer: data.Writer,
          year: data.Year,
          id: data.imdbID,
          imdbRating: data.imdbRating,
        },
      });
    } else {
      dispatch({
        type: MOVIE_ERROR,
        payload: {
          error: data.Error,
        },
      });
    }
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
    });
  }
};

export const clearMovie = () => {
  return {
    type: CLEAR_MOVIE,
    payload: {
      movie: {},
    },
  };
};
