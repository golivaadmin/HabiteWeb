import { http } from '../../services/httpServices';
import { global } from '../../services/global';

export default {

  data () {
    return {
      Proyectos:[],
      Novedades:[],
      url_image:""

    }
  },
  methods: {

    go_to_detalle_novedades : function (item) {
      var replace_all = function(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
      }

      var nombre = replace_all(item.titulo," ","-");

      window.location.assign(global.server_url+"/#/novedad/detalle/"+nombre);
   },

   go_to_detalle_proyecto : function (item) {

     var replace_all = function(str, find, replace) {
   return str.replace(new RegExp(find, 'g'), replace);
     }

     var nombre = replace_all(item.nombre," ","-");
      window.location.assign(global.server_url+"/#/proyecto/detalle/"+nombre);
   },

    get_data_from_server: function () {
      var dv = this;

      http.get_proyectos(function (res) {
        var aux_proyecto = res.body.Proyectos;
        if(aux_proyecto.length > 6){
          aux_proyecto.length = 6;
        }
        dv.Proyectos = aux_proyecto;
      });

      http.get_novedades(function (res) {
        var aux_novedades = res.body.novedades;
        if(aux_novedades.length > 2){
          aux_novedades.length = 2;
        }
        dv.Novedades = aux_novedades;
      });
    }

  },
  created () {

    this.url_image = global.url_image;
    this.get_data_from_server();

  },

}
