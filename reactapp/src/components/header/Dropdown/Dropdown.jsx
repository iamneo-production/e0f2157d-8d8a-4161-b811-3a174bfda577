import React, { useState } from 'react';

const Dropdown = ({onChange, roomType}) => {


  return (
    <select
      value={roomType}
      onChange={onChange}
      style={{
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '0px solid rgba(252,0,0,1)',
        color: 'grey'
      }}
    >
      <option value="">Roomtype</option>
      <option value="SingleRoom">Single Room</option>
      <option value="DoubleRoom">Double Room</option>
      <option value="DeluxeRoom">Deluxe Room</option>
      <option value="TwinRoom">Twin Room</option>
      <option value="SuiteRoom">Suite Room</option>
    </select>
  );
};

export default Dropdown;
