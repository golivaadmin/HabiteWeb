import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { path: '/', component: load('Master'),children: [
      {path:'home', component: load('Home')},
      {path:'proyectos', component: load('Proyectos')},
      {path:'proyecto/detalle/:nombre', component: load('ProyectoDetalle')},
      {path:'novedades', component: load('Home')},
      {path:'inversionistas', component: load('Inversionistas')},
      {path:'somos', component: load('Somos')},
      {path:'novedad', component: load('Novedades')},
      {path:'novedad/detalle/:nombre', component: load('NovedadesDetalle')},
      {path:'cliente/manuales', component: load('Manuales')},
      {path:'cliente/preguntas', component: load('Preguntas')},
    ]},
    { path: '*', component: load('Error404') } // Not found
  ]
})
