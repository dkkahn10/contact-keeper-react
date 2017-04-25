import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default App;
