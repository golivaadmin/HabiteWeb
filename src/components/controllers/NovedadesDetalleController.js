import { http } from '../../services/httpServices';

export default {

  data () {
    return {
      nombre : "",
      noticia_actual : {},
      noticias_destacadas : []
    }
  },
  methods: {

    get_data_from_server: function () {
      var nombre = this.nombre;
      var dv = this;
      http.get_novedades(function (res) {
        var novedades = res.body.novedades;
        for(var i=0;i<novedades.length;i++){
          var novedad = novedades[i];
          if(novedad.titulo == nombre){
            dv.noticia_actual = novedad;
          }else{
            dv.noticias_destacadas.push(novedad);
          }
        }

        if(dv.noticias_destacadas.length >4){
          dv.noticias_destacadas.length = 4;
        }
      });
    }

  },
  created () {

    var replace_all = function(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
    }

    this.nombre = replace_all(this.$route.params.nombre,"-"," ");

    this.get_data_from_server();

  },

}
