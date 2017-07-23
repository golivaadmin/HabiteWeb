import { http } from '../../services/httpServices';

export default {

  data () {
    return {
      Preguntas :[]
    }
  },
  methods: {

    go_to_detalle : function (item) {
      window.location.assign(global.server_url+"/#/novedad/detalle");
   },

    get_data_from_server: function () {
      var dv = this;
      http.get_preguntas(function (res) {
        console.log(res);
        dv.Preguntas = res.body.preguntas;
      });
    }

  },
  created () {

    this.get_data_from_server();

  },

}
