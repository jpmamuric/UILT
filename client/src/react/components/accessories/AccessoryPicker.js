import React from 'react';

const AccessoryPicker = ({ changeColor, add, remove, accessories }) => {
  const accessoryOptions = [
    { label: 'Bow Tie', type: 'bow tie', className: 'bowtie' },
    { label: 'Hat', type: 'hat', className: 'hat' },
    { label: 'Glasses', type: 'glasses', className: 'glasses' }
  ]

  return (
    <div>
      <div className='accessory__undo' onClick={()=>changeColor('white', false)}>
        undo color
      </div>
      <div className='accessory__list'>
        { accessoryOptions.map((accessory, i) => (
          <div key={i}>
            <button
              className="accessory__btn"
              onClick={()=>add({ id: i, type: accessory.label, className: accessory.className })}>
                add {accessory.label}
            </button>
            <button
              className="accessory__btn"
              onClick={()=>remove(i)}>
                remove {accessory.label}
            </button>
          </div>

          ))
        }
      </div>
    </div>
  )
}

export default AccessoryPicker;
