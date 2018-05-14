import React from 'react';

const ColorPicker = ({color, changeColor, colorsOptions}) => {
  return (
    <div className='unicorn__color-list'>
      {
        colorsOptions.map( color => (
           <div
             key={color}
             className={`unicorn__color unicorn__color-${color}`}
             onClick={() => changeColor(color, true)}>
             { color }
           </div>
        ))
      }
    </div>
  )
}

export default ColorPicker;
