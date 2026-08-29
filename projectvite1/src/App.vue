<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import { ref } from 'vue';


const number=ref(0);
const addOne=()=>{
  number.value++
}
const myId="coffe"
let myCondition=true
let condition2=false
const movies=["lord of the rings","Star Wars", "Dune", "Batman"]
</script>

<template>
 
  <HeaderComponent></HeaderComponent>
  
  <h1 class="title" :class="myCondition ? 'highlight' : 'red'"> Hola a todos</h1>
  <h2 @click="addOne" :id="myId"> El valor de number es: {{ number}}</h2>

<h3 v-if="myCondition"> Respuesta derivada de una directiva</h3>
<h2 v-else-if="condition2"> Condición 2</h2>
<h3 v-else> No se cumplen las condiciones</h3>

  <h4 v-show="myCondition"> Se muestra el mensaje</h4>
  <h3 v-if="myCondition"> Comprobación de condición</h3>
  <div>
    <p v-for="movie in movies" :key="movie">
      {{ movie }}
    </p>
    <!-- si queremos definir o controlar un index establecido la definición del for quedaria de la siguiente manera -->
    <div v-for="(movie, index) in movies" :key="index">
      {{ index + 1 }} - {{ movie }}
    </div>
    <!-- se le suma un 1 ya que es un arreglo y el indice comienza con 0 -->
  </div>
    



  <HelloWorld />
</template>
<style scoped>
.title{
  color: blueviolet;
}
.highlight{
  color: yellow;
}
.red{
  color: red;
}
</style>


