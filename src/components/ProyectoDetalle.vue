<template>
<div class="layout-view"  >

<!-- CARACTERISTICAS -->
<div class="container-fluid box-caract">
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 caract">
      <img src="statics/img/icon-01.png" class="img-responsive"/>
      <h2><span>{{proyecto_actual.dormitorios}}</span> DORM</h2>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 caract">
      <img src="statics/img/icon-01.png" class="img-responsive"/>
      <h2><span>{{proyecto_actual.banos}}</span> BAÑOS</h2>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 caract">
      <img src="statics/img/icon-01.png" class="img-responsive"/>
      <h2>DESDE<span> {{proyecto_actual.uf_desde}} UF</span></h2>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 caract">
      <img src="statics/img/icon-01.png" class="img-responsive"/>
      <h2><span>{{proyecto_actual.m2_desde}} a {{proyecto_actual.m2_hasta}} m2</span></h2>
    </div>
  </div>
</div>

<!-- DESCRIPCION -->

<div class="container box-descrip" id="anchor-descripcion">
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-7 col-lg-7 desc-top">
      <div class="col-xs-12 col-sm-4 col-md-3 logo-proyect">
        <img src="statics/img/logo-proyecto.jpg" class="img-responsive"/>
      </div>
      <div class="col-xs-12 col-sm-8 col-md-9">
        <h2>{{proyecto_actual.nombre}}</h2>
        <h5>{{proyecto_actual.direccion.calle}} {{proyecto_actual.direccion.numero}},{{proyecto_actual.direccion.comuna}},{{proyecto_actual.direccion.region}}</h5>
      </div>
      <br>
      <div v-html="proyecto_actual.descripcion" class="col-xs-12 col-sm-12 col-md-12 box-text">

      </div>

      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 botones-desc">
        <a class="btn-desc link animated" onclick="DesplegarFormulario();"><i class="fa fa-envelope" aria-hidden="true"></i> Cotizar</a>
          <a href="#" class="btn-desc link animated"><i class="fa fa-envelope" aria-hidden="true"></i> RESERVAR</a>
      </div>

    </div>

    <div class="col-xs-12 col-sm-6 col-md-5 col-lg-5">
      <img src="statics/img/img-descripcion.jpg" class="img-responsive"/>
    </div>

  </div>
</div>

<!-- GALERIA -->

<div class="container box-titulo">
<h2>GALERÍA <span>EDIFICIO ESTACION</span></h2>
</div>
<div class="container-fluid galeria-box" id="anchor-galeria">
  <div class="container in-galeria">
  <!-- Menú galeria -->
    <div class="container-fluid menu-galeria">
      <div class="container" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav text-center">
          <li><a class="link animated">Hall acceso</a></li>
          <li><a class="link animated">Gimnacio</a></li>
          <li><a class="link animated">Quincho</a></li>
          <li><a class="link animated">Lavandería</a></li>
          <li><a href="#" class="link animated">Salon Gourmet</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div>

  <div class="big-img">
    <img :src="url_image_galeria  + url_image_galeria_actual.path" class="img-responsive"/>
  </div>

  <div class="container mini-gal">
    <ul>
      <li v-for="item in proyecto_actual.galeria" @click="change_foto_actual(item)"><img :src="url_image_galeria  + item.path" class="img-responsive"/></li>
    </ul>
  </div>

  </div>
</div>

<!-- PLANTAS -->

<div class="container box-plantas">
  <div class="tit-plantas">
    <h2>PLANTAS</h2>
</div>

<div class="container">
  <div class="btn-plantas">
    <a v-for="item in proyecto_actual.plantas"
    @click="change_planta_actual(item)" class="btn-activo">{{item.nombre}}</a>

  </div>
</div>
</div>

<div  class="container list-plantas">
<div  class="btn-group btn-group-justified" role="group" aria-label="...">
  <div v-for="item in modelos_actuales" @click="change_modelo_actual(item)" class="btn-group" role="group">
    <button type="button" class="btn btn-default">
      <img :src="url_image + item.galeria_detalle.path" class="img-responsive"/>
      <h5>{{item.tipo}}</h5>
      <p>{{item.dormitorio_banno}}</p>
    </button>
  </div>

</div>

<div class="det-plantas">
  <div class="col-md-1">
  </div>
  <div  class="col-md-4 desc">
    <h2>{{modelo_actual.dormitorio_banno}} | {{modelo_actual.tipo}}</h2>
    <h4>Superficie: 36,83 - 42,69 m²</h4>
    <div v-html="modelo_actual.descripcion"></div>
    <!-- Botonera -->
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 botones-desc hidden-xs">
      <a class="btn-desc link animated" onclick="DesplegarFormulario();"><i class="fa fa-envelope" aria-hidden="true"></i> Cotizar</a>
      <a href="#" class="btn-desc link animated"><i class="fa fa-envelope" aria-hidden="true"></i> RESERVAR</a>
    </div>

  </div>
  <div class="col-md-6 bx-img">
    <img :src="url_image + modelo_actual.galeria_presentacion.path" class="img-responsive"/>
  </div>
  <div class="col-md-1">
  </div>
</div>


</div>


<!-- MAPA - UBICACION -->

<div class="container box-titulo" style="margin-left: 8%">
  <h2><span>UBICACIÓN</span></h2>
</div>
<div style="margin-right: 8%;margin-left: 8%; height:410px;"
 class="container-fluid">
  <iframe :src="proyecto_actual.url_google" width="100%" height="400px"
frameborder="0" scrolling="no" allowfullscreen ></iframe>
  <div class="acf-map" style="height: 500px;">
    <div class="marker" data-lat="-33.440171" data-lng="-70.605839"></div>
  </div>
</div>

<!-- OTROS PROYECTOS -->

<div class="container-fluid content-proyectos">
  <div class="container box-proyectos">
    <div class="container box-titulo">
      <h2><span>NUEVOS PROYECTOS</span></h2>
    </div>

    <div v-for="item in proyecto_destacados"
    @click="go_to_detalle(item)" class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
      <div class="proyecto">
        <h4 class="tag-ubicacion"><i class="fa fa-map-marker" aria-hidden="true"></i> {{item.direccion.comuna}}</h4>
        <img :src="url_image + item.galeria_presentacion.path" class="img-responsive"/>
        <h1>{{item.nombre}}</h1>
        <h3><i class="fa fa-map-marker" aria-hidden="true"></i> {{item.direccion.calle}} {{item.direccion.numero}} </h3>
        <div class="col-xs-6 col-sm-9 col-md-7">
          <p><i class="fa fa-bed" aria-hidden="true"></i> {{item.dormitorios}} dormitorios</p>
          <p><i class="fa fa-object-group" aria-hidden="true"></i> {{item.m2_desde}} m2</p>
        </div>
        <div class="col-xs-6 col-sm-3 col-md-5">
          <span>Desde</span>
          <h2>{{item.uf_desde}} UF</h2>
        </div>
      </div>
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

<script src="./controllers/ProyectoDetalleController.js"></script>
