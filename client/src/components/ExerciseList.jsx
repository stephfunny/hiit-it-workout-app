import React from 'react';
import ExerciseEntry from './ExerciseEntry.jsx';
import $ from 'jquery';

var ExerciseList = ({exercises, handleInput, handleAddExercise, handleRemoveExercise}) => (

  !exercises
    ? <div>Wait...</div>
    :
    <div>
      <div className='exercise-list'>
        {
          exercises.map((exercise, index) => (
            <ExerciseEntry
              id={index}
              name={exercise.name}
              description={exercise.description}
              reps={exercise.reps}
              repInfo={exercise.repInfo}
              misc={exercise.misc}
              handleAddExercise={handleAddExercise}
              handleRemoveExercise={handleRemoveExercise}
            />
          ))
        }
      </div>
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

    </div>

);

// ExerciseList.propTypes = {
//   exercises: React.PropTypes.array.isRequired
// };

export default ExerciseList;
