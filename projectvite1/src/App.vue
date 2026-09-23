<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import { RouterView } from './router'
</script>

<template>
  <Navbar />
  <main>
    <p>Bienvenido, selecciona una opción del menú para ver los contenidos de la página.</p>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  padding: 10px;
  text-align: justify;
}
</style>


