<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Comunicación
    
    p.mb-5 La comunicación es un proceso fundamental mediante el cual las personas intercambian información, ideas, conocimientos y experiencias para establecer relaciones, coordinar actividades y alcanzar objetivos comunes.

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

    p.mb-0 Una comunicación clara, respetuosa y oportuna contribuye a fortalecer la confianza, prevenir malentendidos, mejorar la experiencia de compra y construir relaciones comerciales duraderas. Por esta razón, el asesor comercial debe desarrollar habilidades de comunicación oral, escrita, no verbal y digital, adaptándolas a las características de cada cliente y a las situaciones que se presentan durante el proceso de venta.


    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Concepto y elementos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema3/2.png')
      .col-lg-7
        .bg11.p-4.mb-4
          .row.justify-content-center.align-items-center.mb-0.mt-lg-2.mb-lg-1
            .col-lg-2
              img(src='@/assets/curso/tema3/3.svg')
            .col-lg-10
              p.mb-0 Concepto de comunicación: la comunicación es el proceso mediante el cual dos o más personas intercambian mensajes utilizando un lenguaje y un canal determinado, con el propósito de compartir información, expresar ideas, establecer acuerdos o generar una respuesta.
        p.mb-0 En las organizaciones, la comunicación también permite coordinar actividades, transmitir instrucciones, fortalecer las relaciones laborales y contribuir al cumplimiento de los objetivos empresariales.

    .bg12.p-lg-5.p-4.mb-5
      p.mb-0.ps-lg-5.pe-lg-5 #[b Ejemplo comercial:] un cliente solicita información sobre un teléfono celular; por ello, el asesor explica sus características, responde las preguntas y proporciona información sobre el precio y la garantía. Durante esta interacción se produce un intercambio de mensajes que facilita la decisión de compra.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Elementos de la comunicación

    p.mb-5 Para que la comunicación se desarrolle adecuadamente, intervienen diferentes elementos que permiten transmitir, interpretar y comprender la información.

    .row.justify-content-center.align-items-center.mb-5
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

    p.mb-0 Los elementos de la comunicación se relacionan entre sí y permiten desarrollar intercambios de información. En una venta, el asesor y el cliente pueden alternar las funciones de emisor y receptor, ya que ambos formulan preguntas, proporcionan información y responden durante la interacción.


    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Herramientas y funciones

    p.mb-5 Las herramientas de comunicación son recursos que permiten intercambiar información, coordinar actividades y facilitar la interacción entre las personas y las organizaciones. En los procesos comerciales, contribuyen a la atención de solicitudes, la presentación de propuestas, la gestión de información y el seguimiento a los clientes. Su utilización puede desarrollarse de manera presencial o digital, según las necesidades de la empresa y las características de cada interacción.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Principales herramientas de comunicación

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
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

    p.mb-4 La selección de estas herramientas depende del propósito de la comunicación, el tipo de información que se requiere transmitir, las características del cliente y las políticas de la organización. Su utilización debe garantizar el manejo responsable de los datos personales, la confidencialidad de la información y el cumplimiento de los procedimientos establecidos.

    p.mb-5 Es importante diferenciar las herramientas de comunicación de los medios de comunicación. Mientras las primeras facilitan principalmente la interacción y gestión de información, los segundos permiten difundir mensajes comerciales a públicos específicos o amplios. Algunos recursos, como las redes sociales y el correo electrónico, pueden cumplir ambas funciones según el propósito de su utilización.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Funciones de la comunicación
    
    p.mb-5 La comunicación cumple diferentes funciones que contribuyen al desarrollo de las actividades organizacionales, facilitan el intercambio de información y fortalecen las relaciones entre los integrantes de una empresa. Estas funciones permiten orientar las acciones, promover la participación, coordinar procesos y establecer condiciones favorables para el cumplimiento de los objetivos comerciales.

    .row.justify-content-center.align-items-center.mb-5
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
      .col-lg-4
        img(src='@/assets/curso/tema3/5.png')

    p.mb-0 Estas funciones se complementan y permiten mantener una comunicación organizada, clara y oportuna. Su aplicación favorece el trabajo en equipo, la toma de decisiones, la solución de dificultades y el fortalecimiento de las relaciones laborales y comerciales, contribuyendo a mejorar la calidad del servicio y el cumplimiento de los objetivos de la organización.


    separador
    #t_3_3.titulo-segundo.mb-5
      h2 3.3 Tipos de comunicación

    p.mb-0 La comunicación organizacional puede clasificarse según los participantes, la dirección del intercambio de información y los objetivos que se desean alcanzar.
    p.mb-5 Una de las clasificaciones más utilizadas distingue entre comunicación interna y comunicación externa, las cuales cumplen funciones complementarias en el funcionamiento de las empresas.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Comunicación interna

    p.mb-4 La comunicación interna comprende el intercambio de información entre las personas que forman parte de una organización. Su finalidad es facilitar la coordinación de actividades, transmitir orientaciones, fortalecer las relaciones laborales y contribuir al cumplimiento de los objetivos institucionales.

    p.mb-5 En el área comercial, permite que los asesores reciban información actualizada sobre precios, inventarios, promociones, políticas de servicio y procedimientos de venta.

    .row.justify-content-center.align-items-center.mb-5
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
      .col-lg-4
        img(src='@/assets/curso/tema3/6.png')

    p.mb-5 Las reuniones de trabajo, los comunicados internos y las plataformas colaborativas son mecanismos que pueden utilizarse para desarrollar estos tipos de comunicación.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Comunicación efectiva y asertiva

    p.mb-5 Dos cualidades fundamentales para fortalecer la comunicación interna y las relaciones comerciales son:

    









    separador
    #t_3_4.titulo-segundo.mb-5
      h2 3.4 Medios de comunicación















    separador
    #t_3_5.titulo-segundo.mb-5
      h2 3.5 Comunicación con los clientes


















    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 



    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 



    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 



    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 




    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 



    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 





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
