import React from 'react';

var OptionsEntry = ({optionsTarget, optionsTotal, handleOptionsClick}) =>(
  <div className='options-entry'>

    <div>
      <button
        onClick={() =>
          handleOptionsClick(optionsTarget, -1)}
      >-</button>
      <button
        onClick={() =>
          handleOptionsClick(optionsTarget, +1)}
      >+</button>
    </div>

    <div>
      <span>
        {optionsTotal}{' '}
      </span>
      <span>
        {optionsTarget}
      </span>
    </div>

  </div>
);

export default OptionsEntry;
