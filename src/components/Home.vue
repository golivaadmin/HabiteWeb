<template>


<div class="layout-view"  >

<div style="margin-top:60px">

<!-- SLIDER PRINCIPAL -->

<q-slider  dots autoplay class="text-white">
  <div slot="slide" >
    <li><img src="statics/img/01.jpg" style=" width: 100vw"  class="img-responsive"/></li>
  </div>
  <div slot="slide" >
    <li><img src="statics/img/02.jpg" style=" width: 100vw" class="img-responsive"/></li>
  </div>

</q-slider>

<!--<div class="container-fluid box-slider" id="anchor-home">
 <ul class="bxslider">
      <li><img src="statics/img/01.jpg" class="img-responsive"/></li>
</ul>
</div> -->


<!-- OTROS PROYECTOS -->

<div class="container-fluid content-proyectos" id="anchor-proyectos">
  <div class="container box-proyectos">
    <div class="container box-titulo">
      <h2><span>PROYECTOS EN VENTA</span></h2>
    </div>
    <div v-for="item in Proyectos" @click="go_to_detalle_proyecto(item)" class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
      <div class="proyecto">
        <h4 class="tag-ubicacion"><i class="fa fa-map-marker" aria-hidden="true"></i> {{item.direccion.comuna}}</h4>
        <img :src="url_image + item.galeria_presentacion.path" class="img-responsive"/>
        <h1>{{item.nombre}}</h1>
        <h3><i class="fa fa-map-marker" aria-hidden="true"></i> {{item.direccion.calle}} {{item.direccion.numero}} , {{item.direccion.ciudad}}</h3>
        <div class="col-xs-6 col-sm-8 col-md-7">
          <p><i class="fa fa-bed" aria-hidden="true"></i> {{item.dormitorios}} dormitorios</p>
          <p><i class="fa fa-object-group" aria-hidden="true"></i> Desde {{item.m2_desde}} m2</p>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-5">
          <span>Desde</span>
          <h2>{{item.uf_desde}} UF</h2>
        </div>
      </div>
    </div>


  </div>
</div>

<!-- INVERSIONISTAS -->
<a href="/#/inversionistas">
<div  class="container-fluid box-inversion">
  <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5 inversionista">
    <img src="statics/img/logo-habite-w.png" class="img-responsive"/>
    <h2>Inversionistas</h2>
    <p>Si eres parte de aquellas personas que buscan una gran rentabilidad e interesantes retornos a tu inversión. ¡Tenemos excelentes alternativas para tí!.</p>
  </div>
  <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 gestiona">
    <img src="statics/img/gestionamos.png" class="img-responsive"/>
    <h4>Gestionamos Tu Financiamiento</h4>
  </div>
  <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 analiza">
    <img src="statics/img/buscamos.png" class="img-responsive"/>
    <h4>Analizamos Tu Propuesta</h4>
  </div>
  <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 inscribe">
    <img src="statics/img/aceptamos.png" class="img-responsive"/>
    <h4>Inscribe Tus Datos</h4>
  </div>
</div>
</a>

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
  <a v-on:click="go_to_detalle_novedades(item)"class="btn-mas">Saber más</a>
</div>
</div>

<!-- BOX CONTACTANOS -->

<div class="container-fluid bg-buscanos">
<div class="container">
<h2> SOLICITA MÁS INFORMACIÓN </h2>
<p>Lorem ipsum dolor sit amet, eruditi efficiendi mei ea.</p>
<a class="footer-form">Contáctanos</a>
</div>
</div>


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

<script src="./controllers/HomeController.js"></script>
