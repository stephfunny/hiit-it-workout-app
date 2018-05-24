import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

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
          Saved Workouts
        </div>

        <div className='hvr-line'>Reset</div>
        <div className='hvr-line'>Save</div>
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
