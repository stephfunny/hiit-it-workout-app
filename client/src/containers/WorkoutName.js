import { connect } from 'react-redux';
import WorkoutName from './../components/WorkoutName.jsx';
import changeOptions from './../actions/changeOptions.js';
import showMenu from './../actions/showMenu.js';

var mapStateToProps = (state) => ({
  workoutName: state.workoutName,
  showMenu: state.showMenu
});

var mapDispatchToProps = (dispatch) => ({
  handleShowMenu: (boolean) => {
    dispatch(showMenu(boolean));
  },
  handleSave: (workoutName) => {
    dispatch(saveWorkout(workoutName));
  },
  handleReset: (workoutName) => {
    dispatch(handleReset(workoutName));
  },
  updateWorkoutName: (workoutName) => {
    dispatch(updateWorkoutName(workoutName));
  }
});

var WorkoutNameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutName);

export default WorkoutNameContainer;
