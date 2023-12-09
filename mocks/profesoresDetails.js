// Detalles del profe
const profesoresDetalle = [
  {
    "id": 1,
    "nombre": "Juan Pérez",
    "anexo": 123,
    "correo": "juan.perez@example.com",
    "imagen": "https://example.com/juan_perez.jpg",
    "categoria": "Investigador",
    "departamento": "Ciencias de la Computación",
    "facultad": "Ciencias",
    "linea_investigacion": "Inteligencia Artificial",
    "perfil_academico": {
      "breve_cronologia": ["Ph.D. en Ciencias de la Computación"],
      "docencia": [
        {
          "curso": "Introducción a la Inteligencia Artificial",
          "rol": "Profesor"
        }
      ],
      "coordinacion": ["Coordinador de Investigación"]
    },
    "informacion_personal": {
      "breve_cronologia": ["Nacido en 1980"],
      "estudios": [
        {
          "grado": "M.Sc. en Ciencias de la Computación",
          "institucion": "Universidad XYZ",
          "fecha": "2005"
        }
      ],
      "experiencia_laboral": [
        {
          "cargo": "Investigador Asociado",
          "institucion": "Instituto de Investigación",
          "año_inicio": "2010",
          "año_fin": "Presente"
        }
      ]
    },
    "publicaciones": [
      {
        "Autores": ["Juan Pérez", "María Gómez"],
        "Título publicación": "Avances en Inteligencia Artificial",
        "Año": 2022,
        "Título revista": "Revista de Investigación en Computación",
        "Tipo publicación": "Artículo",
        "Digital object identifier": "doi:10.1234/abcd1234"
      }
    ]
  },
  {
    "id": 2,
    "nombre": "Ana Rodríguez",
    "anexo": 456,
    "correo": "ana.rodriguez@example.com",
    "imagen": "https://example.com/ana_rodriguez.jpg",
    "categoria": "Profesor",
    "departamento": "Matemáticas",
    "facultad": "Ciencias",
    "linea_investigacion": "Álgebra",
    "perfil_academico": {
      "breve_cronologia": ["Ph.D. en Matemáticas"],
      "docencia": [
        {
          "curso": "Álgebra Lineal",
          "rol": "Profesor"
        }
      ],
      "coordinacion": ["Coordinador de Departamento"]
    },
    "informacion_personal": {
      "breve_cronologia": ["Nacida en 1975"],
      "estudios": [
        {
          "grado": "M.Sc. en Matemáticas",
          "institucion": "Universidad ABC",
          "fecha": "2000"
        }
      ],
      "experiencia_laboral": [
        {
          "cargo": "Investigador",
          "institucion": "Centro de Investigación Matemática",
          "año_inicio": "2005",
          "año_fin": "2015"
        }
      ]
    },
    "publicaciones": [
      {
        "Autores": ["Ana Rodríguez", "Carlos Martínez"],
        "Título publicación": "Avances en Álgebra Abstracta",
        "Año": 2021,
        "Título revista": "Journal of Algebra",
        "Tipo publicación": "Artículo",
        "Digital object identifier": "doi:10.5678/abcd5678"
      }
    ]
  },
  {
    "id": 3,
    "nombre": "María García",
    "anexo": 789,
    "correo": "maria.garcia@example.com",
    "imagen": "https://example.com/maria_garcia.jpg",
    "categoria": "Investigador",
    "departamento": "Química",
    "facultad": "Ciencias",
    "linea_investigacion": "Química Orgánica",
    "perfil_academico": {
      "breve_cronologia": ["Ph.D. en Química"],
      "docencia": [
        {
          "curso": "Química Orgánica Avanzada",
          "rol": "Profesor"
        }
      ],
      "coordinacion": ["Coordinador de Investigación"]
    },
    "informacion_personal": {
      "breve_cronologia": ["Nacida en 1982"],
      "estudios": [
        {
          "grado": "M.Sc. en Química Orgánica",
          "institucion": "Universidad XYZ",
          "fecha": "2007"
        }
      ],
      "experiencia_laboral": [
        {
          "cargo": "Investigador Asociado",
          "institucion": "Instituto de Química",
          "año_inicio": "2010",
          "año_fin": "Presente"
        }
      ]
    },
    "publicaciones": [
      {
        "Autores": ["María García", "Juan Pérez"],
        "Título publicación": "Nuevas Síntesis en Química Orgánica",
        "Año": 2023,
        "Título revista": "Journal of Organic Chemistry",
        "Tipo publicación": "Artículo",
        "Digital object identifier": "doi:10.9012/abcd9012"
      }
    ]
  },
  {
    "id": 4,
    "nombre": "Carlos Martínez",
    "anexo": 101,
    "correo": "carlos.martinez@example.com",
    "imagen": "https://example.com/carlos_martinez.jpg",
    "categoria": "Profesor",
    "departamento": "Física",
    "facultad": "Ciencias",
    "linea_investigacion": "Física Teórica",
    "perfil_academico": {
      "breve_cronologia": ["Ph.D. en Física"],
      "docencia": [
        {
          "curso": "Mecánica Cuántica",
          "rol": "Profesor"
        }
      ],
      "coordinacion": ["Coordinador de Programa de Maestría"]
    },
    "informacion_personal": {
      "breve_cronologia": ["Nacido en 1978"],
      "estudios": [
        {
          "grado": "M.Sc. en Física Teórica",
          "institucion": "Universidad ABC",
          "fecha": "2003"
        }
      ],
      "experiencia_laboral": [
        {
          "cargo": "Investigador",
          "institucion": "Centro de Física Teórica",
          "año_inicio": "2008",
          "año_fin": "2016"
        }
      ]
    },
    "publicaciones": [
      {
        "Autores": ["Carlos Martínez", "Ana Rodríguez"],
        "Título publicación": "Avances en Física Teórica",
        "Año": 2020,
        "Título revista": "Physical Review Letters",
        "Tipo publicación": "Artículo",
        "Digital object identifier": "doi:10.3456/abcd3456"
      }
    ]
  },
  {
    "id": 5,
    "nombre": "Laura Sánchez",
    "anexo": 202,
    "correo": "laura.sanchez@example.com",
    "imagen": "https://example.com/laura_sanchez.jpg",
    "categoria": "Investigador",
    "departamento": "Biología",
    "facultad": "Ciencias",
    "linea_investigacion": "Biología Molecular",
    "perfil_academico": {
      "breve_cronologia": ["Ph.D. en Biología Molecular"],
      "docencia": [
        {
          "curso": "Genética",
          "rol": "Profesor"
        }
      ],
      "coordinacion": ["Coordinador de Investigación"]
    },
    "informacion_personal": {
      "breve_cronologia": ["Nacida en 1985"],
      "estudios": [
        {
          "grado": "M.Sc. en Biología Molecular",
          "institucion": "Universidad XYZ",
          "fecha": "2010"
        }
      ],
      "experiencia_laboral": [
        {
          "cargo": "Investigador Asociado",
          "institucion": "Instituto de Biología Molecular",
          "año_inicio": "2015",
          "año_fin": "Presente"
        }
      ]
    },
    "publicaciones": [
      {
        "Autores": ["Laura Sánchez", "María García"],
        "Título publicación": "Avances en Biología Molecular",
        "Año": 2021,
        "Título revista": "Journal of Molecular Biology",
        "Tipo publicación": "Artículo",
        "Digital object identifier": "doi:10.6789/abcd6789"
      }
    ]
  },
  {
    "id": 6,
    "nombre": "Javier López",
    "anexo": 303,
    "correo": "javier.lopez@example.com",
    "imagen": "https://example.com/javier_lopez.jpg",
    "categoria": "Profesor",
    "departamento": "Historia",
    "facultad": "Humanidades",
    "linea_investigacion": "Historia Contemporánea",
    "perfil_academico": {
      "breve_cronologia": ["Ph.D. en Historia"],
      "docencia": [
        {
          "curso": "Historia del Siglo XX",
          "rol": "Profesor"
        }
      ],
      "coordinacion": ["Coordinador de Departamento"]
    },
    "informacion_personal": {
      "breve_cronologia": ["Nacido en 1970"],
      "estudios": [
        {
          "grado": "M.Sc. en Historia Contemporánea",
          "institucion": "Universidad ABC",
          "fecha": "1995"
        }
      ],
      "experiencia_laboral": [
        {
          "cargo": "Investigador",
          "institucion": "Centro de Estudios Históricos",
          "año_inicio": "2000",
          "año_fin": "Presente"
        }
      ]
    },
    "publicaciones": [
      {
        "Autores": ["Javier López", "Elena Fernández"],
        "Título publicación": "Transformaciones Sociales en el Siglo XX",
        "Año": 2019,
        "Título revista": "Revista de Historia Contemporánea",
        "Tipo publicación": "Artículo",
        "Digital object identifier": "doi:10.12345/abcd6789"
      }
    ]
  },
  {
    "id": 7,
    "nombre": "Elena Fernández",
    "anexo": 404,
    "correo": "elena.fernandez@example.com",
    "imagen": "https://example.com/elena_fernandez.jpg",
    "categoria": "Investigador",
    "departamento": "Psicología",
    "facultad": "Ciencias Sociales",
    "linea_investigacion": "Psicología Cognitiva",
    "perfil_academico": {
      "breve_cronologia": ["Ph.D. en Psicología"],
      "docencia": [
        {
          "curso": "Psicología Experimental",
          "rol": "Profesor"
        }
      ],
      "coordinacion": ["Coordinador de Investigación"]
    },
    "informacion_personal": {
      "breve_cronologia": ["Nacida en 1988"],
      "estudios": [
        {
          "grado": "M.Sc. en Psicología Cognitiva",
          "institucion": "Universidad XYZ",
          "fecha": "2013"
        }
      ],
      "experiencia_laboral": [
        {
          "cargo": "Investigador Asociado",
          "institucion": "Instituto de Psicología",
          "año_inicio": "2018",
          "año_fin": "Presente"
        }
      ]
    },
    "publicaciones": [
      {
        "Autores": ["Elena Fernández", "Javier López"],
        "Título publicación": "Avances en Psicología Cognitiva",
        "Año": 2022,
        "Título revista": "Journal of Cognitive Psychology",
        "Tipo publicación": "Artículo",
        "Digital object identifier": "doi:10.56789/abcd12345"
      }
    ]
  },
  {
    "id": 8,
    "nombre": "Roberto Torres",
    "anexo": 505,
    "correo": "roberto.torres@example.com",
    "imagen": "https://example.com/roberto_torres.jpg",
    "categoria": "Profesor",
    "departamento": "Arquitectura",
    "facultad": "Artes y Arquitectura",
    "linea_investigacion": "Diseño Urbano",
    "perfil_academico": {
      "breve_cronologia": ["Ph.D. en Arquitectura"],
      "docencia": [
        {
          "curso": "Diseño Urbano Sostenible",
          "rol": "Profesor"
        }
      ],
      "coordinacion": ["Coordinador de Carrera"]
    },
    "informacion_personal": {
      "breve_cronologia": ["Nacido en 1973"],
      "estudios": [
        {
          "grado": "M.Sc. en Diseño Urbano",
          "institucion": "Universidad ABC",
          "fecha": "2002"
        }
      ],
      "experiencia_laboral": [
        {
          "cargo": "Arquitecto",
          "institucion": "Estudio de Arquitectura",
          "año_inicio": "2007",
          "año_fin": "Presente"
        }
      ]
    },
    "publicaciones": [
      {
        "Autores": ["Roberto Torres", "Laura Sánchez"],
        "Título publicación": "Diseño Sostenible en Entornos Urbanos",
        "Año": 2020,
        "Título revista": "Journal of Urban Design",
        "Tipo publicación": "Artículo",
        "Digital object identifier": "doi:10.34567/abcd56789"
      }
    ]
  },
  {
    "id": 9,
    "nombre": "Isabel Gómez",
    "anexo": 606,
    "correo": "isabel.gomez@example.com",
    "imagen": "https://example.com/isabel_gomez.jpg",
    "categoria": "Investigador",
    "departamento": "Economía",
    "facultad": "Ciencias Económicas",
    "linea_investigacion": "Economía Internacional",
    "perfil_academico": {
      "breve_cronologia": ["Ph.D. en Economía"],
      "docencia": [
        {
          "curso": "Comercio Internacional",
          "rol": "Profesor"
        }
      ],
      "coordinacion": ["Coordinador de Investigación"]
    },
    "informacion_personal": {
      "breve_cronologia": ["Nacida en 1981"],
      "estudios": [
        {
          "grado": "M.Sc. en Economía Internacional",
          "institucion": "Universidad XYZ",
          "fecha": "2006"
        }
      ],
      "experiencia_laboral": [
        {
          "cargo": "Economista",
          "institucion": "Banco Central",
          "año_inicio": "2011",
          "año_fin": "Presente"
        }
      ]
    },
    "publicaciones": [
      {
        "Autores": ["Isabel Gómez", "Carlos Martínez"],
        "Título publicación": "Desafíos en la Economía Global",
        "Año": 2021,
        "Título revista": "Journal of International Economics",
        "Tipo publicación": "Artículo",
        "Digital object identifier": "doi:10.90123/abcd34567"
      }
    ]
  },
  {
    "id": 10,
    "nombre": "Pedro Jiménez",
    "anexo": 707,
    "correo": "pedro.jimenez@example.com",
    "imagen": "https://example.com/pedro_jimenez.jpg",
    "categoria": "Profesor",
    "departamento": "Lengua y Literatura",
    "facultad": "Letras",
    "linea_investigacion": "Literatura Latinoamericana",
    "perfil_academico": {
      "breve_cronologia": ["Ph.D. en Literatura"],
      "docencia": [
        {
          "curso": "Narrativa Latinoamericana",
          "rol": "Profesor"
        }
      ],
      "coordinacion": ["Coordinador de Departamento"]
    },
    "informacion_personal": {
      "breve_cronologia": ["Nacido en 1977"],
      "estudios": [
        {
          "grado": "M.Sc. en Literatura Latinoamericana",
          "institucion": "Universidad ABC",
          "fecha": "2004"
        }
      ],
      "experiencia_laboral": [
        {
          "cargo": "Investigador",
          "institucion": "Centro de Estudios Literarios",
          "año_inicio": "2009",
          "año_fin": "Presente"
        }
      ]
    },
    "publicaciones": [
      {
        "Autores": ["Pedro Jiménez", "Ana Rodríguez"],
        "Título publicación": "Perspectivas en la Narrativa Latinoamericana",
        "Año": 2023,
        "Título revista": "Revista de Literatura Latinoamericana",
        "Tipo publicación": "Artículo",
        "Digital object identifier": "doi:10.67890/abcd567890"
      }
    ]
  }
];
    
export default profesoresDetalle;
