import { connect } from 'react-redux';
import OptionsList from './../components/OptionsList.jsx';
import changeOptions from './../actions/changeOptions.js';

// var mapStateToProps = (state) => {
//   return {
//     optionsList: state.optionsList
//   };
// };
// var mapDispatchToProps = (dispatch) => ({
//   handleOptionsClick: (optionsTarget, operation) => {
//     dispatch(changeOptions(optionsTarget, operation));
//   }
// });

var mapStateToProps = (state) => ({
  options: state.options
});

var mapDispatchToProps = (dispatch) => ({
  handleOptionsClick: (optionsTarget, optionsOperation, desiredNumber) => {
    console.log('dispatch called');
    dispatch(changeOptions(optionsTarget, optionsOperation, desiredNumber));
  }
});

var OptionsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsList);

export default OptionsListContainer;
