// import React from 'react';
// import ReactDOM from 'react-dom';

const Button = props =>
  (<div className='timer-button'>
    <button onClick={props.handleClick}>{props.action}
    </button>
  </div>
  );

export default Button;
