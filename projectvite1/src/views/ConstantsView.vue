<script setup lang="ts">
import { alumno, profesor } from '../constants/people'
</script>

<template>
  <section class="view-panel">
    <p class="eyebrow">Contenido</p>
    <h1>Constants</h1>
    <div class="example-grid">
      <article><h2>Alumno</h2><p>{{ alumno.lastname }}, {{ alumno.age }} años</p></article>
      <article><h2>Profesor</h2><p>{{ profesor.lastname }}, {{ profesor.age }} años</p></article>
    </div>
  </section>
</template>
