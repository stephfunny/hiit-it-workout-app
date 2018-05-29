import React, { Component } from 'react';
import $ from 'jquery';
// import ReactModal from 'react-modal';

var WorkoutName = ({
  handleReset, handleSave}) => {
  return (
    <div className='save-workout'>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target.workoutName.value);
        $('.save-workout').css('display', 'none');
      }}>
        <input name='workoutName' placeholder='Add Name'>
        </input>
        <button type='submit'>Submit
        </button>
        <button onClick={() => {
          $('.save-workout').css('display', 'none');
        }}>Cancel
        </button>
      </form>
    </div>
  );
};

export default WorkoutName;
// <form onSubmit={(e) => {
//   e.preventDefault();
//   console.log(e.target.children[0].value);
// }}>
//   <input type='text' placeholder={props.workoutName}>
//   </input>
//   <input type='submit' value='Save this workout!'>
//   </input>
// </form>

// <div id='menu-form' onChange={(e) => {
//   var selected = $('.menu-options').val();
//   switch (selected) {
//   case 'save':
//     console.log(1, selected);
//     return;
//   case 'reset':
//     console.log(2, selected);
//     return;
//   default:
//     console.log(3, selected);
//     return;
//   }
// }}>
//   <div form='menu-form' className='menu-options'>
//     <div value="reset">Reset Workout</div>
//     <div value="save">Save Workout</div>
//   </div>
// </div>
