import React from 'react';

import './Dropdown.css';

function Dropdown({ data, selectedValue, onChange, label }) {
  // Llamar a la función onChange con el valor seleccionado y el nombre
  const handleOnChange = (value) => {
    // No necesitas buscar el nombre aquí, ya que el valor es el mismo
    onChange(value);
  };

  return (
    <div className='input'>
      <label htmlFor="dropdown">{label}</label>
      <select
        name="dropdown"
        id="dropdown"
        value={selectedValue}
        onChange={(e) => handleOnChange(e.target.value)}
      >
        {data.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;