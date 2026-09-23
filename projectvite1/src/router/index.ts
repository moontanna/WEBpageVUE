import { defineComponent, h, ref } from 'vue'
import HomeView from '../views/HomeView.vue'
import ConstantsView from '../views/ConstantsView.vue'
import ObjectLiteralsView from '../views/ObjectLiteralsView.vue'
import HeaderView from '../views/HeaderView.vue'
import VBindView from '../views/VBindView.vue'
import ImportExportView from '../views/ImportExportView.vue'
import MoviesView from '../views/MoviesView.vue'
import ArraysView from '../views/ArraysView.vue'
import ArrayComponentView from '../views/ArrayComponentView.vue'
import FatherView from '../views/FatherView.vue'
import ExampleView from '../views/ExampleView.vue'
import AboutView from '../views/AboutView.vue'

export type RouteRecord = {
  path: string
  name: string
  component: object
}

export const routes: RouteRecord[] = [
  { path: '/', name: 'Inicio', component: HomeView },
  { path: '/contenido/constants', name: 'Constants', component: ConstantsView },
  { path: '/contenido/object-literals', name: 'Object literals', component: ObjectLiteralsView },
  { path: '/contenido/header-component', name: 'HeaderComponent', component: HeaderView },
  { path: '/contenido/v-bind', name: 'Uso de v-bind', component: VBindView },
  { path: '/contenido/importacion-exportacion', name: 'Importación y exportación', component: ImportExportView },
  { path: '/arreglos/recorrido-movies', name: 'Recorrido de movies', component: MoviesView },
  { path: '/arreglos/recorrido', name: 'Recorrido', component: ArraysView },
  { path: '/componentes/tipo-array', name: 'Comp. Tipo Array', component: ArrayComponentView },
  { path: '/componentes/padre', name: 'Padre', component: FatherView },
  { path: '/rutas/example', name: 'Example', component: ExampleView },
  { path: '/rutas/about', name: 'About', component: AboutView },
]

const rutaActual = ref(window.location.pathname)

export function navegar(ruta: string) {
  if (ruta === rutaActual.value) return
  window.history.pushState({}, '', ruta)
  rutaActual.value = ruta
}

window.addEventListener('popstate', () => {
  rutaActual.value = window.location.pathname
})

export const RouterView = defineComponent({
  name: 'RouterView',
  setup() {
    return () => {
      const ruta = routes.find((ruta) => ruta.path === rutaActual.value)
      const componente = ruta ? ruta.component : HomeView

      return h(componente)
    }
  },
})
