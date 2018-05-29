import { combineReducers } from 'redux';
import optionsReducer from './optionsReducer.js';
import exercisesReducer from './exercisesReducer.js';
import workoutNameReducer from './workoutNameReducer.js';

var rootReducer = combineReducers({
  options: optionsReducer,
  exercises: exercisesReducer,
  name: workoutNameReducer,
});

export default rootReducer;
