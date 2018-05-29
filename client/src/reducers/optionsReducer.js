import Redux from 'redux';

var optionsReducer = (state = {}, {type, optionsTarget, optionsOperation, desiredNumber}) => {

  switch (type) {

  case 'CHANGE_OPTION':
    var newState = Object.assign({}, state);
    newState[optionsTarget] = desiredNumber ||
    Math.max(0, newState[optionsTarget] + optionsOperation * 1);
    console.log(newState);
    return newState;

  default:
    return state;
  }
};

export default optionsReducer;

/*old selectedOptions*/
// state = {
//   exercises: 8,
//   circuits: 2, // circuits will split exercises
//   cycles: 2, // will multiply all exercises & circuits
// };

// keys = ['exercises', 'circuits', 'cycles'];
