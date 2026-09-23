<script setup lang="ts">
import { ref } from 'vue'
import { navegar } from '../router'

const mostrarContenido = ref(false)
const mostrarArreglos = ref(false)
const mostrarComponentes = ref(false)
const mostrarRutas = ref(false)

function go(path: string) {
  navegar(path)
  mostrarContenido.value = false
  mostrarArreglos.value = false
  mostrarComponentes.value = false
  mostrarRutas.value = false
}

function mostrarMenuContenido() {
  mostrarContenido.value = !mostrarContenido.value
}

function mostrarMenuArreglos() {
  mostrarArreglos.value = !mostrarArreglos.value
}

function mostrarMenuComponentes() {
  mostrarComponentes.value = !mostrarComponentes.value
}

function mostrarMenuRutas() {
  mostrarRutas.value = !mostrarRutas.value
}
</script>

<template>
  <header class="navbar">
    <button class="brand" type="button" @click="go('/')">Mi Wiki</button>
    <nav aria-label="Navegación principal">
      <button type="button" @click="go('/')">Inicio</button>

      <div class="nav-group">
        <button type="button" @click="mostrarMenuContenido">Contenido</button>
        <div v-if="mostrarContenido" class="submenu">
          <button type="button" @click="go('/contenido/constants')">Constants</button>
          <button type="button" @click="go('/contenido/object-literals')">Object literals</button>
          <button type="button" @click="go('/contenido/header-component')">HeaderComponent</button>
          <button type="button" @click="go('/contenido/v-bind')">Uso de v-bind</button>
          <button type="button" @click="go('/contenido/importacion-exportacion')">Importación y exportación</button>
        </div>
      </div>

      <div class="nav-group">
        <button type="button" @click="mostrarMenuArreglos">Arreglos</button>
        <div v-if="mostrarArreglos" class="submenu">
          <button type="button" @click="go('/arreglos/recorrido-movies')">Recorrido de movies</button>
          <button type="button" @click="go('/arreglos/recorrido')">Recorrido</button>
        </div>
      </div>

      <div class="nav-group">
        <button type="button" @click="mostrarMenuComponentes">Componentes</button>
        <div v-if="mostrarComponentes" class="submenu">
          <button type="button" @click="go('/componentes/tipo-array')">Comp. Tipo Array</button>
          <button type="button" @click="go('/componentes/padre')">Padre</button>
        </div>
      </div>

      <div class="nav-group">
        <button type="button" @click="mostrarMenuRutas">Rutas</button>
        <div v-if="mostrarRutas" class="submenu">
          <button type="button" @click="go('/rutas/example')">Example</button>
          <button type="button" @click="go('/rutas/about')">About</button>
        </div>
      </div>
    </nav>
  </header>
</template>
