import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

// This holds a single exercise, along with all the link to that exercise's instructional video.

var ExerciseEntry = ({name, description, id, reps, repInfo, misc,
  handleAddExercise, handleRemoveExercise, handleEditExercise}) => (
  <div className='exercise-entry'>
    <div className='exercise-entry-name'>
      <span>
        {name} : {reps} {repInfo}
      </span>
      <br></br>
      <small>
        {description}
      </small>
    </div>
    <div>
      <button>
        Add
      </button>
      <button onClick={handleEditExercise}>
        Edit
      </button>
      <button onClick={handleRemoveExercise}>
        Remove
      </button>

    </div>
  </div>
);

// ExerciseEntry.propTypes = {
//   name: React.PropTypes.array.isRequired
// };

export default ExerciseEntry;
