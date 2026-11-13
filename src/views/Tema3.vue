<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Comunicación
    
    p.mb-5(data-aos="fade-left") La comunicación es un proceso fundamental mediante el cual las personas intercambian información, ideas, conocimientos y experiencias para establecer relaciones, coordinar actividades y alcanzar objetivos comunes.

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-botones.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema3/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0  En las organizaciones, constituye una herramienta estratégica que facilita la interacción entre los trabajadores, los directivos, los clientes, los proveedores y demás partes interesadas.
            br 
            br 
            p.mb-0 En los procesos comerciales, la comunicación permite identificar las necesidades del cliente, proporcionar información sobre productos o servicios, resolver inquietudes y establecer acuerdos durante la negociación. Su efectividad depende de la claridad de los mensajes, la capacidad para comprender las necesidades del interlocutor y la utilización adecuada de los diferentes canales de comunicación.

    p.mb-(data-aos="fade-left")0 Una comunicación clara, respetuosa y oportuna contribuye a fortalecer la confianza, prevenir malentendidos, mejorar la experiencia de compra y construir relaciones comerciales duraderas. Por esta razón, el asesor comercial debe desarrollar habilidades de comunicación oral, escrita, no verbal y digital, adaptándolas a las características de cada cliente y a las situaciones que se presentan durante el proceso de venta.


    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Concepto y elementos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/2.png')
      .col-lg-7
        .bg11.p-4.mb-4
          .row.justify-content-center.align-items-center.mb-0.mt-lg-2.mb-lg-1
            .col-lg-2
              img.img-t.mb-lg-0.mb-4(src='@/assets/curso/tema3/3.svg')
            .col-lg-10
              p.mb-0 Concepto de comunicación: la comunicación es el proceso mediante el cual dos o más personas intercambian mensajes utilizando un lenguaje y un canal determinado, con el propósito de compartir información, expresar ideas, establecer acuerdos o generar una respuesta.
        p.mb-0 En las organizaciones, la comunicación también permite coordinar actividades, transmitir instrucciones, fortalecer las relaciones laborales y contribuir al cumplimiento de los objetivos empresariales.

    .bg12.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0.ps-lg-5.pe-lg-5 #[b Ejemplo comercial:] un cliente solicita información sobre un teléfono celular; por ello, el asesor explica sus características, responde las preguntas y proporciona información sobre el precio y la garantía. Durante esta interacción se produce un intercambio de mensajes que facilita la decisión de compra.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Elementos de la comunicación

    p.mb-5(data-aos="fade-left") Para que la comunicación se desarrolle adecuadamente, intervienen diferentes elementos que permiten transmitir, interpretar y comprender la información.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 13.
          | Elementos del proceso de comunicación
        .tabla-a.tabla-peq.tab-peq13.mb-0
          table
            thead
              tr
                th Elemento
                th Descripción
                th Ejemplo comercial
            tbody
              tr
                td Emisor
                td Persona que origina y transmite el mensaje.
                td El asesor que informa sobre una promoción.
              tr
                td Receptor
                td Persona que recibe e interpreta el mensaje.
                td El cliente interesado en la promoción.
              tr
                td Mensaje
                td Información que se desea comunicar.
                td Características, precio y beneficios del producto.
              tr
                td Código
                td Conjunto de signos y reglas utilizados para construir el mensaje.
                td Idioma español, símbolos o términos comerciales.
              tr
                td Canal
                td Medio por el cual se transmite el mensaje.
                td Conversación presencial, correo electrónico o chat.
              tr
                td Contexto
                td Circunstancias en las que ocurre la comunicación.
                td Atención comercial en un establecimiento.
              tr
                td Retroalimentación
                td Respuesta del receptor que permite verificar la comprensión del mensaje.
                td El cliente solicita aclaraciones sobre la garantía.
              tr
                td Ruido o barreras
                td Factores que dificultan la transmisión o interpretación del mensaje.
                td Interrupciones, información confusa o problemas de conexión.

    p.mb-0(data-aos="fade-left") Los elementos de la comunicación se relacionan entre sí y permiten desarrollar intercambios de información. En una venta, el asesor y el cliente pueden alternar las funciones de emisor y receptor, ya que ambos formulan preguntas, proporcionan información y responden durante la interacción.


    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Herramientas y funciones

    p.mb-5(data-aos="fade-right") Las herramientas de comunicación son recursos que permiten intercambiar información, coordinar actividades y facilitar la interacción entre las personas y las organizaciones. En los procesos comerciales, contribuyen a la atención de solicitudes, la presentación de propuestas, la gestión de información y el seguimiento a los clientes. Su utilización puede desarrollarse de manera presencial o digital, según las necesidades de la empresa y las características de cada interacción.

    .tit-doble.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Principales herramientas de comunicación

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/tema3/4.png')
      .col-lg-6
        LineaTiempoD.color-secundario.activo
          .row.justify-content-center.align-items-center.mb-0(numero="1" titulo="Correo electrónico")
            .col-lg-12
              p.mb-0 Facilita el intercambio de mensajes y documentos digitales. Se utiliza para enviar cotizaciones, propuestas comerciales, confirmaciones de pedidos y comunicaciones formales.
          .row.justify-content-center.align-items-center.mb-0(numero="2" titulo="Telefonía")
            .col-lg-12
              p.mb-0 Permite establecer contacto directo a distancia para atender solicitudes, proporcionar información, resolver inquietudes y realizar seguimiento comercial.
          .row.justify-content-center.align-items-center.mb-0(numero="3" titulo="Mensajería instantánea")
            .col-lg-12
              p.mb-0 Facilita el intercambio de información mediante plataformas digitales, permitiendo responder consultas, confirmar pedidos y mantener contacto oportuno con los clientes.
          .row.justify-content-center.align-items-center.mb-0(numero="4" titulo="Videoconferencias")
            .col-lg-12
              p.mb-0 Permiten desarrollar reuniones virtuales, presentar propuestas comerciales, negociar acuerdos y coordinar actividades sin necesidad de desplazamientos.
          .row.justify-content-center.align-items-center.mb-0(numero="5" titulo="Redes sociales")
            .col-lg-12
              p.mb-0 Facilitan la interacción con diferentes públicos, la atención de consultas y la comunicación de información relacionada con productos, servicios y actividades comerciales.
          .row.justify-content-center.align-items-center.mb-0(numero="6" titulo="Sistemas de gestión de relaciones con clientes (CRM)")
            .col-lg-12
              p.mb-0 Permiten organizar información de contacto, registrar interacciones, administrar oportunidades de venta y realizar seguimiento a las relaciones comerciales. 
          .row.justify-content-center.align-items-center.mb-0(numero="7" titulo="Reuniones presenciales")
            .col-lg-12
              p.mb-0 Facilitan el intercambio directo de información, la presentación de propuestas, la negociación de acuerdos y la coordinación de actividades entre los participantes.

    p.mb-4(data-aos="fade-right") La selección de estas herramientas depende del propósito de la comunicación, el tipo de información que se requiere transmitir, las características del cliente y las políticas de la organización. Su utilización debe garantizar el manejo responsable de los datos personales, la confidencialidad de la información y el cumplimiento de los procedimientos establecidos.

    p.mb-5(data-aos="fade-left") Es importante diferenciar las herramientas de comunicación de los medios de comunicación. Mientras las primeras facilitan principalmente la interacción y gestión de información, los segundos permiten difundir mensajes comerciales a públicos específicos o amplios. Algunos recursos, como las redes sociales y el correo electrónico, pueden cumplir ambas funciones según el propósito de su utilización.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Funciones de la comunicación
    
    p.mb-5(data-aos="fade-left") La comunicación cumple diferentes funciones que contribuyen al desarrollo de las actividades organizacionales, facilitan el intercambio de información y fortalecen las relaciones entre los integrantes de una empresa. Estas funciones permiten orientar las acciones, promover la participación, coordinar procesos y establecer condiciones favorables para el cumplimiento de los objetivos comerciales.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .titulo-sexto.mb-3
          h5 Tabla 14.
          | Funciones de la comunicación organizacional
        .tabla-a.tabla-peq.tab-peq14.mb-0
          table
            thead
              tr
                th Función
                th Descripción
                th Ejemplo
            tbody
              tr
                td Informativa
                td Transmite datos y conocimientos necesarios para desarrollar las actividades.
                td Comunicar precios y características de los productos.
              tr
                td Motivadora
                td Promueve el compromiso, la participación y el reconocimiento de los trabajadores.
                td Reconocer el cumplimiento de las metas comerciales.
              tr
                td Reguladora o de control
                td Facilita la aplicación de procedimientos, instrucciones y normas establecidas por la organización.
                td Informar las políticas de descuentos y devoluciones.
              tr
                td Expresiva
                td Permite compartir opiniones, inquietudes, necesidades y experiencias.
                td Comunicar dificultades relacionadas con la atención al cliente.
              tr
                td Coordinadora
                td Facilita la organización y articulación de actividades entre personas y áreas de la empresa.
                td Coordinar con el área de logística la entrega de pedidos.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/5.png')

    p.mb-0(data-aos="fade-right") Estas funciones se complementan y permiten mantener una comunicación organizada, clara y oportuna. Su aplicación favorece el trabajo en equipo, la toma de decisiones, la solución de dificultades y el fortalecimiento de las relaciones laborales y comerciales, contribuyendo a mejorar la calidad del servicio y el cumplimiento de los objetivos de la organización.


    separador
    #t_3_3.titulo-segundo.mb-5
      h2 3.3 Tipos de comunicación

    p.mb-0(data-aos="fade-right") La comunicación organizacional puede clasificarse según los participantes, la dirección del intercambio de información y los objetivos que se desean alcanzar.
    p.mb-5(data-aos="fade-left") Una de las clasificaciones más utilizadas distingue entre comunicación interna y comunicación externa, las cuales cumplen funciones complementarias en el funcionamiento de las empresas.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Comunicación interna

    p.mb-4(data-aos="fade-left") La comunicación interna comprende el intercambio de información entre las personas que forman parte de una organización. Su finalidad es facilitar la coordinación de actividades, transmitir orientaciones, fortalecer las relaciones laborales y contribuir al cumplimiento de los objetivos institucionales.

    p.mb-5(data-aos="fade-right") En el área comercial, permite que los asesores reciban información actualizada sobre precios, inventarios, promociones, políticas de servicio y procedimientos de venta.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.mb-3
          h5 Tabla 15.
          | Tipos de comunicación interna
        .tabla-a.tabla-peq.tab-peq15.mb-0
          table
            thead
              tr
                th Tipo
                th Descripción
                th Ejemplo
            tbody
              tr
                td Vertical descendente
                td Se desarrolla desde los niveles directivos hacia los trabajadores.
                td El gerente informa las metas de ventas del mes.
              tr
                td Vertical ascendente
                td Se produce desde los trabajadores hacia los niveles superiores.
                td Un asesor presenta recomendaciones para mejorar la atención al cliente.
              tr
                td Horizontal
                td Ocurre entre personas o áreas del mismo nivel jerárquico.
                td Dos asesores coordinan la atención de pedidos.
              tr
                td Diagonal
                td Se establece entre personas de diferentes áreas y niveles jerárquicos.
                td Un asesor comercial coordina directamente con un responsable de logística.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/6.png')

    p.mb-5(data-aos="fade-right") Las reuniones de trabajo, los comunicados internos y las plataformas colaborativas son mecanismos que pueden utilizarse para desarrollar estos tipos de comunicación.

    .tit-doble.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Comunicación efectiva y asertiva

    p.mb-5(data-aos="fade-right") Dos cualidades fundamentales para fortalecer la comunicación interna y las relaciones comerciales son:

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg2.p-lg-5.p-4.h-100.text-center
          .caja-img.mb-4
            img(src='@/assets/curso/tema3/7.svg')
          h3.mb-4 Comunicación efectiva
          p.mb-0 Consiste en transmitir y comprender mensajes de manera clara, precisa y oportuna, procurando que la información cumpla su propósito.
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg3.p-lg-5.p-4.h-100.text-center
          .caja-img.mb-4
            img(src='@/assets/curso/tema3/8.svg')
          h3.mb-4 Comunicación asertiva
          p.mb-0 Es la capacidad de expresar ideas, necesidades y opiniones de manera clara, respetuosa y firme, reconociendo los derechos y puntos de vista de las demás personas.

    p.mb-5(data-aos="fade-right") Por ejemplo, cuando un asesor identifica que un producto no está disponible, debe comunicar la situación con claridad y proponer alternativas, evitando generar expectativas que la empresa no pueda cumplir.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Comunicación externa
    
    p.mb-4(data-aos="fade-left") La comunicación externa comprende las interacciones que una organización establece con personas y entidades que no forman parte de su estructura interna, como clientes, proveedores, aliados comerciales, entidades gubernamentales y comunidad en general.

    p.mb-5(data-aos="fade-right") Su propósito es transmitir información, fortalecer las relaciones comerciales, posicionar la organización y mantener una interacción adecuada con sus públicos de interés.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.mb-3
          h5 Tabla 16.
          | Principales aplicaciones de la comunicación externa
        .tabla-a.tabla-peq.tab-peq15.mb-0
          table
            thead
              tr
                th Tipo
                th Descripción
                th Ejemplo
            tbody
              tr
                td Comercial
                td Orientada a informar y establecer relaciones con clientes actuales y potenciales.
                td Presentación de productos, promociones y propuestas comerciales.
              tr
                td Corporativa
                td Comunica la identidad, los valores y los compromisos de la empresa.
                td Divulgación de políticas de sostenibilidad y responsabilidad empresarial.
              tr
                td Institucional
                td Facilita la interacción con entidades y organismos externos.
                td Comunicaciones con autoridades y organizaciones aliadas.
              tr
                td Relaciones públicas
                td Busca fortalecer los vínculos y la reputación de la organización.
                td Participación en eventos empresariales y actividades comunitarias.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/9.png')

    p.mb-0(data-aos="fade-right") La comunicación externa debe mantener coherencia con las políticas y los valores de la empresa, utilizando mensajes claros, verificables y adecuados para cada público.


    separador
    #t_3_4.titulo-segundo.mb-5
      h2 3.4 Medios de comunicación
    
    .bg13.p-lg-5.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-5.mb-lg-0.mb-4
          img.img-t.img-a(src='@/assets/curso/tema3/10.svg')
        .col-lg-7
          p.mb-4 Los medios de comunicación son los recursos y canales utilizados para transmitir información a diferentes públicos. Las organizaciones los emplean para promocionar productos y servicios, desarrollar campañas comerciales, fortalecer su posicionamiento en el mercado y mantener relaciones con sus clientes. 
          p.mb-0 En las actividades de mercadeo y ventas, estos medios se clasifican principalmente en tradicionales y digitales, de acuerdo con las tecnologías utilizadas y las formas de interacción que permiten establecer con los consumidores.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Tipos de medios de comunicación

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Medios tradicionales")
            .col-lg-12
              p.mb-4 Son aquellos que utilizan canales convencionales para transmitir mensajes comerciales. Se caracterizan por su capacidad para llegar a diferentes públicos y apoyar las estrategias de publicidad y posicionamiento de las empresas.
              p.mb-4 Entre los principales medios tradicionales se encuentran:
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 #[b Televisión:] permite difundir campañas publicitarias, presentar productos y promocionar marcas ante públicos amplios.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 #[b Radio:] se utiliza para comunicar promociones, servicios, eventos comerciales y mensajes publicitarios dirigidos a diferentes comunidades.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 #[b Prensa y revistas:] facilitan la publicación de anuncios, información empresarial y contenidos relacionados con productos o servicios.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 #[b Publicidad exterior:] comprende vallas, avisos y otros espacios publicitarios ubicados en lugares estratégicos para promocionar marcas y establecimientos.
                li.d-flex.mb-0
                  i.fas.fa-user
                  p.mb-0 #[b Material POP (#[em Point of Purchase]):] incluye carteles, exhibidores, habladores y otros recursos promocionales ubicados en los puntos de venta para proporcionar información y estimular las decisiones de compra.
          .row.align-items-center(titulo="Medios digitales")
            .col-lg-12
              p.mb-4 Son aquellos que utilizan tecnologías y plataformas de internet para transmitir información, promocionar productos y establecer interacciones con los clientes. Se caracterizan por facilitar la comunicación directa, la actualización de contenidos y la segmentación de los públicos.
              p.mb-4 Entre los principales medios digitales se encuentran:
              ul.lista-ul.mb-4
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 #[b Sitios web:] permiten publicar catálogos, características de productos, precios, información empresarial y condiciones comerciales.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 #[b Redes sociales:] facilitan la difusión de promociones, la presentación de productos y la interacción con clientes actuales y potenciales.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 #[b Correo electrónico:] se utiliza para enviar cotizaciones, ofertas comerciales, confirmaciones de pedidos y comunicaciones personalizadas.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 #[b Plataformas de mensajería:] permiten atender consultas, proporcionar información sobre productos y realizar seguimiento a solicitudes comerciales.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 #[b Publicidad en línea:] comprende anuncios difundidos mediante buscadores, redes sociales y otras plataformas digitales, dirigidos a públicos específicos según criterios de segmentación.
              p.mb-0 Los medios tradicionales y digitales pueden utilizarse de manera complementaria. Su integración permite ampliar las oportunidades de comunicación y ofrecer diferentes alternativas para que los clientes accedan a la información comercial.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/11.png')

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Selección de los medios de comunicación

    p.mb-5(data-aos="fade-right") La elección de los medios de comunicación debe responder a las necesidades de la empresa, las características de sus clientes y los objetivos que se desean alcanzar. Para realizar una selección adecuada, es importante considerar los siguientes aspectos:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/tema3/12.png')
      .col-lg-6
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Público objetivo ")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Identificar a quién se dirige la información, considerando sus necesidades, características y preferencias de comunicación.
          .tarjeta.color-a.p-4(titulo="Objetivo comercial")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Establecer si se busca informar sobre un producto, promocionar una oferta, captar nuevos clientes o fortalecer las relaciones comerciales.
          .tarjeta.color-a.p-4(titulo="Presupuesto disponible ")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Determinar los recursos económicos que la empresa puede destinar a las actividades de comunicación.
          .tarjeta.color-a.p-4(titulo="Alcance")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Establecer la cantidad y las características de las personas a las que se pretende llegar mediante el mensaje.
          .tarjeta.color-a.p-4(titulo="Interacción")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Considerar las posibilidades que ofrece cada medio para recibir consultas, responder inquietudes y mantener contacto con los clientes.
          .tarjeta.color-a.p-4(titulo="Accesibilidad")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Procurar que la información pueda ser consultada y comprendida por diferentes personas, teniendo en cuenta sus necesidades y condiciones de acceso.

    p.mb-0(data-aos="fade-right") La selección adecuada de los medios de comunicación contribuye a transmitir mensajes claros y oportunos, optimizar los recursos comerciales y fortalecer las relaciones con los consumidores. Por esta razón, el asesor comercial debe conocer las características y aplicaciones de cada medio, con el fin de utilizar los canales autorizados por la empresa y proporcionar una atención acorde con las necesidades del cliente.


    separador
    #t_3_5.titulo-segundo.mb-5
      h2 3.5 Comunicación con los clientes

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/13.png')
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img.img-t(src='@/assets/curso/tema3/14.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 La comunicación con los clientes es el proceso mediante el cual el asesor comercial intercambia información con compradores actuales o potenciales para identificar sus necesidades, presentar alternativas, resolver inquietudes y facilitar decisiones de compra.
        p.mb-4 Durante esta interacción, es importante utilizar un lenguaje claro, mantener una actitud respetuosa, formular preguntas pertinentes y adaptar la información a las características del cliente.
        p.mb-0 La comunicación comercial comprende diferentes formas de expresión, entre las cuales se destacan la comunicación oral, escrita y no verbal.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Comunicación oral
    
    p.mb-4(data-aos="fade-left") La comunicación oral consiste en transmitir mensajes mediante el lenguaje hablado. En las actividades comerciales se utiliza para atender clientes, presentar productos, explicar condiciones de compra, negociar acuerdos y resolver inquietudes.

    p.mb-5(data-aos="fade-left") Para desarrollar una comunicación oral efectiva, el asesor debe organizar sus ideas, utilizar un vocabulario comprensible y proporcionar información precisa sobre los productos o servicios.

    .row.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-6
        .bg6.p-4.p-lg-5
          .bg8.p-2.mb-3
            h4.mb-0.text-white Recomendaciones para una comunicación oral efectiva
          ul.lista-ul.mb-0
            li.d-flex.mb-1
              i.fas.fa-user
              p.mb-0 Utilizar expresiones claras y respetuosas.
            li.d-flex.mb-1
              i.fas.fa-user
              p.mb-0 Formular preguntas abiertas que permitan identificar necesidades.
            li.d-flex.mb-1
              i.fas.fa-user
              p.mb-0 Evitar términos técnicos innecesarios o explicar su significado.
            li.d-flex.mb-1
              i.fas.fa-user
              p.mb-0 Permitir que el cliente exprese sus inquietudes.
            li.d-flex.mb-1
              i.fas.fa-user
              p.mb-0 Confirmar la comprensión de la información proporcionada.
            li.d-flex.mb-1
              i.fas.fa-user
              p.mb-0 Mantener un tono de comunicación cordial y profesional.
            li.d-flex.mb-0
              i.fas.fa-user
              p.mb-0 Evitar interrupciones y respuestas apresuradas.
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/tema3/15.svg')

    p.mb-5(data-aos="fade-right") Una habilidad fundamental es la escucha activa, entendida como la disposición para atender, interpretar y comprender los mensajes del interlocutor, así como para formular preguntas y proporcionar respuestas pertinentes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block.pe-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/tema3/16.png')
      .col-lg-7.ps-lg-0(data-aos="fade-left")
        .bg14.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-2(src='@/assets/curso/tema3/17.svg')
          p.mb-4.mx-lg-2 En las ventas consultivas, es conveniente dar prioridad a la participación del cliente para comprender sus necesidades antes de presentar una solución. Aunque en algunos enfoques comerciales se propone la regla del 80 % de participación del cliente y 20 % del asesor, esta proporción debe entenderse como una orientación práctica y no como una regla universal.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.mb-3
          h5 Tabla 17.
          | Formas de comunicación oral en las actividades comerciales
        .tabla-a.tabla-peq.tab-peq17.mb-0
          table
            thead
              tr
                th Forma
                th Descripción
                th Aplicación comercial
            tbody
              tr
                td Diálogo
                td Intercambio de información entre dos o más personas.
                td Conversación entre asesor y cliente.
              tr
                td Entrevista
                td Interacción estructurada mediante preguntas para obtener información.
                td Identificación de necesidades de compra.
              tr
                td Presentación
                td Exposición organizada de información sobre un tema.
                td Explicación de características y beneficios de un producto.
              tr
                td Reunión
                td Interacción entre participantes para coordinar actividades o establecer acuerdos.
                td Negociación con proveedores o clientes empresariales.
              tr
                td Atención telefónica
                td Comunicación desarrollada mediante llamadas.
                td Seguimiento de pedidos y atención de solicitudes.
              tr
                td Negociación
                td Intercambio de propuestas para alcanzar acuerdos entre las partes.
                td Definición de precios, cantidades y condiciones de pago.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/18.png')

    p.mb-0(data-aos="fade-right") Estas formas de comunicación permiten desarrollar diferentes actividades comerciales y requieren que el asesor adapte su lenguaje, nivel de formalidad y argumentación a cada situación.

    .row.fd3.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-8
            .tit-doble.mb-5(data-aos="fade-right")
              img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
              h3 Comunicación no verbal
            .row.mb-4
              .col-lg-2.d-none.d-lg-block
                img.img-t(src='@/assets/curso/tema3/19.svg')
              .col-lg-10.ps-lg-0
                p.mb-0 La comunicación no verbal comprende los mensajes que se transmiten mediante gestos, expresiones faciales, movimientos corporales, posturas, distancia interpersonal y otros comportamientos que acompañan o complementan el lenguaje oral.
            p.mb-4 Durante la atención comercial, estos elementos pueden contribuir a transmitir cordialidad, interés, respeto y disposición para atender al cliente.
            p.mb-0 Sin embargo, su interpretación debe considerar el contexto, las diferencias culturales y las características individuales de cada persona, debido a que un mismo comportamiento puede tener distintos significados.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/tema3/20.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/21.png')
      .col-lg-8
        .titulo-sexto.mb-3
          h5 Tabla 18.
          | Elementos de la comunicación no verbal
        .tabla-a.tabla-peq.tab-peq18.mb-3
          table
            thead
              tr
                th Elemento
                th Descripción
                th Aplicación comercial
            tbody
              tr
                td Expresiones faciales
                td Movimientos del rostro que pueden acompañar la expresión de emociones y actitudes.
                td Mantener una expresión cordial durante la atención.
              tr
                td Postura corporal
                td Posición que adopta el cuerpo durante la interacción.
                td Mantener una postura cómoda y profesional.
              tr
                td Gestos
                td Movimientos corporales que complementan los mensajes.
                td Utilizar gestos moderados para apoyar una explicación.
              tr
                td Distancia interpersonal
                td Espacio físico que se mantiene entre las personas.
                td Respetar el espacio personal del cliente.
              tr
                td Contacto visual
                td Dirección de la mirada durante la interacción, cuando resulte apropiado.
                td Mantener una interacción respetuosa, considerando preferencias y diferencias culturales.
              tr
                td Paralenguaje
                td Características de la voz que acompañan el mensaje, como tono, ritmo y volumen.
                td Utilizar un ritmo moderado y un tono cordial.
        p.mb-0 Es importante evitar interpretaciones automáticas de los gestos o posturas del cliente. Por ejemplo, mantener los brazos cruzados no significa necesariamente desinterés, así como la ausencia de contacto visual no implica falta de atención.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Comunicación escrita

    p.mb-4(data-aos="fade-left") La comunicación escrita es una forma de intercambio de información mediante palabras y mensajes registrados en medios físicos o digitales. En la asesoría comercial, permite transmitir información sobre productos, servicios, cotizaciones, pedidos, condiciones de compra y seguimiento a las solicitudes de los clientes.

    p.mb-5(data-aos="fade-right") Su aplicación requiere utilizar un lenguaje claro, respetuoso y preciso, con adecuada ortografía y organización de las ideas, para evitar interpretaciones incorrectas y facilitar la comprensión de los acuerdos comerciales.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/tema3/22.png')
      .col-lg-6
        p.mb-4 Entre sus principales aplicaciones se encuentran:
        LineaTiempoD.color-secundario.activo
          .row.justify-content-center.align-items-center.mb-0(numero="1" titulo="Correos electrónicos")
            .col-lg-12
              p.mb-0 Permiten enviar cotizaciones, propuestas comerciales, confirmaciones y respuestas a solicitudes.
          .row.justify-content-center.align-items-center.mb-0(numero="2" titulo="Mensajes comerciales")
            .col-lg-12
              p.mb-0 Facilitan la com unicación oportuna sobre productos, pedidos, promociones y condiciones de compra.
          .row.justify-content-center.align-items-center.mb-0(numero="3" titulo="Cotizaciones y propuestas")
            .col-lg-12
              p.mb-0 Presentan información organizada sobre características, precios, cantidades y condiciones comerciales.
          .row.justify-content-center.align-items-center.mb-0(numero="4" titulo="Comunicaciones de seguimiento")
            .col-lg-12
              p.mb-0 Permiten informar sobre el estado de los pedidos, las entregas, las garantías y las solicitudes posteriores a la venta.

    p.mb-5(data-aos="fade-right") La comunicación escrita contribuye a mantener registros de las interacciones comerciales, prevenir malentendidos y fortalecer la confianza del cliente. Por ello, los mensajes deben elaborarse conforme a las políticas de la organización y garantizar el manejo responsable de la información personal y comercial.

    .tit-doble.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Importancia de la comunicación en el proceso de venta
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-7
        .row.mb-4
          .col-lg-2.d-none.d-lg-block
            img.img-t(src='@/assets/curso/tema3/19.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 La comunicación constituye una competencia esencial para el desempeño del asesor comercial, debido a que interviene en todas las etapas de la venta, desde el acercamiento inicial hasta el seguimiento posterior a la compra.
        p.mb-4 Su aplicación adecuada permite comprender las necesidades del cliente, presentar información confiable, gestionar objeciones, establecer acuerdos y proporcionar una atención orientada a la satisfacción del comprador.
        p.mb-0 Por esta razón, el desarrollo de habilidades de comunicación efectiva, asertiva, oral, escrita, no verbal y digital contribuye al fortalecimiento de las competencias comerciales y al establecimiento de relaciones basadas en la confianza, el respeto y la transparencia.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/23.png')


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
