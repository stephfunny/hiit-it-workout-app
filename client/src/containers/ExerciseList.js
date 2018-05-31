import { connect } from 'react-redux';
import ExerciseList from './../components/ExerciseList.jsx';
import addEx from './../actions/addEx.js';
import editEx from './../actions/editEx.js';
import removeEx from './../actions/removeEx.js';
import changeExOrder from './../actions/changeExOrder.js';
import changeOptions from './../actions/changeOptions.js';
import updateEx from './../actions/updateEx.js';

var mapStateToProps = (state) => ({
  exercises: state.exercises,
  options: state.options,
  name: state.name,
});

var mapDispatchToProps = (dispatch) => ({
  handleAddExercise: (name, desc, reps, misc) => {
    // console.log('dispatch add');
    dispatch(addEx(name, desc, reps, misc));
  },
  handleRemoveExercise: (id) => {
    dispatch(removeEx(id));
    dispatch(changeOptions('exercises', -1));
  },
  handleEditExercise: (id, boolean) => {
    dispatch(editEx(id, boolean));
  },
  handleChangeExerciseOrder: (id, operation, desired) => {
    dispatch(changeExOrder(id, operation, desired));
  },
  handleUpdateExercise: (id, name, desc, reps, misc, mediaLink) => {
    dispatch(updateEx(id, name, desc, reps, misc, mediaLink));
    dispatch(editEx(id, false));
  },
  changeExList: (arr) => {
    dispatch(changeExList(arr));
  },

});

var ExerciseListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseList);

export default ExerciseListContainer;
