import { http } from '../../services/httpServices';
import { global } from '../../services/global';

export default {

  data () {
    return {
      Proyectos :[],
      test: true,
      url_image:""
    }
  },
  methods: {

    go_to_detalle : function (item) {

      var replace_all = function(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
      }

      var nombre = replace_all(item.nombre," ","-");
      window.location.assign(global.server_url+"/#/proyecto/detalle/"+nombre);
    },

    get_data_from_server: function () {
      var dv = this;
      http.get_proyectos(function (res) {
        dv.Proyectos = res.body.Proyectos;
      });
    }

  },
  created () {

    this.url_image = global.url_image;
    this.get_data_from_server();
  },

}
