import React, { Component } from 'react';
import { connect } from 'react-redux';

import Landing from '../components/Landing';

class Home extends Component {
  renderContent() {
    switch(this.props.user) {
      case null:
        return <div> Loading ... </div>
      case false:
        return this.renderAuth(process.env.NODE_ENV)
      default:
        return <Landing user={this.props.user}/>
    }
  }

  renderAuth(env){
    let link;

    if (env === 'development') {
      link = <a href="http://localhost:5000/auth/google">Sign in with Google</a>
    } else {
      link = <a href="https://uilt.herokuapp.com/auth/google">Sign in with Google</a>
    }

    return link;
  }

  render() {
    return (
      <div className='home__container'>
        { this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { user: auth.user };
}

export default connect(mapStateToProps)(Home);
