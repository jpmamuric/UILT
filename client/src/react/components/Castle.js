import React from 'react';

import castle from '../../assets/img/castle.png';

const Castle = ({ userReady }) => (
  <img src={castle} alt='castle' className="landing__castle" onClick={userReady}/>
)

export default Castle;
