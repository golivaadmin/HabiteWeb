import { http } from '../../services/httpServices';
import { global } from '../../services/global';

export default {

  data () {
    return {
      proyecto_actual :[],
      proyecto_destacados: [],
      nombre : "",
      url_image:"",
      url_image_galeria: "",
      url_image_galeria_actual: "",
      planta_actual : {},
      modelos_actuales : {},
      modelo_actual : {}
    }
  },
  methods: {

    go_to_detalle : function (item) {

      var replace_all = function(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
      }

      var nombre = replace_all(item.nombre," ","-");
      window.location.assign("/#/proyecto/detalle/"+nombre);
      location.reload();
    },

    get_data_from_server: function () {
      var dv = this;
      var nombre = this.nombre;
      http.get_proyectos(function (res) {
        var proyectos = res.body.Proyectos;
        var max_destacados = 3;
        for(var i=0; i<proyectos.length;i++){
          var proyecto = proyectos[i];
          if(proyecto.nombre == nombre){
            dv.proyecto_actual = proyecto;
          }else{
            if(max_destacados>0){
                dv.proyecto_destacados.push(proyecto);
                max_destacados--;
            }
          }
        }

        dv.planta_actual = dv.proyecto_actual.plantas;

        dv.modelos_actuales = dv.proyecto_actual.plantas[0].modelos;
        dv.modelo_actual = dv.proyecto_actual.plantas[0].modelos[0];

        dv.url_image_galeria_actual = dv.proyecto_actual.galeria[0];
      });
    },
    change_modelo_actual :function (item) {
      this.modelo_actual = item;
    },
    change_planta_actual : function (item) {
        this.planta_actual = item;

        this.modelos_actuales = item.modelos;
        this.modelo_actual = item.modelos[0];
    },
    change_foto_actual : function (item) {
        this.url_image_galeria_actual = item;
    }

  },
  created () {
    this.url_image = global.url_image;
    this.url_image_galeria = global.url_image + "/galeria/";

    var replace_all = function(str, find, replace) {
      return str.replace(new RegExp(find, 'g'), replace);
    }
    this.nombre = replace_all(this.$route.params.nombre,"-"," ");

    this.get_data_from_server();
  },

}
