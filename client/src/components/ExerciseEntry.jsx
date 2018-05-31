import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import $ from 'jquery';
// This holds a single exercise, along with all the mediaLink to that exercise's instructional video.

var ExerciseEntry = ({name, description, id, reps, misc, editing, mediaLink,
  handleAddExercise, handleRemoveExercise, handleEditExercise,
  handleChangeExerciseOrder, handleUpdateExercise}) => (editing
  ?
  <div className='editing-exercise-entry'>


    <div className='editing-exercise-entry-details'>

      <form id='updateEx' onSubmit={(e) => {
        e.preventDefault();
        console.log('updateEx submitted');
        let res = e.target;
        handleUpdateExercise(id, res.name.value, res.reps.value,
          res.description.value, res.misc.value, res.mediaLink.value);
        if (res.mediaLink.value) {
          console.log('this', this);
        }
      }}>
        <span> Name</span>
        <input form='updateEx' type='text' name='name' defaultValue={name}></input>
        <span> Reps</span>
        <input form='updateEx' type='text' name='reps' defaultValue={reps}></input>
        <span> Description</span>
        <input form='updateEx' type='text' name='description' defaultValue={description}></input>
        <span> Notes</span>
        <input form='updateEx' type='text' name='misc' defaultValue={misc}></input>
        <span> Add Media</span>
        <input form='updateEx' type='text' name='mediaLink' defaultValue={mediaLink}></input>
      </form>

    </div>

    <div className='exercise-entry-controls'>
      <div>
        <button onClick={() => handleChangeExerciseOrder(id, 1)}>↑</button>
        <button onClick={() => handleChangeExerciseOrder(id, -1)}>↓</button>
      </div>
      <div>
        <input form='updateEx' type='submit' value='Done'></input>
        <button onClick={(e) => { handleEditExercise(id, false); }}>
          Cancel</button>
        <button onClick={(e) => { handleRemoveExercise(id); }}>
          Remove</button>
      </div>
    </div>


  </div>

  :

  <div className='exercise-entry'>

    <div className='ex-entry-media-card'>
      {mediaLink
        ?
        (
          (['mp4'].includes(mediaLink.slice(mediaLink.length - 3, mediaLink.length)))
            ?
            <div className='media-container'>
              <video id='myVid'
                height='240' width='240'
                controls controlsList='nodownload'
                autoPlay loop muted
                src={mediaLink}
                type='video/mp4'
              ></video>
            </div>
            :
            <img src={mediaLink}
              width='170' max-height='180'
            >
            </img>
        )
        :
        (null)
      }

      <div className='exercise-entry-details'>
        <div>
          <span>{reps}{reps ? ' - ' : ' '}</span>
          {name}{name ? ' - ' : ''}
        </div>
        <div>
          <small>{description}</small>
          <small>{misc}</small>
        </div>
      </div>
    </div>

    <div className='exercise-entry-controls'>
      <div className='exercise-entry-controls-order'>
        <button onClick={() => handleChangeExerciseOrder(id, 1)}>↑</button>
        <button onClick={() => handleChangeExerciseOrder(id, -1)}>↓</button>
      </div>

      <div className='exercise-entry-controls-edit'>
        <button onClick={() => handleEditExercise(id, !editing)}>
          Edit</button>
        <button onClick={() => handleRemoveExercise(id)}>
          Remove</button>
      </div>
    </div>

  </div>
);

// ExerciseEntry.propTypes = {
//   name: React.PropTypes.array.isRequired
// };

export default ExerciseEntry;



// <div className='add-media'>
//   <button onClick={() => {
//       $('.add-media input').css('display', 'flex');
//       $('.add-media button').css('display', 'none');
//     }}>
//     Add Media
//   </button>
//   <form onSubmit={(e) => {
//       e.preventDefault();
//       $('.add-media input').css('display', 'none');
//       $('.add-media button').css('display', 'flex');
//       $('.exercise-entry-media').css('display', 'block');
//       console.log('target', e.target.mediaLink.value);
//       handleUpdateExercise(id, null, null, '', null,
//       null, e.target.mediaLink.value);
//     }}>
//     <input name='mediaLink' defaultValue='Add media'>
//     </input>
//   </form>
// </div>


// <form id='changeOrderForm' onSubmit={(e) => {
//     e.preventDefault();
//     handleChangeExerciseOrder(id, 1, e.target.children[0].value - 1);
//   }}
//   >
// </form>
