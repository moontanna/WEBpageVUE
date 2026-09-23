<script setup lang="ts">
const movies = ['Lord of the Rings', 'Star Wars', 'Dune', 'Batman']
</script>

<template>
  <section class="view-panel">
    <p class="eyebrow">Arreglos</p>
    <h1>Recorrido de movies</h1>
    <ul class="clean-list"><li v-for="movie in movies" :key="movie">{{ movie }}</li></ul>
  </section>
</template>
