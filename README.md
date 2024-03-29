# Portafolio Académico de Profesores

Este proyecto es un portafolio académico diseñado para mostrar la información de investigación de los profesores de un departamento universitario, enfocándose en el área de informática. Cabe destacar que este proyecto es puramente académico y los nombres de los profesores utilizados como ejemplo son 
completamente ficticios.

## Notas Importantes

**Este proyecto es una iniciativa académica y todos los datos de los profesores utilizados como ejemplo son completamente ficticios. La aplicación ha sido desarrollada con fines educativos y de práctica.**

## Descripción del Proyecto

El Portafolio Académico de Profesores es una aplicación web que proporciona a los visitantes la posibilidad de explorar la información de los profesores, incluyendo datos básicos y detalles relacionados con su investigación, como publicaciones, proyectos y líneas de investigación.

## Características Principales

- **Exploración de Profesores:** Lista de profesores del departamento de informática con detalles básicos.
- **Detalles del Profesor:** Información detallada de cada profesor, incluyendo datos personales y académicos.
- **Investigaciones:** Exploración de publicaciones, proyectos y líneas de investigación de cada profesor.
- **Edición:** Funcionalidad para editar información acerca de los profesores, pensada para estar disponible únicamente para el profesor en sí mismo, o para administradores.

## Configuración del Proyecto

### Requisitos Previos

Asegúrate de tener instalados los siguientes requisitos antes de ejecutar la aplicación:

- Node.js
- Gestor de paquetes npm
- ReactJS
- Gestor de base de datos SQL

### Instalación

1. Clona este repositorio: `git clone https://github.com/Chucaflu11/Portafolio-Academico`
2. Navega al directorio del proyecto: `cd proyecto-portafolio`
3. Instala las dependencias: `npm install`
4. Configura la base de datos según sea necesario, desde el archivo [profesores.sql](/Backend/profesores.sql).
5. Ejecuta el servidor: `node .\Backend\server.js`
5. Ejecuta la aplicación: `npm run dev`

### To-do

- [ ] Implementar autentificación para la edición.
- [ ] Frontend del formulario de edición.
- [ ] Arreglar errores del formulario de edición
