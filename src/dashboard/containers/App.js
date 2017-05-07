import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/dashboard.js'
import { getGiphyProfile } from '../actions/dashboard';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>Welcome Mike</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    giph: state.giph
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
