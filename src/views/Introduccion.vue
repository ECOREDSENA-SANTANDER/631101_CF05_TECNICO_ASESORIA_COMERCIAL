<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-8
            .row.mb-4
              .col-lg-2
                img.img-t(src='@/assets/curso/intro/1.svg')
              .col-lg-10.ps-lg-0
                p.mb-0 Los procesos comerciales requieren el desarrollo de conocimientos, habilidades y estrategias que permitan identificar las necesidades de los clientes, ofrecer soluciones pertinentes y alcanzar los objetivos establecidos por las organizaciones.
            p.mb-4 Para ello, es fundamental comprender los principios de la venta, las funciones del vendedor, las técnicas y estrategias comerciales, así como los procedimientos relacionados con las transacciones, los medios de pago, la documentación y las condiciones de negociación, garantizando el cumplimiento de las políticas organizacionales. Asimismo, la aplicación de técnicas de merchandising contribuye a organizar los productos y espacios comerciales, facilitar las decisiones de compra y fortalecer la experiencia del cliente en el punto de venta.
            p.mb-0 La comunicación constituye un elemento esencial para establecer relaciones comerciales efectivas, fortalecer la confianza y favorecer la satisfacción del cliente. El conocimiento de sus elementos, tipos, medios y herramientas facilita una interacción clara, asertiva y profesional durante las diferentes etapas del proceso de venta. La integración de estas capacidades contribuye al desarrollo de una asesoría comercial ética, eficiente y orientada a la calidad del servicio, promoviendo relaciones sostenibles entre las organizaciones y sus clientes.
          .col-lg-4
            img(src='@/assets/curso/intro/2.png')



    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
