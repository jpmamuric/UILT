import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/unicorn_actions';
import Castle from './Castle';
import Nav from './Nav';
import UnicornBuilder from './UnicornBuilder';

const Landing = ({ readyToBuild, userReady, user }) => (
  <div className='landing'>
    { user ? <Nav /> : null }
    {
      !readyToBuild
      ? <Castle userReady={userReady} />
      : <UnicornBuilder />
    }
  </div>
);

const mapsStateToProps = ({ unicorn }) => {
  const { readyToBuild } = unicorn;
  return { readyToBuild };
}


export default connect(mapsStateToProps, actions)(Landing);
