import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './ProfesorDetalle.css';
import EditarProfesor from './EditarProfesor';

function ProfesorDetalle() {
  const { id } = useParams();
  const [profesor, setProfesor] = useState(null);
  const [botonSeleccionado, setBotonSeleccionado] = useState('Perfil Académico');

  useEffect(() => {
    // Hacer la petición para obtener los detalles del profesor específico
    fetch(`http://localhost:3000/api/profesores/${id}`)
      .then(response => response.json())
      .then(data => {
        setProfesor(data);
      })
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!profesor) {
    // Mientras se carga la información, puedes mostrar un indicador de carga
    return <div>Cargando información del profesor...</div>;
  }

  const handleButtonClick = (nombreBoton) => {
    setBotonSeleccionado(nombreBoton);
  };

  const PerfilAcademico = () => (
    <div className="contenido-perfil-academico">
      <h2>Grados académicos</h2>
      {profesor.grados && (
        <ul className='grados-academicos'>
          {profesor.grados.map((grado, index) => (
            <li key={index}>📖{grado.nombre_grado}</li>
          ))}
        </ul>
      )}
      <h2>Asignaturas dictadas</h2>
      {profesor.asignaturas_actuales && (
        <ul className='asignaturas-dictadas'>
          {profesor.asignaturas_actuales.map((asignatura, index) => (
            <li key={index}>🌐{asignatura.nombre_asignatura}</li>
          ))}
        </ul>
      )}
    </div>
  );
  
  const InformacionPersonal = () => (
    <div className="contenido-informacion-personal">
      <h2>Títulos o Grados Académicos</h2>
      <table className='Table'>
        <thead>
          <tr>
            <th>Grado / Título</th>
            <th>Institución</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {profesor.grados && profesor.grados.map((grado, index) => (
            <tr key={index}>
              <td>{grado.nombre_grado}</td>
              {/* Asumiendo que hay un solo valor en la lista de instituciones y fechas */}
              <td>{grado.institucion}</td>
              <td>{grado.fecha}</td>
            </tr>
          ))}
          {profesor.titulos && profesor.titulos.map((titulo, index) => (
            <tr key={index}>
              <td>{titulo.nombre_titulo}</td>
              {/* Asumiendo que hay un solo valor en la lista de instituciones y fechas */}
              <td>{titulo.institucion}</td>
              <td>{titulo.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  const Publicaciones = () => (
    <div className="contenido-publicaciones">
      <p>Información específica de Publicaciones</p>
      <table className='Table Publicaciones'>
        <thead>
          <tr>
            <th>Título</th>
            <th>Fecha de Publicación</th>
            <th>Revista</th>
            <th>DOI</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {profesor.publicaciones && profesor.publicaciones.map((publicacion, index) => (
            <tr key={index}>
              <td>{publicacion.titulo_publicacion}</td>
              <td>{publicacion.Fecha_publicacion}</td>
              <td>{publicacion.Revista_publicacion}</td>
              <td>
                <a href={publicacion.DOI} target="_blank" rel="noopener noreferrer">
                  Ver
                </a>
              </td>
              <td>{publicacion.Autores}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section className='main'>
      <div className="div">
        <div className='container'>
          <div className="resume">
            <img src={profesor.imagen} alt={profesor.nombre_profesor} />
            <div className="text">
              <h1 aria-label='name'>{profesor.nombre_profesor}</h1>
              <div className="contacts">
                <p aria-label='anexo'>Anexo: {profesor.telefono}</p>
                <a href={`mailto:${profesor.correo}`} aria-label='email'>{profesor.correo}</a>
              </div>
              <div className="otros-detalles">
                <p aria-label='Categoria'>{profesor.categoria}</p>
                <p aria-label='Departamento'>Departamento de {profesor.departamento}</p>
                <p aria-label='Facultad'>Facultad de {profesor.facultad}</p>
                <p aria-label='Linea de investigación'>Linea de investigación: {profesor.linea_investigacion}</p>
              </div>
            </div>
            <div className="edit-button">
              <button
                className={botonSeleccionado === 'Editar' ? 'seleccionado' : ''}
                onClick={() => handleButtonClick('Editar')}
              >
                🖋️
              </button>
            </div>
          </div>
          <div className="buttons">
            <button
              className={botonSeleccionado === 'Perfil Académico' ? 'seleccionado' : ''}
              onClick={() => handleButtonClick('Perfil Académico')}
            >
              Perfil Académico
            </button>
            <button
              className={botonSeleccionado === 'Información Personal' ? 'seleccionado' : ''}
              onClick={() => handleButtonClick('Información Personal')}
            >
              Información Personal
            </button>
            <button
              className={botonSeleccionado === 'Publicaciones' ? 'seleccionado' : ''}
              onClick={() => handleButtonClick('Publicaciones')}
            >
              Publicaciones
            </button>
          </div>
        </div>

        {botonSeleccionado === 'Perfil Académico' && <PerfilAcademico />}
        {botonSeleccionado === 'Información Personal' && <InformacionPersonal />}
        {botonSeleccionado === 'Publicaciones' && <Publicaciones />}
        {botonSeleccionado === 'Editar' && <EditarProfesor />}
      </div>
    </section>
  );
}

export default ProfesorDetalle;