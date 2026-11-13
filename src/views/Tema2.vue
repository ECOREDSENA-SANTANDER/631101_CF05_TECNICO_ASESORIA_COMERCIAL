<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Transacciones comerciales

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 Las transacciones comerciales son operaciones mediante las cuales dos o más partes realizan un intercambio de bienes o servicios a cambio de una contraprestación económica, generalmente dinero. Estas operaciones se desarrollan bajo condiciones previamente acordadas entre el comprador y el vendedor.
            br 
            br 
            p.mb-0 Las transacciones comerciales no se limitan al intercambio de productos por dinero. También comprenden las actividades necesarias para formalizar la operación, registrar la información, realizar el pago, entregar el producto o prestar el servicio y cumplir los compromisos establecidos.

    .bg9.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0.ps-lg-5.pe-lg-5 #[b Ejemplo:] una persona compra una nevera en un establecimiento comercial. Durante la transacción, el asesor confirma el precio, informa sobre las alternativas de pago, registra la compra, gestiona la factura y comunica las condiciones de entrega y garantía.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema2/2.png')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0
          .row.justify-content-center.align-items-center(titulo="Elementos de una transacción comercial")
            .col-lg-12
              p.mb-4 Para que una transacción comercial se desarrolle adecuadamente, deben identificarse los siguientes elementos descritos en la tabla.
              .titulo-sexto.mb-4
                h5 Tabla 7.
                | Elementos de una transacción comercial
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-10.mb-lg-0.mb-4
                  .tabla-a.tabla-peq.tab-peq7.mb-0
                    table
                      thead
                        tr
                          th Elemento
                          th Descripción
                      tbody
                        tr.bgw
                          td Comprador
                          td Persona o empresa que adquiere un producto o servicio para satisfacer una necesidad.
                        tr.bgr
                          td Vendedor
                          td Persona o empresa que ofrece y comercializa bienes o servicios.
                        tr.bgw
                          td Bien o servicio
                          td Producto o actividad que constituye el objeto de la operación comercial.
                        tr.bgr
                          td Precio
                          td Valor económico acordado por las partes para realizar la compra.
                        tr.bgw
                          td Forma de pago
                          td Medio o mecanismo utilizado para cancelar el valor de la transacción.
                        tr.bgr
                          td Condiciones comerciales
                          td Acuerdos relacionados con descuentos, plazos, garantías, entrega y otras obligaciones.
                        tr.bgw
                          td Soportes documentales
                          td Documentos que respaldan la operación, como facturas, recibos y comprobantes de pago.
                .col-lg-2
                  p.mb-0 Estos elementos permiten establecer con claridad las responsabilidades de cada participante y facilitan el cumplimiento de los acuerdos comerciales. Dependiendo del tipo de operación, pueden intervenir otros servicios, como transporte, instalación, seguros o asistencia técnica.
          .row.justify-content-center.align-items-center(titulo="Tipos de transacciones comerciales")
            .col-lg-12
              p.mb-4 Las transacciones comerciales pueden clasificarse según el momento en que se realiza el pago.
              .titulo-sexto.mb-4
                h5 Tabla 8.
                | Tipos de transacciones comerciales
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-10.mb-lg-0.mb-4
                  .tabla-a.tabla-peq.tab-peq8.mb-0
                    table
                      thead
                        tr
                          th Tipo
                          th Descripción
                          th Ejemplo
                      tbody
                        tr.bgw
                          td Transacción de contado
                          td El comprador cancela el valor total de la compra en el momento acordado, generalmente al efectuar la operación.
                          td Un cliente compra una camisa y paga inmediatamente mediante tarjeta débito.
                        tr.bgr
                          td Transacción a crédito
                          td El comprador adquiere el bien o servicio y se compromete a pagar posteriormente, de acuerdo con las condiciones pactadas.
                          td Una empresa adquiere equipos de oficina y acuerda pagar la factura en 30 días.
                .col-lg-2
                  p.mb-0 En las transacciones a crédito es importante informar las fechas de vencimiento, los intereses cuando correspondan, los requisitos de financiación y las consecuencias del incumplimiento.
          .row.justify-content-center.align-items-center(titulo="Proceso de una transacción comercial")
            .col-lg-12
              p.mb-4 Una transacción comercial comprende diferentes actividades que deben desarrollarse de manera organizada para garantizar el cumplimiento de los acuerdos entre comprador y vendedor.
              .titulo-sexto.mb-4
                h5 Tabla 9.
                | Etapas del proceso de una transacción comercial
              .tabla-a.tabla-peq.tab-peq9.mb-4
                table
                  thead
                    tr
                      th Etapa
                      th Descripción
                  tbody
                    tr.bgw
                      td 1. Identificación de la necesidad
                      td El cliente expresa su interés en adquirir un producto o contratar un servicio.
                    tr.bgr
                      td 2. Presentación de la oferta
                      td El asesor informa sobre características, precios, beneficios y condiciones comerciales.
                    tr.bgw
                      td 3. Acuerdo de compra
                      td Las partes aceptan las condiciones de la operación, incluyendo precio, pago y entrega.
                    tr.bgr
                      td 4. Formalización
                      td Se registra la operación y se generan los documentos comerciales correspondientes.
                    tr.bgw
                      td 5. Pago
                      td El comprador realiza el pago o asume el compromiso de cancelarlo en el plazo establecido.
                    tr.bgr
                      td 6. Entrega
                      td El vendedor entrega el producto o presta el servicio según las condiciones acordadas.
                    tr.bgw
                      td 7. Seguimiento
                      td Se atienden inquietudes posteriores y se gestionan garantías, devoluciones o solicitudes cuando corresponda.
              p.mb-0 Estas etapas pueden variar según el tipo de producto, las políticas de la empresa y la complejidad de la operación. Su correcta aplicación contribuye a prevenir errores, mantener registros confiables y fortalecer la confianza del cliente.
          .row.justify-content-center.align-items-center(titulo="Soportes de las transacciones comerciales")
            .col-lg-12
              p.mb-4 Los soportes comerciales son documentos físicos o electrónicos que permiten registrar y respaldar las operaciones realizadas entre compradores y vendedores.
              p.mb-4 En Colombia, uno de los principales documentos es la factura de venta, que acredita la operación comercial y contiene información sobre el vendedor, el comprador cuando corresponda, los bienes o servicios comercializados, sus valores y los impuestos aplicables. 
              .bg10.p-lg-5.p-4.mb-4
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6
                    p.mb-lg-0.mb-4 La facturación electrónica se encuentra regulada por la Dirección de Impuestos y Aduanas Nacionales (DIAN), de acuerdo con las obligaciones y condiciones establecidas para cada responsable. También pueden utilizarse otros soportes, como comprobantes de pago, recibos de caja, órdenes de compra, documentos equivalentes y notas crédito o débito, según la naturaleza de la operación.
                  .col-lg-6
                    img(src='@/assets/curso/tema2/3.png')
              p.mb-0 Es importante distinguir que los medios de pago, como las tarjetas bancarias o las transferencias electrónicas, no son documentos comerciales por sí mismos. Los comprobantes generados mediante su utilización pueden servir como evidencia del pago realizado.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Formas de pago

    p.mb-4(data-aos="fade-right") Las formas de pago son los mecanismos mediante los cuales el comprador cumple con la obligación económica adquirida durante una transacción comercial.

    p.mb-5(data-aos="fade-left") Su selección depende de las preferencias del cliente, las condiciones establecidas por la empresa, el valor de la compra y los medios disponibles.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/4.png')
      .col-lg-8
        .titulo-sexto.mb-4
          h5 Tabla 10.
          | Principales formas de pago en las transacciones comerciales
        .tabla-a.tabla-peq.tab-peq10.mb-0
          table
            thead
              tr
                th Forma de pago
                th Descripción
                th Ejemplo
            tbody
              tr
                td Efectivo
                td Pago realizado mediante billetes y monedas de curso legal.
                td Cancelar una compra directamente en la caja del establecimiento.
              tr
                td Tarjeta débito
                td Permite realizar pagos utilizando los recursos disponibles en una cuenta bancaria.
                td Pagar productos mediante un datáfono.
              tr
                td Tarjeta de crédito
                td Permite efectuar compras utilizando un cupo de crédito otorgado por una entidad financiera.
                td Adquirir un electrodoméstico mediante una tarjeta de crédito.
              tr
                td Transferencia bancaria
                td Consiste en trasladar dinero entre cuentas a través de canales financieros.
                td Pagar una factura desde una aplicación bancaria.
              tr
                td PSE
                td Sistema que permite realizar pagos electrónicos desde cuentas de entidades financieras vinculadas.
                td Cancelar una compra en línea mediante PSE.
              tr
                td Billetera digital
                td Aplicación que permite administrar recursos y realizar pagos o transferencias electrónicas.
                td Pagar un producto mediante una billetera digital.
              tr
                td Cheque
                td Documento mediante el cual una persona ordena a una entidad bancaria pagar una cantidad determinada de dinero.
                td Cancelar una obligación comercial mediante cheque.
    
    p.mb-0(data-aos="fade-right") El asesor comercial debe conocer las formas de pago autorizadas por la empresa, explicar sus condiciones y orientar al cliente durante el proceso. Asimismo, debe verificar la confirmación del pago según los procedimientos establecidos, evitando considerar como definitiva una operación que aún se encuentra pendiente de aprobación.


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Documentos comerciales

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7
        .bg10.p-0
          .row.justify-content-center.align-items-center.mb-lg-0.mb-4
            .col-lg-8.p-5
              p.mb-4 Los documentos comerciales son registros físicos o electrónicos utilizados para formalizar, respaldar y controlar las operaciones de compra y venta de bienes o servicios.
              p.mb-0 Estos documentos permiten establecer las condiciones de una transacción, registrar compromisos entre las partes y disponer de información para los procesos administrativos, contables y tributarios.
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/tema2/5.svg')
      .col-lg-5
        p.mb-4 Importancia de los documentos comerciales
        ul.lista-ul.mb-0
          li.d-flex.mb-1
            i.fas.fa-user
            p.mb-0 Respaldan las operaciones realizadas entre compradores y vendedores.
          li.d-flex.mb-1
            i.fas.fa-user
            p.mb-0 Facilitan el registro y control de las actividades comerciales.
          li.d-flex.mb-1
            i.fas.fa-user
            p.mb-0 Permiten verificar valores, cantidades, fechas y condiciones de negociación.
          li.d-flex.mb-1
            i.fas.fa-user
            p.mb-0 Constituyen medios de prueba de las operaciones y obligaciones documentadas.
          li.d-flex.mb-1
            i.fas.fa-user
            p.mb-0 Apoyan la atención de reclamaciones, garantías y solicitudes de los clientes.
          li.d-flex.mb-0
            i.fas.fa-user
            p.mb-0 Contribuyen al cumplimiento de las obligaciones legales y tributarias.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Clasificación de los documentos comerciales

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-7
        .titulo-sexto.mb-4
          h5 Tabla 11.
          |  Principales documentos utilizados en las transacciones comerciales
        .tabla-a.tabla-peq.tab-peq11.mb-0
          table
            thead
              tr
                th Documento
                th Descripción
            tbody
              tr
                td Cotización
                td Presenta una propuesta de precios, características y condiciones para la adquisición de productos o servicios.
              tr
                td Orden de compra
                td Documento mediante el cual el comprador solicita formalmente bienes o servicios al proveedor.
              tr
                td Pedido
                td Registra los productos o servicios solicitados, sus cantidades y condiciones acordadas.
              tr
                td Remisión
                td Relaciona los productos enviados o entregados y facilita la verificación de cantidades y referencias.
              tr
                td Factura de venta
                td Documento que respalda la operación comercial y cumple funciones tributarias y, cuando reúne los requisitos legales, puede tener carácter de título valor.
              tr
                td Recibo de caja
                td Registra la recepción de dinero por parte de la empresa.
              tr
                td Comprobante de pago
                td Respalda la realización de un pago mediante el medio correspondiente.
              tr
                td Nota crédito
                td Documento utilizado para registrar determinados ajustes que disminuyen el valor de una operación previamente facturada.
              tr
                td Nota débito
                td Documento utilizado para registrar determinados ajustes que incrementan el valor de una operación previamente facturada.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/6.png')


    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Condiciones comerciales

    p.mb-4(data-aos="fade-right") Las condiciones comerciales son los acuerdos establecidos entre el comprador y el vendedor que determinan los términos bajo los cuales se realiza una transacción. Estos acuerdos permiten definir los compromisos y responsabilidades de cada parte, proporcionando claridad sobre los aspectos económicos, operativos y legales relacionados con la compra de productos o servicios.

    p.mb-4(data-aos="fade-right") Entre las principales condiciones comerciales se encuentran:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/tema2/7.png')
      .col-lg-6
        LineaTiempoD.color-secundario.activo
          .row.justify-content-center.align-items-center.mb-0(numero="1" titulo="Precio de venta")
            .col-lg-12
              p.mb-0 Valor económico acordado que el comprador debe pagar por el producto o servicio adquirido.
          .row.justify-content-center.align-items-center.mb-0(numero="2" titulo="Descuentos")
            .col-lg-12
              p.mb-0 Reducciones del precio que pueden aplicarse por promociones, cantidades adquiridas u otras condiciones autorizadas por la empresa.
          .row.justify-content-center.align-items-center.mb-0(numero="3" titulo="Forma de pago")
            .col-lg-12
              p.mb-0 Medio establecido para cancelar la compra, como efectivo, tarjeta bancaria o transferencia electrónica.
          .row.justify-content-center.align-items-center.mb-0(numero="4" titulo="Plazo de pago ")
            .col-lg-12
              p.mb-0 Periodo acordado para cumplir con la obligación económica, especialmente cuando se realizan ventas a crédito.
          .row.justify-content-center.align-items-center.mb-0(numero="5" titulo="Garantía")
            .col-lg-12
              p.mb-0 Obligación del vendedor o productor de responder por la calidad, idoneidad, seguridad y buen estado o funcionamiento de los productos o servicios, conforme a la normativa vigente.
          .row.justify-content-center.align-items-center.mb-0(numero="6" titulo="Devoluciones y cambios")
            .col-lg-12
              p.mb-0 Condiciones y procedimientos para gestionar solicitudes de cambio o devolución, respetando los derechos del consumidor.
          .row.justify-content-center.align-items-center.mb-0(numero="7" titulo="Entrega")
            .col-lg-12
              p.mb-0 Acuerdos relacionados con el lugar, los plazos, el transporte y la recepción de los productos adquiridos.
          .row.justify-content-center.align-items-center.mb-0(numero="8" titulo="Servicios adicionales")
            .col-lg-12
              p.mb-0 Prestaciones complementarias que pueden incluir instalación, mantenimiento, capacitación o asistencia técnica, según las características del producto o servicio.

    p.mb-0(data-aos="fade-right") La definición de estas condiciones permite prevenir malentendidos, facilitar el cumplimiento de los compromisos y fortalecer la confianza entre las partes. Por esta razón, el asesor comercial debe verificar que las condiciones ofrecidas estén autorizadas por la organización y cumplan con la normativa vigente. Asimismo, debe informar de manera clara y oportuna sobre posibles restricciones, costos adicionales, garantías y procedimientos de reclamación, contribuyendo a una negociación transparente y a la toma de decisiones de compra informadas.


    separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4 Condiciones de entrega

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.mb-lg-0.mb-4
        img.mb-4.d-none.d-lg-block(src='@/assets/curso/tema2/8.svg')
        p.mb-4 Las condiciones de entrega son los acuerdos que establecen cómo, cuándo y dónde el vendedor debe entregar los productos adquiridos por el comprador. Constituyen una parte importante de la transacción comercial, debido a que influyen en los costos, los tiempos de cumplimiento y la satisfacción del cliente.
        p.mb-0 Estas condiciones deben definirse antes de finalizar la negociación, especialmente cuado la mercancía requiere transporte, almacenamiento, instalación o procedimientos especiales.
      .col-lg-8
        .titulo-sexto.mb-4
          h5 Tabla 12.
          | Principales condiciones de entrega de mercancías
        .tabla-a.tabla-peq.tab-peq12.mb-0
          table
            thead
              tr
                th Condición
                th Descripción
            tbody
              tr
                td Lugar de entrega
                td Dirección o establecimiento donde el comprador recibirá la mercancía.
              tr
                td Plazo de entrega
                td Fecha o periodo acordado para entregar los productos.
              tr
                td Transporte
                td Medio utilizado para trasladar la mercancía hasta el destino establecido
              tr
                td Costos de envío
                td Valor del transporte y determinación de quién asume este costo.
              tr
                td Estado de la mercancía
                td Condiciones de calidad, cantidad, embalaje y presentación que deben cumplirse.
              tr
                td Riesgos durante el transporte
                td Responsabilidades frente a pérdidas, daños o inconvenientes durante el traslado, conforme a la ley y los acuerdos aplicables.
              tr
                td Recepción del producto
                td Procedimiento mediante el cual el comprador confirma la recepción de la mercancía.
              tr
                td Incumplimientos o demoras
                td Acciones previstas cuando se presentan retrasos o dificultades en la entrega.
    
    p.mb-4(data-aos="fade-right") La empresa debe gestionar el despacho, cumplir las condiciones informadas y proporcionar los mecanismos necesarios para atender cualquier inconveniente relacionado con la entrega.

    .row.justify-content-center.align-items-stretch.mb-0(data-aos="fade-left")
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg2.p-lg-5.p-4.h-100.text-center 
          .caja-img.mb-4
            img(src='@/assets/curso/tema2/9.svg')
          h3.mb-4 Condiciones de entrega en el comercio internacional
          p.mb-0 Cuando las transacciones comerciales implican el transporte internacional de mercancías, pueden utilizarse los términos internacionales de comercio. Estos términos son establecidos por la Cámara de Comercio Internacional (ICC) y permiten definir las responsabilidades del comprador y del vendedor respecto a las actividades, los costos y los riesgos relacionados con la entrega de mercancías.
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg3.p-lg-5.p-4.h-100.text-center 
          .caja-img.mb-4
            img(src='@/assets/curso/tema2/10.svg')
          h3.mb-4 Importancia de establecer condiciones de entrega claras
          p.mb-4 Definir adecuadamente las condiciones de entrega permite organizar los procesos logísticos, prevenir incumplimientos y proporcionar información confiable al comprador. Por esta razón, el asesor comercial debe comunicar los plazos, costos, responsabilidades y procedimientos establecidos por la empresa, evitando ofrecer compromisos que no puedan garantizarse.
          p.mb-0 El cumplimiento de estas condiciones contribuye a fortalecer la confianza del cliente, mejorar la calidad del servicio y favorecer relaciones comerciales duraderas.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
