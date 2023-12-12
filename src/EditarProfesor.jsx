import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './EditarProfesor.css';

function EditarProfesor() {
  const { id } = useParams();
  const history = useNavigate();

  const [profesor, setProfesor] = useState({
    id_profesor: id,
    nombre_profesor: "",
    cargo_actual: "",
    correo: "",
    telefono: "",
    linea_investigacion: "",
    departamento: "",
    facultad: "",
    categoria: "",
    imagen: null,
    proyectos: [],
    publicaciones: [],
    grados: [],
    titulos: [],
    asignaturas_actuales: [],
  });

  useEffect(() => {
    // Obtener la información del profesor desde el backend usando el ID
    fetch(`http://localhost:3000/api/profesores/${id}`)
      .then(response => response.json())
      .then(data => setProfesor(data))
      .catch(error => console.error('Error fetching profesor:', error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfesor(prevProfesor => ({ ...prevProfesor, [name]: value }));
  };

  const handleProyectoChange = (index, field, value) => {
    const proyectosActualizados = [...profesor.proyectos];
    proyectosActualizados[index][field] = value;
    setProfesor(prevProfesor => ({ ...prevProfesor, proyectos: proyectosActualizados }));
  };
  
  const handleAgregarProyecto = () => {
    const nuevoProyecto = {
      id_proyecto: profesor.proyectos.length + 1,
      nombre_proyecto: "",
      desc_proyecto: "",
      tipo: "",
    };
    setProfesor(prevProfesor => ({ ...prevProfesor, proyectos: [...prevProfesor.proyectos, nuevoProyecto] }));
  };
  
  const handlePublicacionChange = (index, field, value) => {
    const publicacionesActualizadas = [...profesor.publicaciones];
    publicacionesActualizadas[index][field] = value;
    setProfesor(prevProfesor => ({ ...prevProfesor, publicaciones: publicacionesActualizadas }));
  };
  
  const handleAgregarPublicacion = () => {
    const nuevaPublicacion = {
      id_publicacion: profesor.publicaciones.length + 1,
      titulo_publicacion: "",
      Fecha_publicacion: "",
      Revista_publicacion: "",
      DOI: "",
      Autores: "",
    };
    setProfesor(prevProfesor => ({ ...prevProfesor, publicaciones: [...prevProfesor.publicaciones, nuevaPublicacion] }));
  };
  
  const handleGradoChange = (index, value) => {
    const gradosActualizados = [...profesor.grados];
    gradosActualizados[index].nombre_grado = value;
    setProfesor(prevProfesor => ({ ...prevProfesor, grados: gradosActualizados }));
  };
  
  const handleAgregarGrado = () => {
    const nuevoGrado = {
      nombre_grado: "",
    };
    setProfesor(prevProfesor => ({ ...prevProfesor, grados: [...prevProfesor.grados, nuevoGrado] }));
  };
  
  const handleTituloChange = (index, value) => {
    const titulosActualizados = [...profesor.titulos];
    titulosActualizados[index].nombre_titulo = value;
    setProfesor(prevProfesor => ({ ...prevProfesor, titulos: titulosActualizados }));
  };
  
  const handleAgregarTitulo = () => {
    const nuevoTitulo = {
      nombre_titulo: "",
    };
    setProfesor(prevProfesor => ({ ...prevProfesor, titulos: [...prevProfesor.titulos, nuevoTitulo] }));
  };
  
  const handleAsignaturaChange = (index, value) => {
    const asignaturasActualizadas = [...profesor.asignaturas_actuales];
    asignaturasActualizadas[index].nombre_asignatura = value;
    setProfesor(prevProfesor => ({ ...prevProfesor, asignaturas_actuales: asignaturasActualizadas }));
  };
  
  const handleAgregarAsignatura = () => {
    const nuevaAsignatura = {
      nombre_asignatura: "",
    };
    setProfesor(prevProfesor => ({ ...prevProfesor, asignaturas_actuales: [...prevProfesor.asignaturas_actuales, nuevaAsignatura] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar la solicitud al backend para actualizar la información del profesor
    fetch(`http://localhost:3000/api/profesores/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profesor),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Profesor actualizado:', data);
        // Redirigir a la página de detalles del profesor después de la actualización
        history.push(`/profes/${id}`);
      })
      .catch(error => console.error('Error updating profesor:', error));
  };

  return (
    <div className="Formulario-editar">
      <h2>Editar Profesor</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre_profesor">Nombre:</label>
            <input
                type="text"
                id="nombre_profesor"
                name="nombre_profesor"
                value={profesor.nombre_profesor}
                onChange={handleInputChange}
            />

            <label htmlFor="cargo_actual">Cargo Actual:</label>
            <input
                type="text"
                id="cargo_actual"
                name="cargo_actual"
                value={profesor.cargo_actual}
                onChange={handleInputChange}
            />

            <label htmlFor="correo">Correo:</label>
            <input
                type="email"
                id="correo"
                name="correo"
                value={profesor.correo}
                onChange={handleInputChange}
            />

            <label htmlFor="telefono">Teléfono:</label>
            <input
                type="text"
                id="telefono"
                name="telefono"
                value={profesor.telefono}
                onChange={handleInputChange}
            />

            <label htmlFor="linea_investigacion">Línea de Investigación:</label>
            <input
                type="text"
                id="linea_investigacion"
                name="linea_investigacion"
                value={profesor.linea_investigacion}
                onChange={handleInputChange}
            />

            <label htmlFor="departamento">Departamento:</label>
            <input
                type="text"
                id="departamento"
                name="departamento"
                value={profesor.departamento}
                onChange={handleInputChange}
            />

            <label htmlFor="facultad">Facultad:</label>
            <input
                type="text"
                id="facultad"
                name="facultad"
                value={profesor.facultad}
                onChange={handleInputChange}
            />

            <label htmlFor="categoria">Categoría:</label>
            <input
                type="text"
                id="categoria"
                name="categoria"
                value={profesor.categoria}
                onChange={handleInputChange}
            /> 

            <label htmlFor="imagen">Imagen:</label>
            <input
                type="file"
                id="imagen"
                name="imagen"
                value={profesor.imagen}
                onChange={handleInputChange}
            />

            <label htmlFor="imagen">Imagen:</label>
            <input
            type="text"
            id="imagen"
            name="imagen"
            value={profesor.imagen}
            onChange={handleInputChange}
            />

            <label htmlFor="proyectos">Proyectos:</label>
            {/* Puedes manejar los proyectos como una lista y agregar o eliminar proyectos según sea necesario */}
            <ul>
            {profesor.proyectos.map((proyecto, index) => (
                <li key={index}>
                <label htmlFor={`proyecto${index}`}>Nombre del Proyecto:</label>
                <input
                    type="text"
                    id={`proyecto${index}`}
                    name={`proyecto${index}`}
                    value={proyecto.nombre_proyecto}
                    onChange={(e) => handleProyectoChange(e, index)}
                />

                <label htmlFor={`desc_proyecto${index}`}>Descripción del Proyecto:</label>
                <input
                    type="text"
                    id={`desc_proyecto${index}`}
                    name={`desc_proyecto${index}`}
                    value={proyecto.desc_proyecto}
                    onChange={(e) => handleProyectoChange(e, index)}
                />

                {/* Puedes agregar más campos para cada proyecto */}
                </li>
            ))}
            </ul>
            <button type="button" onClick={handleAgregarProyecto}>
            Agregar Proyecto
            </button>

            <label htmlFor="publicaciones">Publicaciones:</label>
            {/* Manejar las publicaciones de manera similar a los proyectos */}
            <ul>
            {profesor.publicaciones.map((publicacion, index) => (
                <li key={index}>
                <label htmlFor={`titulo_publicacion${index}`}>Título de la Publicación:</label>
                <input
                    type="text"
                    id={`titulo_publicacion${index}`}
                    name={`titulo_publicacion${index}`}
                    value={publicacion.titulo_publicacion}
                    onChange={(e) => handlePublicacionChange(e, index)}
                />

                {/* Agregar más campos para cada publicación */}
                </li>
            ))}
            </ul>
            <button type="button" onClick={handleAgregarPublicacion}>
            Agregar Publicación
            </button>

            <label htmlFor="grados">Grados:</label>
            {/* Manejar los grados de manera similar a proyectos y publicaciones */}
            <ul>
            {profesor.grados.map((grado, index) => (
                <li key={index}>
                <label htmlFor={`nombre_grado${index}`}>Nombre del Grado:</label>
                <input
                    type="text"
                    id={`nombre_grado${index}`}
                    name={`nombre_grado${index}`}
                    value={grado.nombre_grado}
                    onChange={(e) => handleGradoChange(e, index)}
                />

                {/* Agregar más campos para cada grado */}
                </li>
            ))}
            </ul>
            <button type="button" onClick={handleAgregarGrado}>
            Agregar Grado
            </button>

            <label htmlFor="titulos">Títulos:</label>
            {/* Manejar los títulos de manera similar a proyectos, publicaciones y grados */}
            <ul>
            {profesor.titulos.map((titulo, index) => (
                <li key={index}>
                <label htmlFor={`nombre_titulo${index}`}>Nombre del Título:</label>
                <input
                    type="text"
                    id={`nombre_titulo${index}`}
                    name={`nombre_titulo${index}`}
                    value={titulo.nombre_titulo}
                    onChange={(e) => handleTituloChange(e, index)}
                />

                {/* Agregar más campos para cada título */}
                </li>
            ))}
            </ul>
            <button type="button" onClick={handleAgregarTitulo}>
            Agregar Título
            </button>

            <label htmlFor="asignaturas_actuales">Asignaturas Actuales:</label>
            {/* Manejar las asignaturas actuales de manera similar a proyectos, publicaciones, grados y títulos */}
            <ul>
            {profesor.asignaturas_actuales.map((asignatura, index) => (
                <li key={index}>
                <label htmlFor={`nombre_asignatura${index}`}>Nombre de la Asignatura:</label>
                <input
                    type="text"
                    id={`nombre_asignatura${index}`}
                    name={`nombre_asignatura${index}`}
                    value={asignatura.nombre_asignatura}
                    onChange={(e) => handleAsignaturaChange(e, index)}
                />

                {/* Agregar más campos para cada asignatura actual */}
                </li>
            ))}
            </ul>
            <button type="button" onClick={handleAgregarAsignatura}>
            Agregar Asignatura Actual
            </button>

            <button type="submit">Guardar cambios</button>
        </form>

    </div>
  );
};

export default EditarProfesor;
