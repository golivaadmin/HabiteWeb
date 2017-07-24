<template>
<div class="layout-view"  >
  <!-- MIGA DE PAN -->

  <div class="container-fluid miga-clientes">
    <div class="container">
      <div class="col-xs-6 col-sm-6 col-md-8">
        <h2>Novedades</h2>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-4">
        <ol class="breadcrumb">
            <li><a href="/#/home">Home</a></li>
            <li class="active">Novedades</li>
        </ol>
      </div>
    </div>
  </div>

  <!-- NOVEDADES -->

  <div class="container box-titulo" id="anchor-novedades">
    <h2><span>NOVEDADES</span></h2>
  </div>

  <div class="container box-novedades">
    <div v-for="item in Novedades" class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <img :src="url_image + item.galeria_presentacion.path" class="img-responsive"/>
      <h2>{{item.titulo}}</h2>
      <h4>{{item.sub_titulo}}</h4>
      <div v-html="item.descripcion"></div>
      <a v-on:click="go_to_detalle(item)" class="btn-mas">Saber más</a>
    </div>

  </div>


  <!-- BOX CONTACTANOS -->

  <div class="container-fluid bg-buscanos">
    <div class="container">
    <h2> SOLICITA MÁS INFORMACIÓN </h2>
    <p>Lorem ipsum dolor sit amet, eruditi efficiendi mei ea.</p>
    <a>Contáctanos</a>
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

<script src="./controllers/NovedadesController.js"></script>
