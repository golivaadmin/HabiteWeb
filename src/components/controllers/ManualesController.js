import { http } from '../../services/httpServices';

export default {

  data () {
    return {
      manuales_principales :[],
      manuales_edificios: [],
      edificio_actual : {nombre:"Selecciona Proyecto"}
    }
  },
  methods: {

    cambia : function (item) {
     this.edificio_actual = item;
   },

    get_data_from_server: function () {
      var dv = this;
      http.get_manuales(function (res) {
        console.log(res);
        dv.manuales_principales = res.body.manuales_principales;
        dv.manuales_edificios = res.body.manuales_edificios;
        dv.edificio_actual = res.body.manuales_edificios[0];
      });
    }

  },
  created () {

    this.get_data_from_server();

  },

}
