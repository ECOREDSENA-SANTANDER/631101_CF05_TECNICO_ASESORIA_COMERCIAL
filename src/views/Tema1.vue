<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La venta
      
    p.mb-5 La venta es una actividad comercial mediante la cual una persona u organización ofrece productos o servicios a un cliente a cambio de una contraprestación económica. Su propósito no se limita a realizar una transacción, sino que también comprende la identificación de necesidades, la presentación de soluciones y la construcción de relaciones comerciales basadas en la confianza y la satisfacción del cliente.

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secund.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 A lo largo de la historia, las actividades comerciales han evolucionado desde el intercambio directo de bienes, conocido como trueque, hasta los actuales sistemas de compraventa que incorporan medios de pago electrónicos, plataformas digitales y diferentes canales de comercialización. Esta transformación ha permitido ampliar los mercados y facilitar las relaciones entre compradores y vendedores.
    
    p.mb-5 En las organizaciones, las ventas cumplen una función fundamental, debido a que contribuyen a la generación de ingresos, la sostenibilidad empresarial y el cumplimiento de los objetivos comerciales. Por esta razón, el personal encargado de la asesoría comercial debe desarrollar habilidades de comunicación, negociación, atención al cliente y conocimiento de los productos o servicios ofrecidos.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Diferentes perspectivas de la venta
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-6
            .tabla-a.tabla-peq.tab-peq1.mb-0
              table
                thead
                  tr
                    th Perspectiva
                    th Explicación
                tbody
                  tr
                    td Comercial
                    td Proceso de intercambio de productos o servicios mediante el cual se busca satisfacer las necesidades del cliente.
                  tr
                    td Jurídica
                    td Operación contractual que establece obligaciones para el comprador y el vendedor, conforme a las condiciones acordadas y la legislación aplicable.
                  tr
                    td Contable
                    td Operación económica que genera ingresos por la comercialización de bienes o la prestación de servicios, de acuerdo con los criterios contables correspondientes.
                  tr
                    td Administrativa
                    td Actividad estratégica que contribuye al cumplimiento de las metas comerciales y al fortalecimiento de las relaciones con los clientes.
          .col-lg-3
            img(src='@/assets/curso/tema1/2.png')
          .col-lg-3
            .bg1.p-4.cen
              p.mb-0 Ejemplo de aplicación: cuando un asesor comercial ofrece un computador, su función no consiste únicamente en informar el precio. También debe identificar para qué lo necesita el cliente, explicar sus características y beneficios, presentar las condiciones de pago y orientar la decisión de compra.


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Herramientas de la venta

    p.mb-5 Las herramientas de ventas son recursos, aplicaciones y procedimientos que facilitan la planificación, ejecución y seguimiento de las actividades comerciales. Su utilización permite organizar la información, mejorar la atención al cliente, administrar oportunidades de negocio y fortalecer la productividad del equipo de ventas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Principales herramientas de venta
        .tabla-a.tab2.mb-0
          table
            thead
              tr
                th Herramienta
                th Función
                th Ejemplo de aplicación
            tbody
              tr
                td Sistemas CRM
                td Administrar información de clientes y oportunidades comerciales.
                td Registrar contactos y realizar seguimiento a cotizaciones.
              tr
                td Catálogos comerciales
                td Organizar las características, precios y beneficios de los productos.
                td Presentar alternativas de productos según las necesidades del cliente.
              tr
                td Herramientas ofimáticas
                td Elaborar cotizaciones, informes y registros comerciales.
                td Utilizar hojas de cálculo para organizar pedidos.
              tr
                td Plataformas de comercio electrónico
                td Facilitar la comercialización de productos y servicios por medios digitales.
                td Gestionar pedidos mediante una tienda virtual.
              tr
                td Canales de comunicación
                td Facilitar el contacto y la atención comercial.
                td Atender solicitudes mediante correo electrónico o mensajería empresarial.

    p.mb-0 La selección de estas herramientas depende del tipo de empresa, las características del producto o servicio y las necesidades de los clientes.


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Clasificación de vendedores
    
    .row.mb-5
      .col-lg-12
        img(src='@/assets/curso/tema1/3.png')

    p.mb-4 Los vendedores pueden clasificarse según el conocimiento requerido para comercializar los productos, las funciones que desempeñan y la manera en que establecen relaciones con los clientes.
    p.mb-4 Según el conocimiento requerido:

    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-left")
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg2.p-lg-5.p-4.h-100
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/4.svg')
          h3.mb-4.text-center Vendedores de productos no técnicos
          p.mb-0.text-center Comercializan bienes o servicios que generalmente requieren explicaciones sencillas sobre sus características, beneficios y condiciones de compra. Por ejemplo, prendas de vestir o artículos de uso cotidiano. 
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg3.p-lg-5.p-4.h-100
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/5.svg')
          h3.mb-4.text-center Vendedores de productos técnicos
          p.mb-0.text-center Comercializan productos o servicios que requieren conocimientos especializados para orientar adecuadamente al cliente. Por ejemplo, equipos industriales, maquinaria o soluciones tecnológicas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Clasificación de vendedores según función comercial
        .tabla-a.tab3.mb-0
          table
            thead
              tr
                th Clasificación
                th Características
                th Ejemplo
            tbody
              tr
                td Tomadores de pedidos
                td Reciben y gestionan solicitudes de compra de clientes actuales.
                td Asesor que registra pedidos de productos de consumo masivo.
              tr
                td Creadores de demanda o vendedores misioneros
                td Promueven productos, fortalecen relaciones comerciales y generan interés sin necesariamente cerrar la venta directamente.
                td Representante que presenta productos farmacéuticos a profesionales autorizados.
              tr
                td Captadores de pedidos
                td Identifican oportunidades comerciales, buscan clientes, presentan propuestas y negocian para concretar ventas.
                td Ejecutivo comercial encargado de conseguir nuevos clientes empresariales.

    p.mb-5 Esta clasificación permite comprender que las funciones comerciales varían según los objetivos de la organización y el tipo de relación establecida con el cliente.

    .tit-doble.mb-4(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Modalidades de venta
    
    .row.justify-content-center.align-items-center.mb-0
      .col-12.bloquet-wrap
        .bloquet(data-aos="fade-left")
          .mod.mod--1
            img.mod__ima.d-none.d-lg-block(src="@/assets/curso/tema1/6.svg", alt="")
            p.mb-3 #[b Venta personal]
            p.mb-0 Se desarrolla mediante la interacción directa entre el asesor comercial y el cliente, ya sea en establecimientos comerciales, visitas empresariales o encuentros virtuales.
          .mod.mod--2
            img.mod__ima.d-none.d-lg-block(src="@/assets/curso/tema1/7.svg", alt="")
            p.mb-3 #[b Venta multinivel]
            p.mb-0 Corresponde a un modelo de comercialización mediante redes de distribuidores independientes, quienes pueden recibir compensaciones por sus ventas y, según el modelo, por la actividad comercial de su red. Su funcionamiento debe ajustarse a la normativa aplicable.
          .mod.mod--3
            img.mod__ima.d-none.d-lg-block(src="@/assets/curso/tema1/8.svg", alt="")
            p.mb-3 #[b Venta en línea o comercio electrónico]
            p.mb-0 Utiliza plataformas digitales para ofrecer productos o servicios, gestionar pedidos y facilitar transacciones comerciales.
          img.mod__mujer(src="@/assets/curso/tema1/9.svg", alt="")


    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Proceso de la venta

    p.mb-5 El proceso de venta comprende un conjunto de etapas organizadas que permiten identificar clientes potenciales, comprender sus necesidades, presentar alternativas y establecer acuerdos comerciales.

    .bg4.p-lg-5.p-4.mb-5
      .titulo-sexto.mb-4
        h5 Figura 1.
        | Etapas del proceso de venta
      img.img-t.img-a(src='@/assets/curso/tema1/10.svg', alt='Secuencia de siete etapas del proceso de venta, desde la prospección y el acercamiento hasta el cierre, la posventa y la fidelización del cliente.')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b2.p-4.text-center
            .caja-img.mt-3.mb-4
              img(src='@/assets/curso/tema1/11.svg')
            h4.mb-4 Prospección
            p.mb-0 Consiste en identificar personas o empresas que podrían estar interesadas en adquirir los productos o servicios ofrecidos. Incluye la búsqueda de contactos, la identificación de oportunidades y la selección de clientes potenciales.
          .tarjeta.tarjeta--slyder.b2.p-4.text-center
            .caja-img.mt-3.mb-4
              img(src='@/assets/curso/tema1/12.svg')
            h4.mb-4 Acercamiento
            p.mb-0 Corresponde al primer contacto comercial. Durante esta etapa se prepara la información del cliente, se establece una comunicación respetuosa y se genera un ambiente de confianza.
          .tarjeta.tarjeta--slyder.b2.p-4.text-center
            .caja-img.mt-3.mb-4
              img(src='@/assets/curso/tema1/13.svg')
            h4.mb-4 Entrevista comercial
            p.mb-0 Permite profundizar en las necesidades, expectativas, preferencias y condiciones de compra del cliente mediante preguntas pertinentes y una comunicación asertiva.
          .tarjeta.tarjeta--slyder.b2.p-4.text-center
            .caja-img.mt-3.mb-4
              img(src='@/assets/curso/tema1/14.svg')
            h4.mb-4 Presentación y demostración
            p.mb-0 Consiste en explicar las características, ventajas y beneficios del producto o servicio, relacionándolos con las necesidades identificadas.
          .tarjeta.tarjeta--slyder.b2.p-4.text-center
            .caja-img.mt-3.mb-4
              img(src='@/assets/curso/tema1/15.svg')
            h4.mb-4 Negociación
            p.mb-0  Comprende el intercambio de propuestas y la resolución de inquietudes relacionadas con precios, condiciones comerciales, garantías, tiempos de entrega y otros aspectos relevantes.
          .tarjeta.tarjeta--slyder.b2.p-4.text-center
            .caja-img.mt-3.mb-4
              img(src='@/assets/curso/tema1/16.svg')
            h4.mb-4 Cierre de la venta
            p.mb-0 Se concreta cuando el cliente acepta la propuesta comercial y se formalizan las condiciones acordadas, de acuerdo con los procedimientos de la organización.
          .tarjeta.tarjeta--slyder.b2.p-4.text-center
            .caja-img.mt-3.mb-4
              img(src='@/assets/curso/tema1/17.svg')
            h4.mb-4 Posventa y fidelización
            p.mb-0 Incluye las actividades posteriores a la compra, como el seguimiento de la satisfacción, la atención de solicitudes, el cumplimiento de garantías y el fortalecimiento de relaciones comerciales a largo plazo.


    separador
    #t_1_4.titulo-segundo.mb-5
      h2 1.4 Estrategias y técnicas de ventas

    p.mb-0 Las estrategias de ventas son conjuntos de decisiones y acciones planificadas que orientan los esfuerzos comerciales hacia el cumplimiento de los objetivos organizacionales. Su formulación requiere conocer el mercado, identificar las características de los clientes y determinar los recursos disponibles.
    p.mb-5 Entre las estrategias comerciales se encuentran la segmentación de clientes, la diferenciación de productos, la fidelización, la venta cruzada y la utilización de canales digitales.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema1/18.png')
      .col-lg-7
        .bg5.p-4.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2
              img(src='@/assets/curso/tema1/19.svg')
            .col-lg-10
              p.mb-0 Por ejemplo, una empresa de electrodomésticos puede desarrollar una estrategia dirigida a clientes que buscan equipos de bajo consumo energético, ofreciendo asesoría especializada, alternativas de financiación y acompañamiento posventa.
        p.mb-0 Amplíe sus conocimientos sobre estrategias de ventas. Le invitamos a consultar el video del Ecosistema de Recursos Educativos Digitales SENA, para fortalecer la comprensión de las técnicas y estrategias comerciales que contribuyen a mejorar la atención al cliente y el desarrollo del proceso de venta.











    separador
    #t_1_5.titulo-segundo.mb-5
      h2 1.5 Venta consultiva









    separador
    #t_1_6.titulo-segundo.mb-5
      h2 1.6 Clínicas de venta




    separador
    #t_1_7.titulo-segundo.mb-5
      h2 1.7 #[em Merchandising] en el punto de venta




</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
