import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer.jsx';
import { NavLink } from 'react-router-dom';

class StartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='start-button'>
        <button onClick={this.props.handleStartClick}>Start!
        </button>
      </div>
    );
  }
}

export default StartButton;
