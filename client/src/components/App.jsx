import React from 'react';
import ReactDOM from 'react-dom';
import '../../dist/stylesheets/styles.scss';
import $ from 'jquery';

import ExercisePanel from './ExercisePanel.jsx';
import NavBar from './NavBar.jsx';
import StartButton from './StartButton.jsx';
// import Login from './Login.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showTimer: false,
    };
  this.handleStartClick = this.handleStartClick.bind(this);
  }

//   componentDidMount() {
//     this.getBookingInfo(this.state.listingId);
//   }

  handleStartClick() {
    this.setState({
      showTimer: true
    });

    $(".logo").addClass(["flip", 'front']);
    $(".timer-wrapper").addClass(['back']);
    console.log('start clicked');
  }

//   getBookingInfo() {
//     $.ajax({
//       method: 'GET',
//       url: `http://127.0.0.1:3003/rooms/api/${this.props.listingId}/bookings`,
//       success: (data) => {
//         console.log('Ajax success!');
//         let dates = data.available_days.map( x => new Date(x));
//         data.available_days = dates;
//         this.setState({
//           listingInfo: data
//         });
//       },
//       error: (err) => {
//         console.log('Ajax error!', err);
//       }
//     });
//   }

  render() {
    return (

      <div>
        <div>
          <NavBar
            showTimer={this.state.showTimer}
            auth={false}
          />
        </div>
        <div>
          <ExercisePanel />
        </div>

        <div>
          <StartButton handleStartClick={this.handleStartClick}/>
        </div>
      </div>

    );
  }
}

export default App;
