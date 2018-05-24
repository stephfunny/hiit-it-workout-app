import React from 'react'; import ReactDOM from 'react-dom';
import OptionsEntry from './OptionsEntry';

var OptionsList = ({options, handleOptionsClick}) => (
  !options
    ? <div>Please wait...</div>
    : <div>
      {
        Object.keys(options).map((target, i, keys) => (
          <OptionsEntry
            key={i}
            optionsTarget={target}
            optionsTotal={options[target]}
            handleOptionsClick={handleOptionsClick}
          />
        ))
      }
    </div>
);

// OptionsList.propTypes = {
//   options: React.PropTypes.object.isRequired
// };

export default OptionsList;

// options: [
//   {
//     exercises: 8,
//     circuits: 2, // circuits will split exercises
//     cycles: 2, // will multiply all exercises & circuits
//   }
// ];
