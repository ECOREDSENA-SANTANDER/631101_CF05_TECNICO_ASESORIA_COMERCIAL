<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Aplicando estrategias de venta, comunicación y <em>merchandising.</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar la importancia de las fases de la venta, el rol de la comunicación y el impacto del <em>merchandising</em> en el fortalecimiento de la relación con el cliente.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Una empresa detecta que un cliente duda porque no comprende cómo el producto resolverá su necesidad. ¿Qué acción comercial resulta más adecuada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Repetir únicamente el precio del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Explicar los beneficios vinculándolos con la necesidad identificada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Finalizar la conversación para evitar objeciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Presentar todos los productos sin establecer diferencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 2,
          texto:
            '¿Qué acción permite identificar mejor las necesidades del cliente durante una venta?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Formular preguntas pertinentes y realizar escucha activa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Presentar la oferta sin permitir intervenciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Centrar la conversación exclusivamente en descuentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar solicitar información sobre sus expectativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 3,
          texto:
            'Durante la presentación de una oferta comercial, ¿qué práctica fortalece la confianza del cliente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar información ambigua para generar expectativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prometer beneficios que el producto no ofrece.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comunicar características y beneficios de manera clara y verificable.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Evitar responder preguntas sobre las condiciones de compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la finalidad de argumentar los beneficios de un producto durante la venta?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Relacionar la oferta con las necesidades y expectativas del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir el proceso de comunicación con información técnica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar que el cliente compare diferentes alternativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar el número de productos exhibidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 5,
          texto:
            'Ante una objeción del cliente, ¿cuál es la actuación más apropiada del vendedor?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Interrumpir al cliente para defender inmediatamente la oferta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ignorar la inquietud y continuar con el cierre.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Escuchar la objeción, aclararla y responder con argumentos pertinentes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir siempre el precio como primera alternativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 6,
          texto: '¿Qué caracteriza un cierre de venta orientado al cliente?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presionar para obtener una decisión inmediata.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Confirmar que la alternativa seleccionada responde a la necesidad identificada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar aclarar las condiciones finales de la compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la participación del cliente en la decisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 7,
          texto: '¿Qué propósito tiene el seguimiento posterior a la venta?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Finalizar todo contacto con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar la satisfacción y fortalecer la relación comercial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplazar las acciones realizadas durante la venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar automáticamente el precio de futuras compras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 8,
          texto:
            'En comunicación comercial, ¿qué función cumple la escucha activa?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir comprender necesidades, inquietudes y expectativas del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir el tiempo destinado a conocer al cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar preguntas durante la conversación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la argumentación de la oferta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 9,
          texto:
            '¿Qué elemento favorece la efectividad de un mensaje comercial?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Emplear el mismo mensaje sin considerar el público.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utilizar términos complejos, aunque no sean necesarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Adaptar el contenido al perfil y las necesidades del receptor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incluir la mayor cantidad posible de información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es una práctica adecuada en la comunicación no verbal durante la atención comercial?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener una actitud coherente con el mensaje transmitido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar cualquier expresión que acompañe el mensaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar otras actividades mientras el cliente habla.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizar gestos que contradigan la información ofrecida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 11,
          texto:
            '¿Qué ventaja ofrece el uso integrado de canales digitales en la comunicación comercial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite mantener interacción y ofrecer información oportuna al cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elimina la necesidad de definir mensajes comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Garantiza por sí solo el cierre de todas las ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impide adaptar la comunicación a diferentes públicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 12,
          texto:
            '¿Qué criterio debe orientar la selección de un canal de comunicación comercial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La preferencia personal del vendedor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las características del público y el propósito del mensaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La cantidad de productos almacenados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El costo de producción de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 13,
          texto:
            '¿Qué busca el <em>merchandising</em> mediante la ubicación estratégica de los productos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar su identificación y estimular el interés de compra.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ocultar los productos con menor rotación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir la atención y el servicio al cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el espacio destinado a la exhibición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 14,
          texto:
            '¿Qué práctica contribuye a una exhibición comercial efectiva?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener productos sin clasificación ni criterio de ubicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar los productos considerando visibilidad, acceso y coherencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ubicar toda la mercancía en un único punto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar actualizar la presentación del espacio comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 15,
          texto:
            '¿Por qué es importante mantener orden y disponibilidad en el punto de venta?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque facilita la experiencia de compra y el acceso a los productos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque elimina la necesidad de comunicación comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque reemplaza la gestión de inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque garantiza que todos los clientes compren.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 16,
          texto:
            'Una empresa desea destacar un producto nuevo en el punto de venta. ¿Qué acción corresponde al <em>merchandising</em>?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ubicarlo estratégicamente y apoyar su presentación con información clara.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Modificar únicamente los registros contables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la comunicación sobre sus beneficios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacenarlo fuera del alcance del consumidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 17,
          texto:
            '¿Qué relación existe entre <em>merchandising</em> y comportamiento del consumidor?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Puede facilitar la elección mediante una presentación organizada y atractiva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Determina obligatoriamente la decisión del consumidor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina las preferencias individuales del cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo interviene después de realizar la compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 18,
          texto:
            '¿Qué resultado puede generar la coherencia entre comunicación comercial y exhibición?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una experiencia de compra más clara y consistente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una disminución necesaria de la variedad ofrecida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación del proceso de venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La sustitución de la atención al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 19,
          texto:
            '¿Qué indicador aporta información sobre la efectividad de una acción de <em>merchandising</em>?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La rotación de los productos ubicados en la exhibición.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El número de cargos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La antigüedad de los equipos de oficina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de documentos internos emitidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
        {
          id: 20,
          texto:
            '¿Qué práctica integra adecuadamente ventas, comunicación y <em>merchandising</em>?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conocer al cliente, comunicar una propuesta de valor y facilitar la elección en el punto de venta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Concentrar la estrategia únicamente en reducir precios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Separar la comunicación de las necesidades del cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exhibir productos sin considerar el proceso de compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra una adecuada apropiación de los contenidos relacionados con ventas, comunicación y <em>merchandising</em>.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
