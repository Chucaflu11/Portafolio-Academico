const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


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


// Ejemplo de obtener todos los profesores
app.get('/profesores', (req, res) => {
    connection.query('SELECT * FROM Profesores.profesor', (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(results);
      }
    });
  });

// Ejemplo de obtener profesor por ID
app.get('/profesores/:id', (req, res) => {
    const profesorId = req.params.id;
    connection.query('SELECT * FROM Profesor WHERE ID_Profesor = ?', [profesorId], (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(results[0]);
      }
    });
  });
  
  