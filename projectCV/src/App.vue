<script setup lang="ts">
import './style.css'
import HeaderComponent from './components/HeaderComponent.vue'
import notSoHeaderComponent from './components/notSoHeaderComponent.vue'
</script>

<template>
  <div id="pagina" class="contenedor">
    

    <notSoHeaderComponent />

    <header id="encabezado" class="encabezado">
      <h1 id="tituloPrincipal" name="tituloPrincipal">
        Mi información
      </h1>

      <p id="descripcion" name="descripcion">
        Soy estudiante de Administración en Tecnologías de la Información en la
        Universidad Autónoma de Yucatán. Mi objetivo es desarrollar
        habilidades en programación, administración de sistemas y desarrollo web. 
        Me gustan los videojuegos y pintar.
        <HeaderComponent />
      </p>
    </header>

    <header class="hero">
      <img
        alt="imgmc"
        class="logo"
        src="./assets/image.ico"
        width="300"
        height="200"
      />
    </header>

    <hr />

    <section id="formacion" class="seccion">
      <h2 id="tituloFormacion" name="tituloFormacion">
        Formación Académica
      </h2>

      <p id="textoFormacion" name="textoFormacion">
        Actualmente curso la carrera de Administración en Tecnologías de la
        Información, donde he aprendido fundamentos de programación, bases de
        datos, redes, desarrollo web y administración de sistemas.
      </p>
    </section>

    <div id="habilidades" class="seccion">
      <h2 id="tituloHabilidades" name="tituloHabilidades">
        Habilidades
      </h2>

      <ul id="listaHabilidades" name="listaHabilidades">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Vue 3</li>
        <li>PHP</li>
        <li>SQL</li>
      </ul>
    </div>

    <div id="objetivos" class="seccion">
      <h2 id="tituloObjetivos" name="tituloObjetivos">
        Objetivos Profesionales
      </h2>

      <ol id="listaObjetivos" name="listaObjetivos">
        <li>Dominar el desarrollo web con Vue.</li>
        <li>Aprender administración de servidores.</li>
        <li>Desarrollar aplicaciones funcionales.</li>
        <li>Obtener experiencia profesional en tecnologías de la información.</li>
      </ol>
    </div>

    <div id="recursos" class="seccion">
      <h2 id="tituloRecursos" name="tituloRecursos">
        Recursos de Aprendizaje
      </h2>

      <p id="textoRecursos" name="textoRecursos">
        Algunos sitios que utilizo para continuar aprendiendo son:
      </p>

      <ul id="listaEnlaces" name="listaEnlaces">
        <li>
          <a href="https://notebook.google.com/?pli=1" target="_blank"> Aca repaso con mis notas </a>
        </li>

        <li>
          <a href="https://www.youtube.com/" target="_blank"> Aqui veo videos de los temas </a>
        </li>

        <li>
          <a href="https://es2026.uady.mx/" target="_blank"> La página de la universidad </a>
        </li>
      </ul>
    </div>

    <footer id="piePagina" class="footer">
      <h3 id="tituloFooter" name="tituloFooter">
        Desarrollo Profesional
      </h3>

      <p id="textoFooter" name="textoFooter">
        Esta página fue desarrollada por mi
      </p>
    </footer>
  </div>
</template>
