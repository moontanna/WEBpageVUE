<script lang="ts" setup>
import { ref } from 'vue'
// @ts-expect-error: Vue component declarations are provided by the Vite plugin at runtime.
import childrenComponent from './childrenComponent.vue'
const mensaje=ref("Hola desde el padre")
const mensaje2=ref("Ejemplo de parámetro del padre al hijo")
const mensaje3=ref('')
const mensaje4=ref('')
const numero=ref(10)
const total=ref(0)

// Función que recibe los datos del hijo
function sumarAlTotal(valor: number, mensaje: string){
    total.value+=valor;
    mensaje3.value=mensaje
}

function mensajaDesdeHijo(valor: string){
    mensaje4.value=valor;
}

</script>
<template>
<p>Total: {{ total }}</p>
<p>El valor del mensaje del hijo es: {{ mensaje3 }}</p>
<p>El valor de mensaje en el segundo método es: {{ mensaje4 }}</p>
<!-- Pasamos los parámetros usando bind -->
<!-- incrementar interfiere como la función que se va a ejecutar
dentro del hijo, es como si dicho parámetro sea el punto intermedio
de comunicación entre el padre y el hijo -->
<childrenComponent :titulo="mensaje" :contador="numero"
:mensaje2="mensaje2" @incrementar="sumarAlTotal"
@resetear="mensajaDesdeHijo" @texto="" />

</template>