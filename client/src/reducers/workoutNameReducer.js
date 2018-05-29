import Redux from 'redux';

var workoutNameReducer = (state = '', {type, workoutName}) => {

  switch (type) {

  case 'ADD_WORKOUT_NAME':
    // var newState = state;
    return workoutName;

  default:
    return state;
  }
};

export default workoutNameReducer;
