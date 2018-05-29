import React from 'react';
import ExerciseEntry from './ExerciseEntry.jsx';
import $ from 'jquery';
import Columns from 'react-columns';
import newEx from '../data/newEx.js';

var ExerciseList = ({exercises, options, videoLink,
  handleInput, handleAddExercise, handleRemoveExercise, handleEditExercise,
  handleChangeExerciseOrder, handleUpdateExercise}) => {
  if (options.exercises > exercises.length) {
    handleAddExercise('Add New');
  } else if (options.exercises < exercises.length) {
    handleRemoveExercise(exercises.length - 1);
  }
  return (
    !exercises
      ? (<div>Wait...</div>)
      :
      (<div>
        <Columns columns={options.circuits} className='exercise-list'>
          {
            exercises
              .map((exercise, index) => (
                <ExerciseEntry
                  id={index}
                  name={exercise.name}
                  description={exercise.description}
                  reps={exercise.reps}
                  repInfo={exercise.repInfo}
                  misc={exercise.misc}
                  videoLink={exercise.videoLink}
                  editing={exercise.editing}
                  handleAddExercise={handleAddExercise}
                  handleRemoveExercise={handleRemoveExercise}
                  handleChangeExerciseOrder={handleChangeExerciseOrder}
                  handleEditExercise={handleEditExercise}
                  handleUpdateExercise={handleUpdateExercise}
                />
              ))
          }
        </Columns>
        <br></br>

        <div>
          <form
            id='form-1'
            className='form-class'
            onSubmit={(e) => {
              e.preventDefault();
              var res = e.target.children;
              handleAddExercise(res[1].value, res[2].value, res[3].value, res[4].value, res[5].value);
              $('#name').val('');
              $('#description').val('');
              $('#reps').val('');
              $('#repsInfo').val('');
              $('#misc').val('');
            }}
          >
            <label>
              Enter new:
            </label>
            <input
              type='text' placeholder='Exercise Name' id='name'>
            </input>
            <input
              type='text' placeholder='Description' id='description'>
            </input>
            <input
              type='text' placeholder='Reps' id='reps'>
            </input>
            <input
              type='text' placeholder='Rep Info' id='repsInfo'>
            </input>
            <input
              type='text' placeholder='Misc' id='misc'>
            </input>
            <br></br>
            <input
              type='submit'
              value='submit'
            >
            </input>
          </form>
        </div>

      </div>)
  );

};

// ExerciseList.propTypes = {
//   exercises: React.PropTypes.array.isRequired
// };

export default ExerciseList;
