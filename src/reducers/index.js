import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import movieReducer from './movieReducer';

const reducers = combineReducers({
  home: homeReducer,
  movie: movieReducer,
});

export default reducers;
