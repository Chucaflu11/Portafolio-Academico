import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nombre.css';

function Nombre() {
  const [filtroNombre, setFiltroNombre] = useState('');
  const [profesoresList, setProfesoresList] = useState([]);

  useEffect(() => {
    // Filtrar la lista de profesores solo si hay un filtro
    if (filtroNombre.trim() !== '') {
      // Realizar la solicitud al backend para obtener la lista de profesores
      fetch(`http://localhost:3000/api/profesores?nombre=${filtroNombre}`, {
        method: 'GET',
        mode: 'cors', // Agrega esta línea
      })
        .then(response => response.json())
        .then(data => setProfesoresList(data))
        .catch(error => console.error('Error fetching profesores:', error));
    } else {
      // Si no hay filtro, no mostrar ningún profesor
      setProfesoresList([]);
    }
  }, [filtroNombre]);

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

      {profesoresList.length > 0 && (
        <div className="profesores-list">
          {profesoresList.map((profesor) => (
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
    </div>
  );
}

export default Nombre;
