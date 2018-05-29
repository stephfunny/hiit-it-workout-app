import React from 'react';
import ReactDOM from 'react-dom';
import '../../dist/stylesheets/styles.scss';
import $ from 'jquery';
import defaultExercises from '../data/defaultExerciseList.js';

import NavBar from './NavBar.jsx';
import Button from './Button.jsx';
import OptionsListContainer from '../containers/OptionsList.js';
import ExerciseListContainer from '../containers/ExerciseList.js';
import WorkoutNameContainer from '../containers/WorkoutName.js';
import Timer from './Timer.jsx';
import Logo from './Logo.jsx';
import store from '../store/store.js';
import changeOptions from '../actions/changeOptions.js';
import changeExList from '../actions/changeExList.js';
import addEx from '../actions/addEx.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log(defaultExercises);
  }
  componentWillMount() {
    store.dispatch(changeOptions('exercises', -1, 8));
    store.dispatch(changeOptions('circuits', -1, 2));
    store.dispatch(changeOptions('cycles', -1, 2));
    // defaultExercises.forEach((x) => (
    //   store.dispatch(addEx(x.name, x.description, x.reps, x.repInfo, x.misc))
    // ));
    store.dispatch(changeExList(defaultExercises));
  }

  render() {
    return (
      <div>

        <div>
          <NavBar />
        </div>
        <div className='col-right'>
          <OptionsListContainer />
        </div>
        <br></br>
        <div className='col-md ex-list-wrap'>
          <ExerciseListContainer />
        </div>

      </div>
    );
  }
}


// <div><WorkoutNameContainer /></div>
// <div><Timer /></div>
