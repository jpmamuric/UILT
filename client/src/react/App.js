import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../redux/actions/auth_actions';
import Home from './pages/Home';

class App extends Component {
  componentDidMount(){
      this.props.getUser();
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact component={Home} />
      </div>
    );
  }
}

export default connect(null, actions)(App);
