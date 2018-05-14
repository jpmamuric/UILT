import React from 'react';

const PartsPicker = ({ add, remove, parts }) => {
  const partOptions = [
    { label: 'Hair', type: 'hair' },
    { label: 'Tail', type: 'tail' },
    { label: 'Hooves', type: 'hooves' },
    { label: 'Horn', type: 'horn' }
  ]

  return partOptions.map( part => (
    <div key={part.label} className='parts__picker'>
      <div className='parts parts__label'>{part.label}</div>
      { !parts[part.type]
        ?  <button onClick={()=>add(part.type)} className='parts parts__btn'>Add</button>
        :  <button onClick={()=>remove(part.type)} className='parts parts__btn'>Remove</button>
      }
    </div>
  ))
}

export default PartsPicker;
