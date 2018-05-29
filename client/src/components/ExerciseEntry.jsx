import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import $ from 'jquery';
// This holds a single exercise, along with all the videoLink to that exercise's instructional video.

var ExerciseEntry = ({name, description, id, reps, repInfo, misc, editing, videoLink,
  handleAddExercise, handleRemoveExercise, handleEditExercise,
  handleChangeExerciseOrder, handleUpdateExercise}) => (editing
  ?
  <div className='exercise-entry'>
    <div className='editing-exercise-edit-controls'>

      <form id='updateEx' className='editing-exercise-details' onSubmit={(e) => {
        e.preventDefault();
        let res = e.target;
        let reps = res.reps.value.split('');
        let repInfo = reps.slice(0, reps.length);
        var i = 0;
        while (typeof reps[i] * 1 === 'number' || reps[i] === ' ') {
          repInfo.splice(0, 1);
          i++;
        }
        reps = reps.slice(0, i).join(''); repInfo = repInfo.join('');
        handleUpdateExercise(id, res.name.value, reps,
          '', res.description.value, res.misc.value);
      }}>
        <div>
          <div>
            <input type='text' name='name' placeholder={name}></input><span> Name</span>
          </div>
          <div>
            <input type='text' name='reps' placeholder={reps}></input><span> Reps</span>
          </div>
          <div>
            <input type='text' name='description' placeholder={description}></input><span> Description</span>
          </div>
          <div>
            <input type='text' name='misc' placeholder={misc}></input><span> Notes</span>
          </div>
        </div>
        <div>
          <button onClick={() => handleChangeExerciseOrder(id, 1)}>↑</button>
          <button onClick={() => handleChangeExerciseOrder(id, -1)}>↓</button>
        </div>
        <div>
          <button>
            Add Media
          </button>
          <input form='updateEx' type='submit' onClick={(e) => {
          }} value='Done'>
          </input>
          <button onClick={(e) => {
            handleEditExercise(id, false);
          }}>Cancel
          </button>
          <button onClick={(e) => {
            handleRemoveExercise(id);
          }}>
            Remove
          </button>

        </div>
      </form>

    </div>
  </div>

  :

  <div className='exercise-entry'>
    <div className='exercise-entry-name'>

      <video className='exercise-media'
        width='170' height='180'
        controls controlsList='nodownload'
        autoPlay loop muted
        src={videoLink}
        type='video/mp4'
      >
      </video>

      <div className='exercise-details'>
        <span>{name}{name ? ' - ' : ''}</span>
        <small>{reps}{!repInfo ? ' - ' : ' '}</small>
        <small>{description}</small><br></br>
        <small>{misc}</small>
      </div>
    </div>
    <div className='exercise-entry-controls'>
      <div className='order'>
        <button onClick={() => handleChangeExerciseOrder(id, 1)}>↑</button>
        <button onClick={() => handleChangeExerciseOrder(id, -1)}>↓</button>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleChangeExerciseOrder(id, 1, e.target.children[0].value - 1);
        }}
        >
        </form>
      </div>
      <div>
        <div className='add-media'>
          <button onClick={() => {
            $('.add-media input').css('display', 'flex');
            $('.add-media button').css('display', 'none');
          }}>
            Add Media
          </button>
          <form onSubmit={(e) => {
            e.preventDefault();
            $('.add-media input').css('display', 'none');
            $('.add-media button').css('display', 'flex');
            $('.exercise-media').css('display', 'block');
            console.log('target', e.target.mediaLink.value);
            handleUpdateExercise(id, null, null, '', null,
              null, e.target.mediaLink.value);
          }}>
            <input name='mediaLink' placeholder='Add media'>
            </input>
          </form>
        </div>
        <button onClick={() => handleEditExercise(id, !editing)}>
          Edit
        </button>
        <button onClick={() => handleRemoveExercise(id)}>
          Remove
        </button>
      </div>
    </div>
  </div>
);

// ExerciseEntry.propTypes = {
//   name: React.PropTypes.array.isRequired
// };

export default ExerciseEntry;




// <input type='text' name='repInfo' placeholder={repInfo}></input><span> Rep Details</span>
// <input type='submit' value='Go'>
// </input>
