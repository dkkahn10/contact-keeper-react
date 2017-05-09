import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGiphyProfile } from '../actions/dashboard';

class App extends Component {
  componentDidMount(){
    this.props.getGiphyProfile()
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>Welcome Mike</h2>
          <img src={this.props.gif} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  debugger;
  return {
    gif: state.giph.giph
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGiphyProfile: () => {
      dispatch(getGiphyProfile())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
