import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profesores from '../mocks/profesores'; // Ajusta la ruta según la ubicación real del archivo de mocks
import './Nombre.css';

function Nombre() {
  const [filtroNombre, setFiltroNombre] = useState('');
  const [profesoresList, setProfesoresList] = useState([]);

  useEffect(() => {
    // Filtra la lista de profesores solo si hay un filtro
    if (filtroNombre.trim() !== '') {
      const profesoresFiltrados = profesores.filter((profesor) =>
        profesor.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
      );
      setProfesoresList(profesoresFiltrados);
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
            <div key={profesor.id} className="profesor-card">
              <img src={`./../mocks/images/${profesor.imagen}`} alt={profesor.nombre} />
              <div className='data-profile'>
                <span> Nombre: </span>
                <Link to={`/profes/${profesor.id}`}>{profesor.nombre}</Link>
                <br />
                <a href={`mailto:${profesor.correo}`}>{profesor.correo}</a>
                <br />
                <span> Repartición: </span>
                {profesor.reparticion}
              </div>
            </div>
          ))}
        </div>
      )}


    </div>
  );
}

export default Nombre;
