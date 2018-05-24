import React from 'react';

var OptionsEntry = ({optionsTarget, optionsTotal, handleOptionsClick}) =>(
  <div>

    <span>
      {optionsTotal}
    </span>

    <button
      onClick={() =>
        handleOptionsClick(optionsTarget, -1)}
    >-</button>

    <button
      onClick={() =>
        handleOptionsClick(optionsTarget, +1)}
    >+</button>

    <span>
      {optionsTarget}
    </span>

  </div>
);

export default OptionsEntry;
