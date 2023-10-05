import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import profesoresDetalle from '../mocks/profesoresDetails';

import './ProfesorDetalle.css';


function ProfesorDetalle() {
    const { id } = useParams();
    // Busca al profesor por su ID en la lista profesoresDetalle
    const profesor = profesoresDetalle.find((prof) => prof.id === parseInt(id));


    if (!profesor) {
        // Manejar el caso cuando no se encuentra al profesor
        return <div>Profesor no encontrado</div>;
    }


  const [botonSeleccionado, setBotonSeleccionado] = useState('Perfil Académico');
    const handleButtonClick = (nombreBoton) => {
      setBotonSeleccionado(nombreBoton);
    };

    const PerfilAcademico = () => (
      <div className="contenido-perfil-academico">
        {/* Contenido para 'Perfil Académico' */}
        <h2> Breve Cronología Académica</h2>
        <ul className='breve-cronologia'>
          {profesor.perfil_academico.breve_cronologia.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2> Docencia </h2>
        <ul className='docencia'>
          {profesor.perfil_academico.docencia.map((curso) => (
            <li key={curso.curso}>{curso.curso} - {curso.rol}</li>
          ))}
        </ul>
        <h2> Coordinación </h2>
        <ul className='coordinacion'>
          {profesor.perfil_academico.coordinacion.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
    );

  const InformacionPersonal = () => (
      <div className="contenido-informacion-personal">
        {/* Contenido para 'Información Personal' */}
        <h2> Títulos o grado académico</h2>
        <table className='Table'>
  <thead>
    <tr>
      <th>Grado / Título</th>
      <th>Institución</th>
      <th>Fecha</th>
    </tr>
  </thead>
  <tbody>
    {profesor.informacion_personal.estudios.map((estudio, index) => (
      <tr key={index}>
        <td>{estudio.grado}</td>
        <td>{estudio.institucion}</td>
        <td>{estudio.fecha}</td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    );

  const Docencia = () => (
      <div className="contenido-docencia">
        {/* Contenido para 'Docencia' */}
        <p>Información específica de Docencia</p>
      </div>
    );

    const Publicaciones = () => (
      <div className="contenido-publicaciones">
        {/* Contenido para 'Publicaciones' */}
        <p>Información específica de Publicaciones</p>
        <table className='Table Publicaciones'>
          <thead>
            <tr>
              {Object.keys(profesor.publicaciones[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {profesor.publicaciones.map((publicacion, index) => (
              <tr key={index}>
                {Object.entries(publicacion).map(([key, value], index) => (
                  <td key={index}>
                    {key === "Digital object identifier" ? (
                      <a href={value} target="_blank" rel="noopener noreferrer">
                        Ver
                      </a>
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    

  const ProyectosDeInvestigacion = () => (
      <div className="contenido-proyectos-de-investigacion">
        {/* Contenido para 'Proyectos de Investigación' */}
        <p>Información específica de Proyectos de Investigación</p>
      </div>
    );

  const MemoriasDeTesis = () => (
      <div className="contenido-memorias-de-tesis">
        {/* Contenido para 'Memorias de Tesis' */}
        <p>Información específica de Memorias de Tesis</p>
      </div>
    );



    return (
        <section className='main'>
          <div className="div">
          <div className='container'>
           <div className="resume">
            <img src={`./../mocks/images/${profesor.imagen}`} alt={profesor.nombre} />
            <div className="text">
              <h1 aria-label='name'>{profesor.nombre}</h1>
              <div className="contacts">
                <p aria-label='anexo'>Anexo: {profesor.anexo}</p>
                <a href={`mailto:${profesor.correo}`} aria-label='email'>{profesor.correo}</a>
              </div>
              <div className="otros-detalles">
                <p aria-label='Categoria'>{profesor.categoria}</p>
                <p aria-label='Departamento'> {profesor.departamento}</p>
                <p aria-label='Facultad'> {profesor.facultad}</p>
                <p aria-label='Jornada'> {profesor.jornada}</p>
              </div>
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
                className={botonSeleccionado === 'Docencia' ? 'seleccionado' : ''}
                onClick={() => handleButtonClick('Docencia')}
              >
                Docencia
              </button>
              <button
                className={botonSeleccionado === 'Publicaciones' ? 'seleccionado' : ''}
                onClick={() => handleButtonClick('Publicaciones')}
              >
                Publicaciones
              </button>
              <button
                className={botonSeleccionado === 'Proyectos de Investigación' ? 'seleccionado' : ''}
                onClick={() => handleButtonClick('Proyectos de Investigación')}
              >
                Proyectos de Investigación
              </button>
              <button
                className={botonSeleccionado === 'Memorias de Tesis' ? 'seleccionado' : ''}
                onClick={() => handleButtonClick('Memorias de Tesis')}
              >
                Memorias de Tesis
              </button>
            </div>
        </div>
          

          {botonSeleccionado === 'Perfil Académico' && <PerfilAcademico />}
          {botonSeleccionado === 'Información Personal' && <InformacionPersonal />}
          {botonSeleccionado === 'Docencia' && <Docencia />}
          {botonSeleccionado === 'Publicaciones' && <Publicaciones />}
          {botonSeleccionado === 'Proyectos de Investigación' && <ProyectosDeInvestigacion />}
          {botonSeleccionado === 'Memorias de Tesis' && <MemoriasDeTesis />}
        </div>
        </section>
      );
    }
    
    export default ProfesorDetalle;