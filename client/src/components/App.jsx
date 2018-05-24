import React from 'react';
import ReactDOM from 'react-dom';
import '../../dist/stylesheets/styles.scss';
import $ from 'jquery';
import defaultExercises from '../data/defaultExerciseList.js';

import NavBar from './NavBar.jsx';
import Button from './Button.jsx';
import OptionsListContainer from '../containers/OptionsList.js';
import ExerciseListContainer from '../containers/ExerciseList.js';
import Timer from './Timer.jsx';
import Logo from './Logo.jsx';
import store from '../store/store.js';
import changeOptions from '../actions/changeOptions.js';
// import {addEx} from '../actions/changeExercises.js';
import addEx from '../actions/addEx.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentWillMount() {
    store.dispatch(changeOptions('exercises', -1, 4));
    store.dispatch(changeOptions('circuits', -1, 2));
    store.dispatch(changeOptions('cycles', -1, 2));
    defaultExercises.forEach((x) => (
      store.dispatch(addEx(x.name, x.description, x.reps, x.repInfo, x.misc))
      // console.log(x)
    ));
    // store.dispatch(addEx('squats', 'none', 15, 'none', null));
      // {
      //   id: 0,
      //   name: 'jump squats',
      //   reps: 15,
      //   repInfo: null,
      //   description: null,
      // }, 1
    // ));
  }

  render() {
    return (
      <div>

        <div><Logo /></div>
        <div className='col-left'>
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


// <div><Timer /></div>
// <NavBar />
// <div>
// </div>
