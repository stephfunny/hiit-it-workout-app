import Redux from 'redux';
import newEx from '../data/newEx.js';

var exercisesReducer = (state = [], {type, name, description, reps, editing,
  repInfo, misc, id, desired, operation, exercises, videoLink}) => {
  console.log('state:', state, type);
  var newState = state.slice(0, state.length);

  switch (type) {

  case 'CHANGE_EX_LIST':
    newState = exercises;
    return newState;

  case 'ADD_EX':
    // console.log('AD_EX reducer', newState);
    newState.push({
      name: name,
      description: description,
      reps: reps,
      repInfo: repInfo,
      misc: misc,
      editing: false,
      videoLink: videoLink,
    });
    return newState;

  case 'REMOVE_EX':
    console.log('id for removal', id);
    newState.splice(id, 1);
    return newState;

  case 'EDIT_EX':
    // console.log('edit mode initiate!', newState);
    // console.log('id', newState[id]);
    newState[id].editing = editing;
    return newState;

  case 'CHANGE_EX_ORDER':
    newState.splice(id, 0,
      newState.splice(Math.min(id + -1 * operation, state.length - 1), 1)[0]);
    return newState;

  case 'UPDATE_EX':
    // var update = (field) => {
    //   if (field) {
    //     console.log('field', Object.keys({field})[0]);
    //     newState[id][Object.keys({field})[0]] = field;
    //   }
    // };
    // [name, description, reps, repInfo, misc].forEach(
    //   x => update(x));
    // [name, description, reps, repInfo, misc].forEach((field) =>
    //   field ? newState[id][field] = field : null);
    if (name) {
      newState[id].name = name;
    }
    if (description) {
      newState[id].description = description;
    }
    if (reps) {
      newState[id].reps = reps;
    }
    if (repInfo) {
      newState[id].repInfo = repInfo;
    }
    if (misc) {
      newState[id].misc = misc;
    }
    if (videoLink) {
      newState[id].videoLink = videoLink;
    }
    return newState;

  default:
    return state;
  }
};

export default exercisesReducer;
