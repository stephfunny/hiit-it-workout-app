import { combineReducers } from 'redux';
import optionsReducer from './optionsReducer.js';
import exercisesReducer from './exercisesReducer.js';

var rootReducer = combineReducers({
  options: optionsReducer,
  exercises: exercisesReducer,
});

export default rootReducer;
