import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';
import WorkoutName from './WorkoutName.jsx';
import $ from 'jquery';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // timeActive: this.props.timeActive,
    };
  }
  render() {
    return (
      <div className='nav-bar'>
        <div className='hvr-line'>
          Home
        </div>
        <div className='hvr-line'>
          Reset
        </div>
        <div className=''><Logo /></div>


        <div className='hvr-line'>Saved</div>
        <div className='' >
          <span onClick={() => {
            $('.save-workout').css('display', 'block');
          }}
          >Save
          </span>
          <WorkoutName/>
        </div>
      </div>
    );
  }
}

export default NavBar;


// <li><NavLink exact to='/login' onClick={() => props.logout()}>LOGOUT</NavLink></li>



// <div className='logo'/>
// {props.auth ? (
//   <nav>
//     <NavLink exact to='/'><div className="name"></div></NavLink>
//     <ul>
//       <li>
//         <NavLink exact to='/'>HOME</NavLink>
//       </li>
//       <li><NavLink exact to='/profile' >PROFILE</NavLink></li>
//     </ul>
//   </nav>
// ) : (
//   <nav>
//     <NavLink exact to='/'><div className="name"></div></NavLink>
//     <ul>
//       <li>
//         <NavLink exact to='/' activeClassName='active'>
//           HOME
//         </NavLink>
//       </li>
//       <li><NavLink exact to='/login'>LOGIN</NavLink></li>
//       <li><NavLink exact to='/register'>REGISTER</NavLink></li>
//     </ul>
//   </nav>
// )}
