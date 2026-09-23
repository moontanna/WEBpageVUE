<template>
  <div>
    <h3>{{ props.titulo }}</h3>
    <p>Valor recibido: {{ props.contador }}</p>
    <button @click="handleClick">Sumar 5</button>
    <p>{{ props.mensaje2 }}</p>
  </div>
</template>

<script setup lang="ts">
// se define un evento incrementar
const emit=defineEmits<{
    (x: 'incrementar',
    cont: number,
    texto: string
    ): void
    (x: 'resetear',
        valor:string
    ): void
}>()
// Definimos los props que esperamos recibir del padre
const props=defineProps({
  titulo: String,
  contador: {
    type: Number,
    default: 0
  },
  mensaje2: {
    type: String,
    default: 'Sin valor'
  }
})

function handleClick(){
    // Emitimos el evento y pasamos un
    // parámetro (por ejemplo, el número 5,
    // en conjunto con el valor de la cadena)
    // incrementar sirve para escuchar un
    // evento personalizado que el componente
    // hijo está emitiendo
    emit('incrementar', 5, "Hola valor")
    emit('resetear','Acción de resetaer')
}

</script>

<style scoped>
</style>