import { connect } from 'react-redux';
import App from './../components/App.jsx';

var mapStateToProps = (state) => ({
  options: state.options
});

var mapDispatchToProps = (dispatch) => ({});

var OptionsListContainer = connect(
  mapStateToProps
)(App);

export default App;
