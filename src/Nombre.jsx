import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nombre.css';

function Nombre() {
  const [filtroNombre, setFiltroNombre] = useState('');
  const [profesoresList, setProfesoresList] = useState([]);
  const [filteredProfesores, setFilteredProfesores] = useState([]);

  useEffect(() => {
    // Realizar la solicitud al backend para obtener la lista completa de profesores
    fetch('http://localhost:3000/api/profesores', {
      method: 'GET',
      mode: 'cors', // Agrega esta línea
    })
      .then(response => response.json())
      .then(data => {
        setProfesoresList(data);
        setFilteredProfesores(data); // Al principio, mostrar todos los profesores
      })
      .catch(error => console.error('Error fetching profesores:', error));
  }, []);

  useEffect(() => {
    // Filtrar localmente la lista de profesores en función del filtro
    const filtroLowerCase = filtroNombre.toLowerCase();
    const filtered = profesoresList.filter((profesor) =>
      profesor.nombre_profesor.toLowerCase().includes(filtroLowerCase)
    );
    setFilteredProfesores(filtered);
  }, [filtroNombre, profesoresList]);

  return (
    <div>
      <div className="search-bar">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={filtroNombre}
            onChange={(e) => setFiltroNombre(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {filteredProfesores.length > 0 && (
        <div className="profesores-list">
          {filteredProfesores.map((profesor) => (
            <div key={profesor.id_profesor} className="profesor-card">
              <img src={profesor.imagen} alt={profesor.nombre_profesor} />
              <div className='data-profile'>
                <span> Nombre: </span>
                <Link to={`/profes/${profesor.id_profesor}`}>{profesor.nombre_profesor}</Link>
                <br />
                <a href={`mailto:${profesor.correo}`}>{profesor.correo}</a>
                <br />
                <span> Repartición: </span>
                {profesor.departamento}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Agrega esta condición */}
      {filteredProfesores.length === 0 && filtroNombre.trim() !== '' && (
        <p>No se encontraron profesores con ese nombre.</p>
      )}
    </div>
  );
}

export default Nombre;
