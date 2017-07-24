<template>
<div class="layout-view"  >
  <!-- NOVEDADES -->

  <div class="det-novedades">
    <div class="container">
      <div class="col-md-9 box-nov">
        <div class="fecha">
          <h1>{{noticia_actual.titulo}}</h1>
        </div>
        <div class="container-flud img-novedades">
          <img src="statics/img/det-novedad-img.jpg" class="img-responsive" alt="Responsive image">
        </div>
        <h2>{{noticia_actual.sub_titulo}}</h2>
        <p v-html="noticia_actual.detalle"></p>
      </div>
      <div class="col-md-3 box-destacados">
        <h3>Noticias Destacadas</h3>
        <ul>
          <li v-for="item in noticias_destacadas">
            <a>
            <img src="statics/img/det-somos.jpg" class="img-responsive" alt="Responsive image">
            <h2 v-html="item.sub_titulo"></h2>
          </a>
        </li>
        </ul>
  </div>
  </div>
  </div>

  <div slot="footer" >
  <!-- FOOTER -->

<div class="container-fluid box-footer">
<div class="container-fluid menu-bottom">
<!-- Menú footer -->

</div>
<!-- Datos Contacto -->
<div class="container">
  <div class="row footer-dir">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
    <ul>
        <li><h4>Contactanos</h4></li>
        <li><a href="mailto:recepcion@habite.cl"><i class="fa fa-envelope" aria-hidden="true"></i> recepcion@habite.cl</a></li>
        <li><a href="tel:++56223357719"><i class="fa fa-phone" aria-hidden="true"></i> Teléfono: +56 2 2335 7719</a></li>
        <li><i class="fa fa-map-marker" aria-hidden="true"></i> Av. La Dehesa 181, Of. 1002, Lo Barnechea, Santiago</li>
        </ul>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <img src="statics/img/logo-habite-w.png" class="img-responsive" alt="Responsive image">
      <div class="redes2">
        <ul>
          <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
          <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
          <li><i class="fa fa-youtube" aria-hidden="true"></i></li>
          <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
        </ul>
      </div>
    </div>

    </ul>
  </div>
</div>
<!-- LEGAL-->
<div class="container-fluid box-top hidden-xs redes-bottom">
  <div class="container-fluid subfooter">
    <ul>
      <li><a href="#">Habite Inmobiliaria 2017</a></li>
    </ul>
  </div>
</div>
</div>

<div id="wrapper-ventana">
<div id="ventana">
    <p id="mensaje"></p>
    <div id="btn-cerrar">
        <a class="link" id="btn-cerrar-ventana" onclick="VentanaMensaje_CerrarVentana ();">Aceptar</a>
    </div>
    <input type="text" id="focus-ventana" />
</div>
</div>
  </div>
</div>
</template>

<script src="./controllers/NovedadesDetalleController.js"></script>
