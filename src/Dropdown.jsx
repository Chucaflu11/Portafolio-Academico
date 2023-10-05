import React from 'react';

import './Dropdown.css';

function Dropdown({ data, selectedValue, onChange, label }) {
  // Buscar el objeto correspondiente al valor seleccionado
  const selectedItem = data.find((item) => item.value === selectedValue);
  // Obtener el nombre del objeto (si existe)
  const selectedName = selectedItem ? selectedItem.label : '';

  // Llamar a la función onChange con el valor seleccionado y el nombre
  const handleOnChange = (value) => {
    const selectedLabel = data.find((item) => item.value === value)?.label || '';
    onChange(value, selectedLabel);
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
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
