<script setup lang="ts">
import { ref } from 'vue'

const number = ref(22)
const id = 'valor-vinculado'
const highlighted = ref(true)
</script>

<template>
  <section class="view-panel">
    <p class="eyebrow">Contenido</p>
    <h1>Uso de v-bind</h1>
    <label>Valor: <input v-model.number="number" type="number"></label>
    <p :id="id" :class="{ highlighted }">El valor vinculado es {{ number }}</p>
    <button type="button" @click="highlighted = !highlighted">Cambiar clase</button>
  </section>
</template>
