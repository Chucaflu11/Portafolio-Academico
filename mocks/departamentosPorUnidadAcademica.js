// departamentosMock.js
const departamentosPorUnidadAcademica = {
  'todas': [
    { value: 'todas', label: 'Seleccionar departamento' },
  ],
  '2264': [
    // Departamentos para el Centro de Extensión Artística y Cultural "D. S. C."
  ],
  '328': [
    // Departamentos para la Facultad de Arquitectura y Urbanismo
  ],
  '420': [
    // Departamentos para la Facultad de Artes
  ],
  '526': [
    // Departamentos facultad de Ciencias
    { value: 'todas', label: 'Seleccionar departamento' },
    { value: '527', label: 'Decanato', profesores: [1, 2] },
    { value: '540', label: 'Departamento de Biología', profesores: [2, 3, 4] },
    { value: '552', label: 'Departamento de Ciencias Ecológicas', profesores: [3, 4, 5] },
    { value: '544', label: 'Departamento de Física', profesores: [4, 5] },
    { value: '546', label: 'Departamento de Matemáticas', profesores: [1, 5] },
    { value: '548', label: 'Departamento de Química', profesores: [1, 2, 3] },
    { value: '532', label: 'Escuela de Pregrado', profesores: [5] },
  ],
  '560': [
    // Departamentos para la Facultad de Ciencias Agronómicas
  ],
  // Agrega más departamentos según sea necesario
};

export default departamentosPorUnidadAcademica;
