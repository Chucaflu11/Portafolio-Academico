import React from 'react';
import { useParams } from 'react-router-dom';
import profesoresDetalle from '../mocks/profesoresDetails';


function ProfesorDetalle() {
    const { id } = useParams();
    // Busca al profesor por su ID en la lista profesoresDetalle
    const profesor = profesoresDetalle.find((prof) => prof.id === parseInt(id));


    if (!profesor) {
        // Manejar el caso cuando no se encuentra al profesor
        return <div>Profesor no encontrado</div>;
    }

    return (
        <div>
          <h1>{profesor.nombre}</h1>
          <p>Anexo: {profesor.anexo}</p>
          <p>Correo: {profesor.correo}</p>
          <p>Categoría: {profesor.categoria}</p>
          <p>Departamento: {profesor.departamento}</p>
          <p>Facultad: {profesor.facultad}</p>
          <p>Jornada: {profesor.jornada}</p>
    
          <h2>Perfil Académico</h2>
          <ul>
            <li>Breve Cronología: {profesor.perfil_academico.breve_cronologia.join(', ')}</li>
            <li>Docencia:
              <ul>
                {profesor.perfil_academico.docencia.map((curso) => (
                  <li key={curso.curso}>{curso.curso} - {curso.rol}</li>
                ))}
              </ul>
            </li>
            <li>Coordinación: {profesor.perfil_academico.coordinacion.join(', ')}</li>
          </ul>
    
          <h2>Información Personal</h2>
          <ul>
            <li>Breve Cronología: {profesor.informacion_personal.breve_cronologia.join(', ')}</li>
            <li>Estudios:
              <ul>
                {profesor.informacion_personal.estudios.map((estudio) => (
                  <li key={estudio.titulo}>{estudio.titulo} - {estudio.institucion} ({estudio.año_obtencion})</li>
                ))}
              </ul>
            </li>
            <li>Experiencia Laboral:
              <ul>
                {profesor.informacion_personal.experiencia_laboral.map((trabajo) => (
                  <li key={trabajo.cargo}>{trabajo.cargo} - {trabajo.institucion} ({trabajo.año_inicio} - {trabajo.año_fin || 'Actualidad'})</li>
                ))}
              </ul>
            </li>
          </ul>
    
          {/* Agrega secciones similares para publicaciones, proyectos de investigación y memorias de tesis */}
        </div>
      );
    }
    
    export default ProfesorDetalle;