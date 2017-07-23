<template>
<div class="layout-view"  >
<div style="margin-top:110px">

<!-- MIGA DE PAN -->

<div class="container-fluid miga-clientes">
  <div class="container">
    <div class="col-xs-6 col-sm-6 col-md-8">
      <h2>Manuales</h2>
    </div>
    <div class="col-xs-6 col-sm-6 col-md-4">
      <ol class="breadcrumb">
          <li><a href="/#/home">Home</a></li>
          <li class="active">Manuales</li>
      </ol>
    </div>
  </div>
</div>

<!-- MANUALES BOX 1 -->

<div class="container-fluid info-clientes">
  <div class="col-xs-12 col-sm-6 col-md-5 img-box hidden-xs">
    <img src="statics/img/img-cliente.jpg" class="img-responsive">
  </div>
  <div class="col-xs-12 col-sm-6 col-md-7 logo">
    <img src="statics/img/logo-habite.jpg" class="img-responsive">
    <h2>Clientes</h2>
    <h5>A través de este sistema de Postventa, Ud. podrá comunicarse con los encargados de Postventa.</h5>
    <h3>Información de Utilidad</h3>
    <ul>
      <li v-for="item in manuales_principales"><a><i class="fa fa-file-pdf-o" aria-hidden="true"></i> {{item.titulo}}</a></li>

    </ul>
  </div>
</div>

<!-- DESCARGA MANUALES -->
<div class="container box-titulo2">
  <h2><span>DESCARGA DE MANUALES</span></h2>
</div>

<div class="container box-manuales">
  <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">
          {{edificio_actual.nombre}} <span class="caret"></span>
        </a>
        <q-popover ref="popover1">
  <div class="list scroll highlight" style="min-width: 100px; max-height: 500px;">


    <div v-for="item in manuales_edificios"
     style="height: 50px;"
      class="item item-link two-lines item-delimiter"
      @click="$refs.popover1.close(),cambia(item)">
      <div class="item-content">
        <div>{{item.nombre}}</div>
      </div>
    </div>


  </div>


</q-popover>
      </li>
      <li role="presentation" class="active"><a  aria-controls="home" role="tab" data-toggle="tab">Manuales y Reglamentos</a></li>

    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="home">
        <div class="col-xs-12 col-sm-6 col-md-4">
          <h3>Manuales Edificio</h3>
          <ul>
            <li v-for="item in edificio_actual.manuales"><a><i class="fa fa-file-pdf-o" aria-hidden="true"></i> {{item.titulo}}</a></li>
          </ul>
        </div>
      </div>
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
  </div>
      <div class="redes2">
        <ul>
          <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
          <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
          <li><i class="fa fa-youtube" aria-hidden="true"></i></li>
          <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
        </ul>
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
</div>
</template>

<script src="./controllers/ManualesController.js"></script>
