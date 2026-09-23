<script setup lang="ts">
import { alumno, profesor } from '../constants/people'
</script>

<template>
  <section class="view-panel">
    <p class="eyebrow">Contenido</p>
    <h1>Importación y exportación</h1>
    <p>Datos importados: {{ alumno.lastname }} y {{ profesor.lastname }}.</p>
  </section>
</template>
