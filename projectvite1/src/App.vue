<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue';


//const numer=ref(0)
//const addOne()=>{
  //number.value++
//}
const myId="coffe"
let myCondition=true
let condition2=false
const movies=["lord of the rings","Star Wars", "Dune", "Batman"]
</script>

<template>
 
  <HeaderComponent></HeaderComponent>
  
  <h1 class="title" :class="myCondition ? 'highlight' : 'red'"> Hola a todos</h1>
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


