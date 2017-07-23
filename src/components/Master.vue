<template>
  <q-layout>
   <div slot="header">
   <!-- menú secundario -->
  <div id="header-wrapper">
    <div class="container-fluid box-top hidden-xs">
      <div class="container">
        <ul>
          <li><a class="link animated" href="mailto:contacto@habite.cl"><i class="fa fa-envelope" aria-hidden="true"></i> contacto@habite.cl</a></li>
          <li><a class="link animated" href="tel:+56994520890"><i class="fa fa-phone" aria-hidden="true"></i> Teléfono: +56 9 9452 0890</a></li>
          <li class="redes">
            <ul>
              <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
              <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
              <li><i class="fa fa-youtube" aria-hidden="true"></i></li>
              <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <!-- menú principa -->
      <a id="phone-mobile" href="tel:+56994520890" class="visible-xs"><i class="fa fa-phone"></i></a>
      <nav class="navbar navbar-default">
        <div class="container">
          <!-- logo menú -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html"><img src="/statics/img/logo-habite.jpg" class="img-responsive" alt="Responsive image"></a>
          </div>

          <!-- Menú principal -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav" id="menu-principal">
              <!--<li class="animated"><a href="index.html" class="link animated"><i class="fa fa-home" aria-hidden="true"></i></a></li>
              <li class="animated"><a class="link animated" href="index.html">HOME</a></li>-->
              <li class="animated"><a class="link animated"  href="/#/home">INICIO</a></li>
              <li class="animated"><a class="link animated"  href="/#/proyectos">PROYECTOS</a></li>
              <li class="animated"><a class="link animated" href="/#/novedad">NOVEDADES</a></li>
              <li class="animated"><a class="link animated" href="/#/inversionistas">INVERSIONISTAS</a></li>
              <li>
                  <a class="dropdown-toggle" data-toggle="dropdown">CLIENTES<b class="caret"></b></a>

                  <q-popover ref="popover1">
            <div class="list scroll highlight" style="min-width: 100px; max-height: 500px;">

              <a href="/#/cliente/manuales">
              <div style="height: 50px;"
                class="item item-link two-lines item-delimiter"
                @click="$refs.popover1.close()">
                <div class="item-content">
                  <div>Manuales</div>
                </div>
              </div>
              </a>

              <a href="/#/cliente/preguntas">
              <div style="height: 50px;"
                class="item item-link two-lines item-delimiter"
                @click="$refs.popover1.close()">
                <div class="item-content">
                  <div>Preguntas Frecuentes</div>
                </div>
              </div>
              </a>
            </div>
          </q-popover>

              </li>
              <li><a href="/#/somos" class="link animated">HABITE</a></li>

              <li>
                  <a class="dropdown-toggle" data-toggle="dropdown">CONTACTO<b class=""></b></a>

                  <q-popover ref="popover1">
            <div class="list scroll highlight" style="width: 250px; height: 400px;">

              <div class="floating-label">
                <input v-model="form.nombre" required class="full-width" :class="{'has-error' : form_error.nombre}">
                <label>Nombre</label>
              </div>

              <div class="floating-label">
                <input v-model="form.email" required class="full-width" :class="{'has-error' : form_error.email}">
                <label>E-mail</label>
              </div>

              <div class="floating-label">
                <input v-model="form.tema" required class="full-width" :class="{'has-error' : form_error.tema}">
                <label>Tema</label>
              </div>

              <div class="floating-label">
                <input v-model="form.rut" required class="full-width" :class="{'has-error' : form_error.rut}">
                <label>Rut</label>
              </div>

              <div class="floating-label">
                <textarea v-model="form.mensaje" required class="full-width" :class="{'has-error' : form_error.mensaje}"></textarea>
                <label>Mensaje</label>
              </div>

              <div class="group">
                <button @click="enviar()" class="primary full-width">ENVIAR</button>
              </div>


            </div>
          </q-popover>

              </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
 </div>
   </div>
    <router-view >
    </router-view>
  </q-layout>
</template>

<script src="./controllers/MasterController.js"></script>
