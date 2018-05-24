import { connect } from 'react-redux';
import ExerciseList from './../components/ExerciseList.jsx';
import addEx from './../actions/addEx.js';
import removeEx from './../actions/removeEx.js';
// import {addExercise, removeExercise} from './../actions/changeExercises.js';

var mapStateToProps = (state) => ({
  exercises: state.exercises
});

var mapDispatchToProps = (dispatch) => ({
  handleAddExercise: (name, desc, reps, repInfo, misc) => {
    console.log('dispatch add');
    dispatch(addEx(name, desc, reps, repInfo, misc));
  },
  handleRemoveExercise: () => {
    dispatch(removeEx());
  },
  handleEditExercise: () => {
    dispatch(editEx(name, desc, reps, repInfo, misc));
  }

});

var ExerciseListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseList);

export default ExerciseListContainer;
