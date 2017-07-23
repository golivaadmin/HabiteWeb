<template>
<div class="layout-view"  >
<div style="margin-top:0px">
<!-- SLIDER PRINCIPAL -->

<div class="container-fluid box-slider" id="anchor-home">
 <ul class="bxslide">
      <li><img src="statics/img/02.jpg" class="img-responsive"/></li>
</ul>
</div>

<!-- FORMULARIO -->

<div id="formulario-wrapper" class="animated">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-5 col-md-4 col-lg-4 pull-right">
        <div id="contenedor-formulario">
          <div id="titulo">Contáctanos</div>
          <form method="post" action="?gracias" id="formulario">

            <div class="form-group">
              <input class="form-control" id="cmp_nombre" name="cmp_nombre" value="" placeholder="Nombre" maxlength="60" />
            </div>

            <div class="form-group">
              <input class="form-control" id="cmp_email" name="cmp_email" value="" placeholder="Email" maxlength="150" />
            </div>

            <div class="form-group">
              <input class="form-control" id="cmp_telefono" name="cmp_telefono" value="" placeholder="Teléfono" maxlength="12" />
            </div>

            <div class="form-group">
              <select class="form-control" id="cmp_tipo_departamento" name="cmp_tipo_departamento">
                <option value="" selected>Tipo de departamento</option>
                <option value="Tipo A">Tipo A</option>
                <option value="Tipo B">Tipo B</option>
                <option value="Tipo C">Tipo C</option>
              </select>
            </div>

            <div class="form-group">
              <input class="form-control" id="cmp_asunto" name="cmp_asunto" value="" placeholder="Asunto" maxlength="100" />
            </div>

            <div class="form-group">
              <textarea class="form-control" id="cmp_mensaje" name="cmp_mensaje" value="" placeholder="Mensaje" maxlength="300"></textarea>
            </div>

            <div class="form-group">
              <button class="link animated">ENVIAR</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- TITULO INVERSIONISTAS -->

<div class="container-fluid inv-tit">
  <div class="tit-inversion">
    <h1>INVERSIONISTAS</h1>
    <p>Si eres parte de aquellas personas que buscan una gran rentabilidad e interesantes retornos a tu inversión. ¡Tenemos excelentes alternativas para tí!.</p>
  </div>
</div>

<div class="container box-inv">
  <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
    <img src="statics/img/precio.png" class="img-responsive">
    <p>Alternativas con una excelente Proyectos Siempre ubicados Beneficio DFL2 Y relación precio / calidad.</p>
  </div>
  <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
    <img src="statics/img/ubicacion.png" class="img-responsive">
    <p>Proyectos Siempre ubicados Beneficio DFL2 Y relación precio / calidad. en sitios estratégicos.</p>
  </div>
  <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
    <img src="statics/img/oka.png" class="img-responsive">
    <p>Beneficio DFL2 Y relación precio / calidad. en sitios estratégicos. Art. 55 bits</p>
  </div>
</div>

<!-- MANUALES BOX 1 -->

<div class="container-fluid info-inv">
  <div class="container">
  <div class="col-xs-12 col-sm-6 col-md-6 info">
    <h2>GESTIONAMOS TU FINANCIAMIENTO</h2>
    <p>Te asesoramos para que obtengas la mejor forma de optimizar tu inversión, Te acompañaremos en tu proceso bancario, desde las pre-aprobaciones financieras, la realización de la reserva, la firma de tu promesa hasta la escrituración.</p>
<p>Tendrás el soporte del servicio de Postventa en caso de necesitarlo.
Y serás un cliente que recibirá información de nuevos proyectos en forma anticipada.</p>
<h5>No sigas esperando Invierte en tu futuro!</h5>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-6 img-box">
    <img src="statics/img/img-inver.jpg" class="img-responsive">
  </div>
  </div>
</div>

<!-- FORMULARIO INVERSIONISTA -->

<div class="container form-inversion">
  <div class="tit-form">
    <h1>INSCRIBE TUS DATOS</h1>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-6 text-form">
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,</p>
    <h4>INSCRIBE TUS DATOS</h4>
    <h4>ANALIZAMOS TU PROPUESTA</h4>
    <h4>GESTIONAMOS TU FINANCIAMIENTO</h4>
  </div>

<div class="col-xs-12 col-sm-6 col-md-6">
  <div class="btns-form">
    <a @click="paso_1()" class="paso1">Paso 1</a>
    <a @click="paso_2()" class="paso2">Paso 2</a>
  </div>
  <div v-if="paso1_paso2 == true" class="form-inv">
    <form class="_default bx-formulario" id="contactForm" novalidate="novalidate">
      <h5>NOMBRE</h5>
      <div class="form-group required">
        <input class="form-control"  type="text" placeholder="Nombre">
      </div>
      <h5>RUT</h5>
      <div class="form-group required">
        <input class="form-control"  type="text"  placeholder="Rut">
      </div>
      <h5>E-MAIL</h5>
      <div class="form-group required">
        <input class="form-control"  type="email"  placeholder="Mail">
      </div>
      <div class="form-group required">
        <h5>Celular</h5>
        <input class="form-control"  type="text"  placeholder="tel">
      </div>
      <div class="form-group required">
        <h5>RENTA MENSUAL</h5>
        <q-select
        type="radio"
        v-model="select"
        :options="opciones.renta_mensual"
        ></q-select>
      </div>
      <div class="form-group required">
        <h5>CAPACIDAD AHORRO</h5>
        <q-select
        type="radio"
        v-model="select"
        :options="opciones.capacidad_ahorro"
        ></q-select>
      </div>
      <div class="form-group required">
        <h5>CUENTA CORRIENTE</h5>
        <q-select
        type="radio"
        v-model="select"
        :options="opciones.cuenta_corriente"
        ></q-select>
      </div>
      <div class="btn-wrap">
        <button @click="siguiente()" class="btn btn-primary btn-block">Siguiente Paso</button>
      </div>
      <div class="form-notify"></div>
    </form>
  </div>
  <div v-else class="form-inv">
    <form class="_default bx-formulario" id="contactForm" novalidate="novalidate">
      <h5>¿TIENES CRÉDITO HIPOTECARIO?</h5>
      <q-select
      type="radio"
      v-model="select"
      :options="opciones.credito_hipotecario"
      ></q-select>
      <h5>¿PAGAS ARRIENDO?</h5>
      <div class="form-group required">
      <q-select
      type="radio"
      v-model="select"
      :options="opciones.pago_dividendo"
      ></q-select>
      </div>
      <h5>¿RECIBES PAGOS POR ARRIENDO?</h5>
      <div class="form-group required">
      <q-select
      type="radio"
      v-model="select"
      :options="opciones.cecibes_arriendo"
      ></q-select>
      </div>
      <div class="form-group required">
        <h5>¿TIENES AHORROS?</h5>
        <q-select
        type="radio"
        v-model="select"
        :options="opciones.tienes_ahorros"
        ></q-select>
      </div>
      <div class="form-group required">
        <h5>PRECIO DEL DEPARTAMENTO QUE TE INTERESA</h5>
        <q-select
        type="radio"
        v-model="select"
        :options="opciones.precio_departamento"
        ></q-select>
      </div>
      <div class="form-group required">
        <h5>TIPOLOGÍA QUE TE INTERESA</h5>
        <q-select
        type="radio"
        v-model="select"
        :options="opciones.tipologia"
        ></q-select>
      </div>
      <div class="form-group required">
        <h5>CUAL DE ESTOS PROYECTOS TE INTERESA</h5>
        <q-select
        type="radio"
        v-model="select"
        :options="opciones.Proyecto_intereza"
        ></q-select>
      </div>
      <div class="form-group required">
        <h5>¿QUIERES QUE TE CONTACTEMOS TELEFÓNICAMENTE PARA AGENDAR UNA REUNIÓN?</h5>
        <q-select
        type="radio"
        v-model="select"
        :options="opciones.contacto"
        ></q-select>
      </div>
      <div class="btn-wrap">
        <button @click="enviar()" class="btn btn-primary btn-block">Enviar</button>
      </div>
      <div class="form-notify"></div>
    </form>
  </div>
</div>
</div>

<!-- BOX CONTACTANOS -->

<div class="container-fluid bg-buscanos">
  <div class="container">
  <h2> SOLICITA MÁS INFORMACIÓN </h2>
  <p>Lorem ipsum dolor sit amet, eruditi efficiendi mei ea.</p>
  <a onclick="DesplegarFormulario();">Contáctanos</a>
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

<script src="./controllers/InversionistasController.js"></script>
