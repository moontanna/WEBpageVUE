<script setup lang="ts">
const numbers = [1, 2, 3, 4, 5, 6]
</script>

<template>
  <section class="view-panel">
    <p class="eyebrow">Arreglos</p>
    <h1>Recorrido</h1>
    <ol class="clean-list"><li v-for="(number, index) in numbers" :key="number">{{ index + 1 }} - {{ number }}</li></ol>
  </section>
</template>
