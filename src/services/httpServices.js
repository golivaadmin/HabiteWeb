import { global } from './global';
import { fakedata } from './fake_data';
import axios from 'axios';
export const http = {
    /* Proyectos */
    get_proyectos: function(callback) {

      callback({body:fakedata.get_proyectos()});
    },
    get_novedades: function(callback) {
     callback({body:fakedata.get_novedades()});
    },
    get_preguntas: function(callback) {
     callback({body:fakedata.get_preguntas()});
    },
    get_manuales: function(callback) {
     callback({body:fakedata.get_manuales()});
    },

    /* MAKE */
    make_post : function (url,data,callback) {
        axios.post(global.server_url+url,data)
        .then(function (response) {
        callback(null,response);
        })
        .catch(function (error) {
          callback(true,null);
        });
    }
}
