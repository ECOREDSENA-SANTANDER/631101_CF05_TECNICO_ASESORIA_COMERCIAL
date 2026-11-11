export default {
  global: {
    Name: 'Ventas, comunicación y <em>merchandising</em>',
    Description:
      'El componente formativo Ventas, comunicación y <em>merchandising</em> desarrolla conocimientos y habilidades relacionados con los procesos de venta, las estrategias y técnicas comerciales, las herramientas de gestión y las transacciones comerciales, incluyendo medios de pago, documentación y condiciones de negociación. Asimismo, fortalece las competencias comunicativas mediante el uso de herramientas, tipos y medios de comunicación que favorecen la interacción efectiva con los clientes y contribuyen a una asesoría comercial de calidad.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Herramientas de la venta',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de vendedores',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Proceso de la venta',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Estrategias y técnicas de ventas',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Venta consultiva',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Clínicas de venta',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Merchandising en el punto de venta',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Transacciones comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Formas de pago',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Documentos comerciales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Condiciones comerciales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Condiciones de entrega',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y elementos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas y funciones',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos de comunicación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Medios de comunicación',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Comunicación con los clientes',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Asesor comercial',
      significado:
        'profesional encargado de identificar las necesidades de los clientes, proporcionar información sobre productos o servicios y orientar el proceso de compra, de acuerdo con las políticas de la organización.',
    },
    {
      termino: 'Cierre de ventas',
      significado:
        'etapa del proceso comercial en la que el cliente toma la decisión de compra y se formalizan los acuerdos relacionados con el producto o servicio, el precio y las condiciones de la transacción.',
    },
    {
      termino: 'Clínica de ventas',
      significado:
        'actividad de formación práctica que permite fortalecer las habilidades comerciales mediante simulaciones, análisis de situaciones y ejercicios relacionados con la atención, negociación y venta.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'capacidad para expresar información, ideas y necesidades de manera clara, respetuosa y oportuna, favoreciendo el entendimiento y las relaciones comerciales positivas.',
    },
    {
      termino: 'Condiciones comerciales',
      significado:
        'acuerdos que establecen los términos de una transacción, incluyendo precios, descuentos, formas de pago, plazos de entrega, garantías y responsabilidades de las partes.',
    },
    {
      termino: 'CRM (gestión de relaciones con clientes)',
      significado:
        'sistema o estrategia que permite organizar la información de los clientes, registrar interacciones y realizar seguimiento a las oportunidades de venta y las relaciones comerciales.',
    },
    {
      termino: 'Estrategias de venta',
      significado:
        'conjunto de acciones planificadas que orientan la comercialización de productos o servicios, considerando las características del mercado, las necesidades de los clientes y los objetivos de la organización.',
    },
    {
      termino: 'Fidelización de clientes',
      significado:
        'conjunto de acciones destinadas a fortalecer las relaciones comerciales, promover la satisfacción y favorecer la continuidad de las compras mediante experiencias de atención positivas.',
    },
    {
      termino: 'Manejo de objeciones',
      significado:
        'proceso mediante el cual el asesor comercial identifica, comprende y atiende las dudas o inquietudes del cliente, proporcionando información y alternativas que faciliten una decisión de compra informada.',
    },
    {
      termino: 'Negociación comercial',
      significado:
        'proceso de intercambio de propuestas entre comprador y vendedor para establecer acuerdos sobre precios, condiciones y compromisos que respondan a los intereses de las partes.',
    },
    {
      termino: 'Proceso de ventas',
      significado:
        'secuencia organizada de etapas que comprende la identificación de clientes potenciales, el reconocimiento de necesidades, la presentación de soluciones, la atención de objeciones, el cierre y el seguimiento comercial.',
    },
    {
      termino: 'Prospección de clientes',
      significado:
        'actividad orientada a identificar y contactar personas u organizaciones que podrían estar interesadas en adquirir los productos o servicios ofrecidos por una empresa.',
    },
    {
      termino: 'Técnicas de venta',
      significado:
        'métodos y procedimientos utilizados para orientar la interacción comercial, identificar necesidades, presentar propuestas y facilitar la toma de decisiones de compra.',
    },
    {
      termino: 'Transacción comercial',
      significado:
        'operación mediante la cual se realiza el intercambio de bienes o servicios a cambio de una contraprestación económica, bajo condiciones previamente acordadas.',
    },
    {
      termino: 'Venta consultiva',
      significado:
        'enfoque comercial centrado en comprender las necesidades del cliente, proporcionar orientación especializada y proponer soluciones adecuadas, priorizando la construcción de relaciones de confianza.',
    },
  ],
  referencias: [
    {
      referencia:
        'Antevenio. (s. f.). Los mejores ejemplos del método AIDA para inspirarte.',
      link: '',
    },
    {
      referencia:
        'Artal Castells, M. (2015). Dirección de ventas: Organización del departamento de ventas y gestión de vendedores. Alfaomega Grupo Editor.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.). Abecé: Sistema de factura electrónica.',
      link: '',
    },
    {
      referencia:
        'DocuSign. (10 de junio de 2024). Cierre de ventas: 5 estrategias clave para hacerlo.',
      link: '',
    },
    {
      referencia:
        'Experto GestioPolis.com Experto. (4 de abril de 2020). Documentos comerciales: Qué son, tipos, características y ejemplos. GestioPolis.',
      link: '',
    },
    {
      referencia:
        'Globalkam. (s. f.). Tipos de clientes: Cómo atenderlos para conectar en la venta.',
      link: '',
    },
    {
      referencia:
        'González Alonso, M. del R. (13 de septiembre de 2021). La comunicación asertiva, una habilidad fundamental para el convivir. Universidad Central.',
      link: '',
    },
    {
      referencia:
        'Hair, J. F., Anderson, R. E., Mehta, R., & Babin, B. J. (2010). Administración de ventas: Relaciones y sociedades con el cliente. Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'International Chamber of Commerce. (s. f.). Incoterms® rules.',
      link: '',
    },
    {
      referencia:
        'Jobber, D., & Lancaster, G. (2012). Administración de ventas (8.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Lobato, F., De la Mata, M., & Rodríguez, S. (2010). Operaciones Administrativas de Compra-Venta. Macmillan Profesional.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Alberto Pérez Posada',
          cargo: 'Instructor',
          centro: 'Centro de Comercio - Regional Antioquia',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
