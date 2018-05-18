import React from 'react';
// import { Link } from 'react-router-dom'


class ExercisePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfExercises: 4,
      cycles: 2,
    };
  }
  render() {
    return (
      <div className='exercise-panel-wrapper'>
        <div className='exercise-panel'>
          <div>Squats</div>
          <div>Squats</div>
          <div>Squats</div>
          <div>Squats</div>
        </div>

        <div className='exercise-panel'>
          <div>Lunges</div>
          <div>Lunges</div>
          <div>Lunges</div>
          <div>Lunges</div>
        </div>
      </div>


    );
  }
}

export default ExercisePanel;
