const express = require('express');
const cors = require('cors'); // Agrega la importación de cors

const app = express();
const PORT = process.env.PORT || 3000;

// Agrega cors como middleware antes de las rutas
app.use(cors());

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'Profesores',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Ruta para obtener la lista de profesores con datos asociados
app.get('/api/profesores', (req, res) => {
  const sql =
    'SELECT DISTINCT Profesor.id_profesor, Profesor.nombre_profesor, Profesor.cargo_actual, Profesor.correo, Profesor.telefono, ' +
    'Profesor.linea_investigacion, Profesor.departamento, Profesor.facultad, Profesor.imagen, Profesor.categoria, ' +
    'Proyectos.id_proyecto, Proyectos.nombre_proyecto, Proyectos.desc_proyecto, Proyectos.tipo, ' +
    'Publicaciones.id_publicacion, Publicaciones.titulo_publicacion, Publicaciones.Fecha_publicacion, ' +
    'Publicaciones.Revista_publicacion, Publicaciones.DOI, Publicaciones.Autores, ' +
    'Grados.nombre_grado, ' +
    'Titulos.nombre_titulo, ' +
    'Asignaturas_actuales.nombre_asignatura ' +
    'FROM Profesor ' +
    'LEFT JOIN Proyectos ON Profesor.id_profesor = Proyectos.id_profesor ' +
    'LEFT JOIN Publicaciones ON Profesor.id_profesor = Publicaciones.id_profesor ' +
    'LEFT JOIN Grados ON Profesor.id_profesor = Grados.id_profesor ' +
    'LEFT JOIN Titulos ON Profesor.id_profesor = Titulos.id_profesor ' +
    'LEFT JOIN Asignaturas_actuales ON Profesor.id_profesor = Asignaturas_actuales.id_profesor';


  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const profesores = {};

    // Organizar los resultados en una estructura de profesores
    results.forEach((row) => {
      if (!profesores[row.id_profesor]) {
        profesores[row.id_profesor] = {
          id_profesor: row.id_profesor,
          nombre_profesor: row.nombre_profesor,
          cargo_actual: row.cargo_actual,
          correo: row.correo,
          telefono: row.telefono,
          linea_investigacion: row.linea_investigacion,
          departamento: row.departamento,
          facultad: row.facultad,
          imagen: row.imagen,
          categoria: row.categoria,
          proyectos: [],
          publicaciones: [],
          grados: [],
          titulos: [],
          asignaturas_actuales: [],
        };
      }

      // Añadir datos asociados
      if (row.id_proyecto && !profesores[row.id_profesor].proyectos.find(p => p.id_proyecto === row.id_proyecto)) {
        profesores[row.id_profesor].proyectos.push({
          id_proyecto: row.id_proyecto,
          nombre_proyecto: row.nombre_proyecto,
          desc_proyecto: row.desc_proyecto,
          tipo: row.tipo,
        });
      }

      if (row.id_publicacion && !profesores[row.id_profesor].publicaciones.find(p => p.id_publicacion === row.id_publicacion)) {
        profesores[row.id_profesor].publicaciones.push({
          id_publicacion: row.id_publicacion,
          titulo_publicacion: row.titulo_publicacion,
          Fecha_publicacion: row.Fecha_publicacion,
          Revista_publicacion: row.Revista_publicacion,
          DOI: row.DOI,
          Autores: row.Autores,
        });
      }

      if (row.nombre_grado && !profesores[row.id_profesor].grados.find(g => g.nombre_grado === row.nombre_grado)) {
        profesores[row.id_profesor].grados.push({ nombre_grado: row.nombre_grado });
      }

      if (row.nombre_titulo && !profesores[row.id_profesor].titulos.find(t => t.nombre_titulo === row.nombre_titulo)) {
        profesores[row.id_profesor].titulos.push({ nombre_titulo: row.nombre_titulo });
      }

      if (row.nombre_asignatura && !profesores[row.id_profesor].asignaturas_actuales.find(a => a.nombre_asignatura === row.nombre_asignatura)) {
        profesores[row.id_profesor].asignaturas_actuales.push({ nombre_asignatura: row.nombre_asignatura });
      }
    });

    res.json(Object.values(profesores)); // Convertir el objeto a un array antes de enviar la respuesta
  });
});

app.get('/api/facultades-departamentos', (req, res) => {
  const sql = 'SELECT DISTINCT facultad, departamento FROM Profesor';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const uniqueFacultades = [...new Set(results.map(result => result.facultad))];
    const uniqueDepartamentos = [...new Set(results.map(result => result.departamento))];

    res.json({ facultades: uniqueFacultades, departamentos: uniqueDepartamentos });
  });
});

// Ruta para obtener detalles de un profesor específico por ID
app.get('/api/profesores/:id', (req, res) => {
  const profesorId = req.params.id;

  const sql =
    'SELECT Profesor.*, Proyectos.*, Publicaciones.*, Grados.nombre_grado, Titulos.nombre_titulo, Asignaturas_actuales.nombre_asignatura ' +
    'FROM Profesor ' +
    'LEFT JOIN Proyectos ON Profesor.id_profesor = Proyectos.id_profesor ' +
    'LEFT JOIN Publicaciones ON Profesor.id_profesor = Publicaciones.id_profesor ' +
    'LEFT JOIN Grados ON Profesor.id_profesor = Grados.id_profesor ' +
    'LEFT JOIN Titulos ON Profesor.id_profesor = Titulos.id_profesor ' +
    'LEFT JOIN Asignaturas_actuales ON Profesor.id_profesor = Asignaturas_actuales.id_profesor ' +
    'WHERE Profesor.id_profesor = ?';

  connection.query(sql, [profesorId], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const profesor = {
      id_profesor: results[0].id_profesor,
      nombre_profesor: results[0].nombre_profesor,
      cargo_actual: results[0].cargo_actual,
      correo: results[0].correo,
      telefono: results[0].telefono,
      linea_investigacion: results[0].linea_investigacion,
      departamento: results[0].departamento,
      facultad: results[0].facultad,
      imagen: results[0].imagen,
      categoria: results[0].categoria,
      proyectos: [],
      publicaciones: [],
      grados: [],
      titulos: [],
      asignaturas_actuales: [],
    };

    // Organizar los resultados en una estructura de profesor
    results.forEach((row) => {
      // Añadir datos asociados sin repetir
      if (row.id_proyecto && !profesor.proyectos.find(p => p.id_proyecto === row.id_proyecto)) {
        profesor.proyectos.push({
          id_proyecto: row.id_proyecto,
          nombre_proyecto: row.nombre_proyecto,
          desc_proyecto: row.desc_proyecto,
          tipo: row.tipo,
        });
      }

      if (row.id_publicacion && !profesor.publicaciones.find(p => p.id_publicacion === row.id_publicacion)) {
        profesor.publicaciones.push({
          id_publicacion: row.id_publicacion,
          titulo_publicacion: row.titulo_publicacion,
          Fecha_publicacion: row.Fecha_publicacion,
          Revista_publicacion: row.Revista_publicacion,
          DOI: row.DOI,
          Autores: row.Autores,
        });
      }

      if (row.nombre_grado && !profesor.grados.find(g => g.nombre_grado === row.nombre_grado)) {
        profesor.grados.push({ nombre_grado: row.nombre_grado });
      }

      if (row.nombre_titulo && !profesor.titulos.find(t => t.nombre_titulo === row.nombre_titulo)) {
        profesor.titulos.push({ nombre_titulo: row.nombre_titulo });
      }

      if (row.nombre_asignatura && !profesor.asignaturas_actuales.find(a => a.nombre_asignatura === row.nombre_asignatura)) {
        profesor.asignaturas_actuales.push({ nombre_asignatura: row.nombre_asignatura });
      }
    });

    res.json(profesor);
  });
});

// Ruta para obtener la lista de líneas de investigación
app.get('/api/linea-investigacion', (req, res) => {
  const sql = 'SELECT DISTINCT linea_investigacion FROM Profesor WHERE linea_investigacion IS NOT NULL';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const lineasInvestigacion = results.map(result => result.linea_investigacion);
    res.json(lineasInvestigacion);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


