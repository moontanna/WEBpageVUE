<script setup lang="ts">
const comandosVue = [
	{
		nombre: 'npm install -g @vue/cli',
		paraQueSirve: 'instala Vue CLI de forma global para crear y administrar proyectos Vue.',
	},
	{
		nombre: 'vue create "nombre-del-proyecto"',
		paraQueSirve: 'crea un nuevo proyecto de Vue con el nombre indicado.',
	},
	{
		nombre: 'npm install',
		paraQueSirve: 'instala las dependencias definidas en package.json.',
	},
	{
		nombre: 'npm run dev',
		paraQueSirve: 'inicia el servidor de desarrollo para ejecutar la aplicación localmente.',
	},
]
</script>

<template>
	<section>
	
		<h2>Comandos básicos de Vue y npm</h2>
		<div class="comandos">
			<div v-for="(comando, index) in comandosVue" :key="index" class="comando">
				<strong>{{ comando.nombre }}</strong>
				<span>{{ comando.paraQueSirve }}</span>
			</div>
		</div>

		<div class="carpetas">
			<h3>Carpetas y archivos</h3>
			<div style="text-align: left">
				<p><strong>Carpeta</strong>: <strong>Función</strong></p>
				<p><strong>src</strong>: Código principal</p>
				<p><strong>assets</strong>: Imágenes y estilos</p>
				<p><strong>components</strong>: Componentes reutilizables</p>
				<p><strong>public</strong>: Archivos públicos</p>
				<p><strong>App.vue</strong>: Componente principal</p>
			</div>
		</div>
        <div>
	    <p><strong>Template:</strong> define la estructura HTML que se muestra en pantalla y organiza el contenido del componente.</p>
		<p><strong>Script:</strong> contiene la lógica, los datos y las funciones que hacen que el componente sea interactivo.</p>
		<p><strong>Style:</strong> contiene los estilos CSS que determinan la apariencia, los colores y el diseño del componente.</p>
        </div>

		<ul>
			<li>Títulos: &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt; y &lt;h6&gt;.</li>
			<li>Párrafos: &lt;p&gt;.</li>
			<li>Imágenes: &lt;img&gt;.</li>
		</ul>
	</section>
</template>

<style scoped>
section {
	background-color: #f2f1f3;
	padding: 24px;
}

h1,h2,h3, h4, h5, h6 {
	color: #3d164d;
}

p,
.comando span {
	color: #664182;
}
</style>
