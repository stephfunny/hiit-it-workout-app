import React from 'react';
import moment from 'moment';
import Button from './Button.jsx';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopTime: null,
      currentCycleTime: this.props.currentCycleTime,
      // currentCycleTime: 10000,
      timeRemaining: this.props.currentCycleTime,
      // timeRemaining: 10000,
      timeActive: false,
    };
    this.updateTimer = this.updateTimer.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  componentDidMount() {
    // console.log('did mount:', this.state);
  }
  componentWillUnmount() {
    // console.log('unmount:', this.state);
    // clearInterval(this.timerID);

  }
  handleClick() {
    if (!this.state.timeActive) {
      this.handleStartClick();
    } else {
      this.setState({
        timeActive: false,
      });
      clearInterval(this.timerID);
    }
  }
  handleStartClick() {
    // $('.card').addClass(['is-flipped']);
    var stopTime = 1000 + moment().add(Math.floor(this.state.timeRemaining / 1000), 's');
    this.setState({
      timeActive: true,
      stopTime: stopTime,
    });
    this.timerID = setInterval(this.updateTimer, 1000);
  }
  handleResetClick() {
    this.setState({
      timeRemaining: this.state.selectCycleTime,
      timeActive: false,
    });
    clearInterval(this.timerID);
  }
  updateTimer() {
    var timeLeft = this.state.stopTime - moment();
    if (timeLeft - 1000 <= 0) {
      clearInterval(this.timerID);
      console.log('YOU FINISHED!');
      this.props.shiftTimeArray();
      if (this.state.timeActive) {
        this.setState({

        })
      }
    }
    this.setState({
      timeRemaining: timeLeft
    });
  }

  render() {
    // console.log('render:', this.state);
    var time = this.state.timeRemaining / 1000;
    return (
      <div>

        <div className='timer'>
          <img src='https://i.imgur.com/dhvV7vw.png' alt='stopwatch timer'>
          </img>
          <div className='time-countdown'>
            {Math.max(Math.floor(time / 60), 0)}:
            {String(Math.max(Math.floor((time % 60)), 0)).padStart(2, 0)}
          </div>
        </div>

        <div className='timer-controls'>
          <Button
            action={this.state.timeActive ? 'Pause' : 'Start'}
            handleClick={this.handleStartClick}
          />
          <Button
            action={'Reset'}
            handleClick={this.handleResetClick}
          />
        </div>
      </div>
    );
  }
}

export default Timer;
