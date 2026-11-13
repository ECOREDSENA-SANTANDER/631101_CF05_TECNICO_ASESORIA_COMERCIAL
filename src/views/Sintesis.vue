<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-right") La venta y la comunicación integran conocimientos, estrategias y procedimientos esenciales para el desempeño del asesor comercial; esta síntesis organiza los principales conceptos relacionados con el proceso de venta, las técnicas comerciales, las transacciones, los medios de pago y la comunicación con los clientes, destacando su relación con la identificación de necesidades, la negociación y el cumplimiento de los acuerdos comerciales. Su propósito es facilitar la apropiación de los contenidos y fortalecer las competencias necesarias para desarrollar una asesoría comercial efectiva, responsable y orientada a la satisfacción del cliente.    

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Organiza los conceptos fundamentales de venta, transacciones comerciales y comunicación, destacando su aplicación en la asesoría y atención al cliente.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
