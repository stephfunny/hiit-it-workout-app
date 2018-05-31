import { connect } from 'react-redux';
import WorkoutName from './../components/WorkoutName.jsx';
import changeOptions from './../actions/changeOptions.js';
import showMenu from './../actions/showMenu.js';
import saveWorkout from './../actions/saveWorkout.js';

var mapStateToProps = (state) => ({
  workoutName: state.workoutName
});

var mapDispatchToProps = (dispatch) => ({
  handleSave: (workoutName) => {
    dispatch(saveWorkout(workoutName));
  }
});

var WorkoutNameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutName);

export default WorkoutNameContainer;
