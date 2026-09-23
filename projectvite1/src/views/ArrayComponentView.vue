<script setup lang="ts">
import { ref } from 'vue'

const values = ref(['Vue', 'TypeScript', 'Vite'])
const newValue = ref('')

function addValue() {
  if (newValue.value.trim()) {
    values.value.push(newValue.value.trim())
    newValue.value = ''
  }
}
</script>

<template>
  <section class="view-panel">
    <p class="eyebrow">Componentes</p>
    <h1>Comp. Tipo Array</h1>
    <div class="inline-form"><input v-model="newValue" placeholder="Nuevo valor"><button type="button" @click="addValue">Agregar</button></div>
    <ul class="clean-list"><li v-for="value in values" :key="value">{{ value }}</li></ul>
  </section>
</template>
