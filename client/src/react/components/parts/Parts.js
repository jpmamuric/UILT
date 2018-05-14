import React from 'react';

const Parts = ({ parts }) => (
  <div className='unicorn__parts-list'>
    { parts.hair ? <div className='unicorn__parts unicorn__parts-hair'>hair</div> : null }
    { parts.tail ? <div  className='unicorn__parts unicorn__parts-tail'>tail</div> : null }
    { parts.hooves ? <div className='unicorn__parts unicorn__parts-hooves' >hooves</div> : null }
    { parts.horn ? <div className='unicorn__parts unicorn__parts-horn'/> : null }
  </div>
)
export default Parts;
