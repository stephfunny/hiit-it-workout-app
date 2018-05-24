import Redux from 'redux';

var exercisesReducer = (state = [], {type, name, description, reps, repInfo, misc, id}) => {
  var newState = state.slice(0, state.length);

  switch (type) {

  case 'ADD_EX':
    // console.log('AD_EX reducer', newState);
    newState.push({
      name: name,
      description: description,
      reps: reps,
      repInfo: repInfo,
      misc: misc,
    });
    console.log('case', newState);
    return newState;

  case 'REMOVE_EX':
    newState.splice(id, 1);
    return newState;

  case 'EDIT_EX':
    newState.splice(id, 1, {
      name: name,
      description: description,
      reps: reps,
      repInfo: repInfo,
      misc: misc,
    });
    
    return newState;

  default:
    return state;
  }
};

export default exercisesReducer;

/*exercises*/
// state = [
//   {
//   id: 0,
//   name: 'jump squats',
//   reps: 15,
//   repInfo: null,
//   description: null,
//   }
// ]
