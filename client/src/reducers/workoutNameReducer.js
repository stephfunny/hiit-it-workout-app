import Redux from 'redux';

var workoutNameReducer = (state = '', {type, name}) => {

  switch (type) {
  case 'SAVE_WORKOUT':
    return name;
    
  case 'ADD_WORKOUT_NAME':
    // var newState = state;
    return workoutName;

  default:
    return state;
  }
};

export default workoutNameReducer;
