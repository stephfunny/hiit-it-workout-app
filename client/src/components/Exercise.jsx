import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

// This holds a single exercise, along with all the link to that exercise's instructional video.

class Exercise extends Component {

  render(){
    return (
      <div className='exercise-card'>
        <h3>{this.props.exercise.name}</h3>
        <p>Reps: {this.props.exercise.reps}</p>
        <p>Sets: {this.props.exercise.sets}</p>
        <button id='save' onClick={() => {
          this.props.selectExerciseById(this.props.exercise.id)
          this.props.setSource("exercise")
        }}>
        </button>
      </div>
    )
  }
}

export default Exercise






// <Link to={`/instructions/${this.props.exercise.id}`} >Instructions</Link>
