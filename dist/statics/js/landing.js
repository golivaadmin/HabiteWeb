function GoToAnchor (anchor) {

	var AnchoNavegador = $(window).width();

	var AltoHeader = 67;

	if (AnchoNavegador > 768) {
		AltoHeader = 102;
	}

	$("html, body").animate({scrollTop: $("#anchor-" + anchor).offset().top - AltoHeader}, 500, function () {
	});

}

$("#menu-principal").find(".link").bind( "click", function() {

	var AnchoNavegador = $(window).width();

	if (AnchoNavegador <= 768) {
		$(".navbar-toggle").click();
	}

});

function DesplegarFormulario () {

	var AnchoNavegador = $(window).width();

	if (AnchoNavegador > 768) {
		$("#formulario-wrapper").toggleClass("formulario-desplegado");
	}

	else {
		$("html, body").animate({scrollTop: $("#formulario-wrapper").offset().top - 67}, 500, function () {
		});
	}

}

function VentanaMensaje_MostrarVentana (mensaje) {

    $("div#wrapper-ventana").find("p#mensaje").html(mensaje);

    $("html").css("overflow", "hidden");
    $("div#wrapper-ventana").css("display", "block");

    var Alto = parseInt($("div#wrapper-ventana").find("div#ventana").css("height"));
    var Margen = Math.round(Alto / 2);
    $("div#wrapper-ventana").find("div#ventana").css("margin-top", "-" + Margen + "px");

    $("div#wrapper-ventana").find("input#focus-ventana").focus();

    $("div#wrapper-ventana").find("div#ventana").animate({opacity: "1"}, 500);

}

function VentanaMensaje_CerrarVentana () {
    
    $("div#wrapper-ventana").find("div#ventana").animate({opacity: "0"}, 250, function () {

        $("div#wrapper-ventana").find("p#mensaje").html("");

        $("html").css("overflow", "auto");
        $("div#wrapper-ventana").css("display", "none");

    });
    
}

jQuery(document).ready(function($) {

	//Enmascaramiento y restriccion de inputs

	$('#cmp_nombre').alphanumeric({ allow: ' .\'' });
	$('#cmp_telefono').mask('9 9999 9999', {placeholder: 'x xxxx xxxx'});

	//Mensaje validación

	function errorValidacion($item, mensaje) {

		VentanaMensaje_MostrarVentana (mensaje);

		$item.focus();

		return false;

	}

	//Reglas validación

	$('#formulario').validate({

		showErrors		: function() {return false;},

		invalidHandler	: function(evento, validador) {
			return errorValidacion($(validador.errorList[0].element), validador.errorList[0].message);
		},

		submitHandler	: function(form) {
			if (!$(form).valid()) {
				return false;
			}
			else {
				form.submit();
			}
		},

		rules			: {
			'cmp_nombre': {
				required		: true
			},
			'cmp_email': {
				required		: true,
				email			: true
			},
			'cmp_telefono': {
				required		: true
			},
			'cmp_tipo_departamento': {
				required		: true
			},
			'cmp_asunto': {
				required		: true
			},
			'cmp_mensaje': {
				required		: true
			},
		},

		messages		: {
			'cmp_nombre': {
				required		: 'Debe ingresar su nombre.'
			},
			'cmp_email': {
				required		: 'Debe ingresar su email.',
				email			: 'Debe ingresar un email válido.'
			},
			'cmp_telefono': {
				required		: 'Debe ingresar su teléfono.'
			},
			'cmp_tipo_departamento': {
				required		: 'Debe seleccionar una versión.'
			},
			'cmp_asunto': {
				required		: 'Debe ingresar el asunto.'
			},
			'cmp_mensaje': {
				required		: 'Debe escribir su mensaje.'
			},
		}

	});

});