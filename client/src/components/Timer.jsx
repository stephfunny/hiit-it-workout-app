import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // time: 2,
    };
  }
  render() {
    return (
      <div className='timer-wrapper'>
        <img className='timer' src='https://i.imgur.com/dhvV7vw.png'>
        </img>
        7:00
      </div>


    );
  }
}

export default Timer;
