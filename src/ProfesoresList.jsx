import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profesores from '../mocks/profesores';
import departamentosPorUnidadAcademica from '../mocks/departamentosPorUnidadAcademica';

import './ProfesoresList.css';

function ProfesoresList({ nameUnit, selectedUnit, selectedDepartment }) {
	const [filteredProfesores, setFilteredProfesores] = useState([]);
	const [selectedLetter, setSelectedLetter] = useState(null);






	function puedeFiltrar(letra) {


		const departamento = departamentosPorUnidadAcademica[selectedUnit].find(
			(dep) => dep.value === selectedDepartment
		);
		const filtered = profesores.filter((profesor) =>
			departamento.profesores.includes(profesor.id)

		);
		filtered.forEach(profesor => {
			let primerApe = (formatearNombreCompleto(profesor.nombre).split(' ')[0]);
			profesor.reparticion = convertirNombre(nameUnit);
			profesor.apellido = primerApe;
		});
		const filtrado = filtered.filter((profesor) => profesor.apellido[0] === letra.toUpperCase());
		// Ternario para returnar true si filtered es distinto de 0

		return filtrado.length !== 0 ? true : false;

	}
	useEffect(() => {
		if (selectedUnit === 'todas' || selectedDepartment === 'todas') {
			setFilteredProfesores(profesores);
		} else {
			const departamento = departamentosPorUnidadAcademica[selectedUnit].find(
				(dep) => dep.value === selectedDepartment
			);
			const filtered = profesores.filter((profesor) =>
				departamento.profesores.includes(profesor.id)
			);
			setFilteredProfesores(filtered);
		}
	}, [selectedUnit, selectedDepartment]);

	filteredProfesores.forEach(profesor => {
		// profesor.nombre = formatearNombreCompleto(profesor.nombre);
		// Agregar un atributo que se llame Reparticion y su valor es el nombre de la unidad académica
		let primerApe = (formatearNombreCompleto(profesor.nombre).split(' ')[0]);
		profesor.reparticion = convertirNombre(nameUnit);
		profesor.apellido = primerApe;
		// Crear un atributo que se llame apellido y sea el primero de name
	});



	function convertirNombre(nameUnit) {
		const palabras = nameUnit.split(' ');

		const palabrasMayusculas = palabras.filter(palabra => palabra[0] === palabra[0].toUpperCase());

		if (palabrasMayusculas.length >= 3) {
			const primeraMayuscula = palabrasMayusculas[0][0] + '.';
			const segundaMayuscula = palabrasMayusculas[1][0] + palabrasMayusculas[1][palabrasMayusculas[1].length - 1];
			const terceraMayuscula = palabrasMayusculas[2][0] + palabrasMayusculas[2][palabrasMayusculas[2].length - 1];

			return `${primeraMayuscula} ${segundaMayuscula} ${terceraMayuscula}`;
		} else if (palabrasMayusculas.length === 2) {
			const primeraMayuscula = palabrasMayusculas[0][0] + '.';
			const segundaMayuscula = palabrasMayusculas[1];

			return `${primeraMayuscula} ${segundaMayuscula}`;
		} else {
			// Tratar el caso de menos de dos palabras en mayúsculas si es necesario
			return nameUnit; // Por ahora, devuelve el nombre original
		}
	}

	function formatearNombreCompleto(nombreCompleto) {
		const nombresApellidos = nombreCompleto.split(' ');
		const cantidadNombresApellidos = nombresApellidos.length;

		if (cantidadNombresApellidos >= 2) {
			const apellidos = nombresApellidos.slice(-2).join(' ');
			const nombres = nombresApellidos.slice(0, -2).join(' ');

			return `${apellidos}, ${nombres}`;
		} else {
			// Tratar el caso de menos de dos partes en el nombre si es necesario
			return nombreCompleto; // Por ahora, devuelve el nombre original
		}
	}

	const alfabeto = Array.from(Array(26), (_, index) => String.fromCharCode('A'.charCodeAt(0) + index));

	function handleLetterClick(letter, target) {
		if (target.classList.contains('letra-inactivo')) return;

		// Desseleccionar la letra previamente seleccionada
		const selectedLetters = document.querySelectorAll('.letra-seleccionado');
		selectedLetters.forEach((selected) => {
			selected.classList.remove('letra-seleccionado');
		});

		// Seleccionar la nueva letra
		setSelectedLetter(letter);
		target.classList.add('letra-seleccionado');

		// Obtener los profesores sin filtrar
		let profesoresSinFiltrar = [];
		if (selectedUnit === 'todas' || selectedDepartment === 'todas') {
			profesoresSinFiltrar = profesores;
		} else {
			const departamento = departamentosPorUnidadAcademica[selectedUnit].find(
				(dep) => dep.value === selectedDepartment
			);
			profesoresSinFiltrar = profesores.filter((profesor) =>
				departamento.profesores.includes(profesor.id)
			);
		}

		// Filtrar los profesores por la letra seleccionada
		if (letter === 'Todos') {
			setFilteredProfesores(profesoresSinFiltrar);
		} else {
			const filtered = profesoresSinFiltrar.filter((profesor) => profesor.apellido[0] === letter.toUpperCase());
			setFilteredProfesores(filtered);
		}
	}





	return (
		<div>
			<div className="results">
				<h2> Resultados de búsqueda</h2>
				<p>Su búsqueda de académicos arrojó {filteredProfesores.length} resultados organizados alfabéticamente por apellido</p>

				<div className="letras-alfabeto">
					<span
						className={`letra ${selectedLetter === '' ? 'letra-activo letra-seleccionado' : 'letra-activo'}`}
						onClick={() => handleLetterClick('Todos', event.target)}
					>
						Todos
					</span>

					{alfabeto.map(letra => (
						<span
							key={letra}
							className={puedeFiltrar(letra) ? 'letra-activo' : 'letra-inactivo'}
							onClick={(event) => handleLetterClick(letra, event.target)}
						>
							{letra}
						</span>
					))}
				</div>




			</div>
			<div className="profesores-list">
				{filteredProfesores.map((profesor) => (
					<div key={profesor.id} className="profesor-card">
						<img src={`./../mocks/images/${profesor.imagen}`} alt={profesor.nombre} />
						<div className='data-profile'>
							<Link to={`/profes/${profesor.id}`}>
								{formatearNombreCompleto(profesor.nombre)}
							</Link>
							<br />
							<span> Correo: </span>
							<a href={`mailto:${profesor.correo}`}>{profesor.correo}</a>
							<br />
							<span> Repartición: </span>
							{profesor.reparticion}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ProfesoresList;
