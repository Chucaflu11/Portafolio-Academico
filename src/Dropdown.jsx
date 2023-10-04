import React from 'react';

function Dropdown({ data, selectedValue, onChange, label }) {
	return (
		<div>
			<label htmlFor="dropdown">{label}:</label>
			<select
				name="dropdown"
				id="dropdown"
				value={selectedValue}
				onChange={(e) => onChange(e.target.value)}
			>
				{data.map((item) => (
					<option key={item.value} value={item.value}>
						{item.label}
					</option>
				))}
			</select>
			<p>{label} seleccionado: {selectedValue}</p>
		</div>
	);
}

export default Dropdown;
