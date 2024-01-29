CREATE DATABASE IF NOT EXISTS Profesores;
USE Profesores;

CREATE TABLE IF NOT EXISTS Profesor (
    id_profesor INT PRIMARY KEY,
    nombre_profesor VARCHAR(255),
    cargo_actual VARCHAR(255),
    correo VARCHAR(255),
    telefono VARCHAR(15),
    linea_investigacion VARCHAR(255),
    departamento VARCHAR(255),
    facultad VARCHAR(255),
    imagen LONGBLOB DEFAULT NULL,
    categoria VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Proyectos (
    id_proyecto INT PRIMARY KEY,
    id_profesor INT,
    nombre_proyecto VARCHAR(255),
    desc_proyecto TEXT,
    tipo VARCHAR(255),
    FOREIGN KEY (id_profesor) REFERENCES Profesor(id_profesor)
);

CREATE TABLE IF NOT EXISTS Publicaciones (
    id_publicacion INT PRIMARY KEY,
    id_profesor INT,
    titulo_publicacion VARCHAR(255),
    Fecha_publicacion DATE,
    Revista_publicacion VARCHAR(255),
    DOI VARCHAR(255),
    Autores VARCHAR(255),
    FOREIGN KEY (id_profesor) REFERENCES Profesor(id_profesor)
);

CREATE TABLE IF NOT EXISTS Grados (
    id_grado INT PRIMARY KEY,
    id_profesor INT,
    nombre_grado VARCHAR(255),
    FOREIGN KEY (id_profesor) REFERENCES Profesor(id_profesor)
);

CREATE TABLE IF NOT EXISTS Titulos (
    id_titulo INT PRIMARY KEY,
    id_profesor INT,
    nombre_titulo VARCHAR(255),
    FOREIGN KEY (id_profesor) REFERENCES Profesor(id_profesor)
);

CREATE TABLE IF NOT EXISTS Asignaturas_actuales (
    id_asignatura INT PRIMARY KEY,
    id_profesor INT,
    nombre_asignatura VARCHAR(255),
    rol VARCHAR(255),
    FOREIGN KEY (id_profesor) REFERENCES Profesor(id_profesor)
);

USE NombreDeTuBaseDeDatos;

-- Insertar datos de ejemplo para Profesor
INSERT INTO Profesor (id_profesor, nombre_profesor, cargo_actual, correo, telefono, linea_investigacion, departamento, facultad, imagen, categoria)
VALUES
(1, 'Juan Pérez', 'Profesor Asociado', 'juan.perez@email.com', '123-456-7890', 'Inteligencia Artificial', 'Departamento de Informática', 'Facultad de Ciencias', NULL, 'Categoría A'),
(2, 'María López', 'Profesor Titular', 'maria.lopez@email.com', '987-654-3210', 'Redes de Computadoras', 'Departamento de Ingeniería', 'Facultad de Ingeniería', NULL, 'Categoría B'),
(3, 'Carlos Rodríguez', 'Profesor Adjunto', 'carlos.rodriguez@email.com', '555-555-5555', 'Sistemas Embebidos', 'Departamento de Electrónica', 'Facultad de Ingeniería', NULL, 'Categoría C'),
(4, 'Ana Gómez', 'Profesor Asistente', 'ana.gomez@email.com', '111-222-3333', 'Desarrollo Web', 'Departamento de Ciencias de la Computación', 'Facultad de Ciencias', NULL, 'Categoría A'),
(5, 'David Martínez', 'Profesor Titular', 'david.martinez@email.com', '666-777-8888', 'Base de Datos', 'Departamento de Sistemas de Información', 'Facultad de Ciencias', NULL, 'Categoría B'),
(6, 'Laura Sánchez', 'Profesor Asociado', 'laura.sanchez@email.com', '999-888-7777', 'Inteligencia Artificial', 'Departamento de Informática', 'Facultad de Ciencias', NULL, 'Categoría C'),
(7, 'Pedro Hernández', 'Profesor Asistente', 'pedro.hernandez@email.com', '444-333-2222', 'Redes de Computadoras', 'Departamento de Ingeniería', 'Facultad de Ingeniería', NULL, 'Categoría A'),
(8, 'Marta Torres', 'Profesor Titular', 'marta.torres@email.com', '777-888-9999', 'Desarrollo Web', 'Departamento de Ciencias de la Computación', 'Facultad de Ciencias', NULL, 'Categoría B'),
(9, 'Alberto Vargas', 'Profesor Adjunto', 'alberto.vargas@email.com', '222-111-0000', 'Base de Datos', 'Departamento de Sistemas de Información', 'Facultad de Ciencias', NULL, 'Categoría C'),
(10, 'Elena Ramírez', 'Profesor Asociado', 'elena.ramirez@email.com', '333-444-5555', 'Sistemas Embebidos', 'Departamento de Electrónica', 'Facultad de Ingeniería', NULL, 'Categoría A');

-- Insertar datos de ejemplo para Proyectos
INSERT INTO Proyectos (id_proyecto, id_profesor, nombre_proyecto, desc_proyecto, tipo)
VALUES
(1, 1, 'Proyecto de IA Avanzada', 'Investigación en técnicas de IA avanzada', 'Investigación'),
(2, 2, 'Desarrollo de Redes 5G', 'Implementación y prueba de tecnologías 5G', 'Desarrollo'),
(3, 3, 'Sistemas Embebidos Innovadores', 'Diseño de sistemas embebidos para aplicaciones específicas', 'Investigación'),
(4, 4, 'Plataforma de Desarrollo Web', 'Creación de una plataforma web para desarrollo colaborativo', 'Desarrollo'),
(5, 5, 'Base de Datos Distribuida', 'Investigación en sistemas de bases de datos distribuidas', 'Investigación'),
(6, 6, 'Asistente Virtual Avanzado', 'Desarrollo de un asistente virtual con IA avanzada', 'Desarrollo'),
(7, 7, 'Seguridad en Redes', 'Investigación en técnicas avanzadas de seguridad en redes', 'Investigación'),
(8, 8, 'Sistema de Gestión de Contenidos', 'Desarrollo de un CMS avanzado', 'Desarrollo'),
(9, 9, 'Aplicaciones Móviles Innovadoras', 'Investigación en desarrollo de aplicaciones móviles', 'Investigación'),
(10, 10, 'Controladores Embebidos Eficientes', 'Desarrollo de controladores embebidos eficientes para sistemas embebidos', 'Desarrollo');

-- Insertar datos de ejemplo para Publicaciones
INSERT INTO Publicaciones (id_publicacion, id_profesor, titulo_publicacion, Fecha_publicacion, Revista_publicacion, DOI, Autores)
VALUES
(1, 1, 'Avances en IA Profunda', '2022-01-15', 'Revista de Inteligencia Artificial', 'doi:1234/5678', 'Juan Pérez, María Gómez'),
(2, 2, 'Redes 5G: Estado del Arte', '2022-02-20', 'Revista de Comunicaciones', 'doi:5678/1234', 'María López, Carlos Rodríguez'),
(3, 3, 'Sistemas Embebidos: Nuevos Enfoques', '2022-03-25', 'Revista de Electrónica', 'doi:9876/5432', 'Carlos Rodríguez, Laura Sánchez'),
(4, 4, 'Desarrollo Colaborativo en Plataformas Web', '2022-04-10', 'Revista de Desarrollo Web', 'doi:8765/4321', 'Ana Gómez, David Martínez'),
(5, 5, 'Desafíos en Bases de Datos Distribuidas', '2022-05-15', 'Revista de Sistemas de Información', 'doi:5432/9876', 'David Martínez, Laura Sánchez'),
(6, 6, 'Asistentes Virtuales: Más Allá de Siri', '2022-06-20', 'Revista de Inteligencia Artificial', 'doi:2345/6789', 'Laura Sánchez, Pedro Hernández'),
(7, 7, 'Técnicas Avanzadas en Seguridad de Redes', '2022-07-25', 'Revista de Seguridad Informática', 'doi:6543/2109', 'Pedro Hernández, Marta Torres'),
(8, 8, 'CMS Avanzados: Retos y Oportunidades', '2022-08-10', 'Revista de Desarrollo Web', 'doi:2109/6543', 'Marta Torres, Alberto Vargas'),
(9, 9, 'Desarrollo de Aplicaciones Móviles Innovadoras', '2022-09-15', 'Revista de Desarrollo Móvil', 'doi:7890/1234', 'Alberto Vargas, Elena Ramírez'),
(10, 10, 'Eficiencia en Controladores Embebidos', '2022-10-20', 'Revista de Electrónica', 'doi:3210/8765', 'Elena Ramírez, Juan Pérez');

-- Insertar datos de ejemplo para Grados
INSERT INTO Grados (id_grado, id_profesor, nombre_grado)
VALUES
(1, 1, 'Doctor en Ciencias de la Computación'),
(2, 2, 'Magíster en Ingeniería de Comunicaciones'),
(3, 3, 'Doctor en Ingeniería Electrónica'),
(4, 4, 'Magíster en Desarrollo Web'),
(5, 5, 'Doctor en Sistemas de Información'),
(6, 6, 'Magíster en Inteligencia Artificial'),
(7, 7, 'Magíster en Seguridad en Redes'),
(8, 8, 'Doctor en Desarrollo Web'),
(9, 9, 'Magíster en Desarrollo de Aplicaciones Móviles'),
(10, 10, 'Doctor en Ingeniería Electrónica');

-- Insertar datos de ejemplo para Titulos
INSERT INTO Titulos (id_titulo, id_profesor, nombre_titulo)
VALUES
(1, 1, 'Certificado en Machine Learning'),
(2, 2, 'Certificado en Redes Avanzadas'),
(3, 3, 'Certificado en Sistemas Embebidos'),
(4, 4, 'Certificado en Desarrollo Web'),
(5, 5, 'Certificado en Administración de Bases de Datos'),
(6, 6, 'Certificado en Inteligencia Artificial'),
(7, 7, 'Certificado en Seguridad en Redes'),
(8, 8, 'Certificado en Desarrollo Web Avanzado'),
(9, 9, 'Certificado en Desarrollo de Aplicaciones Móviles'),
(10, 10, 'Certificado en Controladores Embebidos');

-- Insertar datos de ejemplo para Asignaturas_actuales
INSERT INTO Asignaturas_actuales (id_asignatura, id_profesor, nombre_asignatura, rol)
VALUES
(1, 1, 'Inteligencia Artificial Avanzada', 'Profesor Principal'),
(2, 2, 'Redes de Comunicación', 'Profesor Principal'),
(3, 3, 'Sistemas Embebidos', 'Profesor Invitado'),
(4, 4, 'Desarrollo Web Avanzado', 'Profesor Principal'),
(5, 5, 'Base de Datos Avanzada', 'Profesor Invitado'),
(6, 6, 'Programación en Python', 'Profesor Principal'),
(7, 7, 'Seguridad en Redes', 'Profesor Invitado'),
(8, 8, 'Diseño de Interfaz de Usuario', 'Profesor Principal'),
(9, 9, 'Desarrollo de Aplicaciones Móviles', 'Profesor Invitado'),
(10, 10, 'Controladores Embebidos', 'Profesor Principal');

-- Mauro castillo --

-- Insertar profesor en la tabla Profesor
INSERT INTO Profesor (id_profesor, nombre_profesor, cargo_actual, correo, telefono, linea_investigacion, departamento, facultad, imagen, categoria)
VALUES (11, 'Mauro Castillo Valdés', 'Profesor', 'mcast@utem.cl', '+56 2 2787 7211', 'Procesamiento del lenguaje natural', 'Departamento de Informática', 'Facultad de Ingeniería', 'C:\\Users\\chuca\\Desktop\\Mauro-Castillo-Valdes.png', 'Profesor Planta');

-- Insertar proyectos del profesor
INSERT INTO Proyectos (id_proyecto, id_profesor, nombre_proyecto, desc_proyecto, tipo)
VALUES (11, 11, '', '.', '');

-- Insertar publicaciones del profesor
INSERT INTO Publicaciones (id_publicacion, id_profesor, titulo_publicacion, Fecha_publicacion, Revista_publicacion, DOI, Autores)
VALUES
(11, 11, 'Automatic acquisition of sense examples using Exretriever', '2004-01-01', 'UPC', 'http://hdl.handle.net/2117/12504', 'Fernández Juan, Castillo Valdés Mauro, Rigau Claramunt German, Atserias Batalla Jordi, Tormo Jordi'),
(12, 11, 'Exploring large-scale acquisition of multilingual semantic models for predicates', '2003-01-01', 'RUA', 'http://hdl.handle.net/10045/1489', 'Atserias Batalla Jordi, Castillo Valdés Mauro, Real Vázquez Francis, Rodríguez Hontoria Horacio, Rigau Claramunt German'),
(33, 11, 'Asignación automática de etiquetas de dominios en WordNet', '2003-01-01', 'RUA', 'http://hdl.handle.net/10045/1512', 'Castillo Valdés Mauro, Real Vázquez Francis, Rigau Claramunt German');

-- Insertar grados del profesor
INSERT INTO Grados (id_grado, id_profesor, nombre_grado)
VALUES
(11, 11, 'Doctor Phd. en Análisis y Procesamiento del Lenguaje (Universidad del País Vasco).'),
(12, 11, 'Licenciado en Educación (Universidad de Santiago de Chile).');

-- Insertar títulos del profesor
INSERT INTO Titulos (id_titulo, id_profesor, nombre_titulo)
VALUES
(11, 11, 'Ingeniero de Ejecución en Informática'),
(12, 11, 'Profesor de Estado en Matemáticas y Computación');

-- Insertar asignaturas actuales del profesor
INSERT INTO Asignaturas_actuales (id_asignatura, id_profesor, nombre_asignatura, rol)
VALUES
(11, 11, 'Algoritmos Y Programación (Ingeniería Civil en Computación mención Informática Ingeniería en Informática)', ''),
(12, 11, 'Introducción A La Ingeniería (Ingeniería Civil en Computación mención Informática, Ingeniería en Informática, Ingeniería Civil en Ciencia de Datos).', ''),
(13, 11, 'Estructura De Datos (Ingeniería Civil en Computación mención Informática)', ''),
(14, 11, 'Trabajo De Título (Ingeniería Civil en Computación mención Informática, Ingeniería en Informática)', '');
