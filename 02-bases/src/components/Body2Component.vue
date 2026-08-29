<script setup lang="ts">
import { ref } from 'vue'

const clicks = ref(0)

const saludar = () => {
  clicks.value++
}
</script>

<template>
  <div class="counter-wrapper">
    <p class="instruction">
      Este botón puede contar tus clicks con este código button @click
    </p>

    <button type="button" class="counter-button" @click="saludar()">
      Count is {{ clicks }}
    </button>
  </div>
</template>

<style scoped>
.counter-wrapper {
  background-color: #f2f1f3;
  padding: 24px;
  border-radius: 8px;
}

.instruction {
  color: #664182;
  font-family: system-ui, 'Segoe UI', Roboto, sans-serif;
  margin: 0 0 16px 0;
  font-size: 16px;
}

.counter-button {
  background-color: #aa3bff;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-family: system-ui, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.counter-button:hover {
  background-color: #8b2fb8;
}

.counter-button:active {
  background-color: #6b2590;
}
</style>
