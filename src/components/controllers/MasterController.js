import { http } from '../../services/httpServices';
import { global } from '../../services/global';

export default {

  data () {
    return {
      url_image:"",
      form:{
        nombre:"",
        email:"",
        tema:"",
        rut:"",
        mensaje:""
      },
      form_error:{
        nombre:false,
        email:false,
        tema:false,
        rut:false,
        mensaje:false
      }
    }
  },
  methods: {

    enviar: function () {

      var error = false;

      if(this.form.nombre.length < 3){
          this.form_error.nombre = true;
          error = true;

      }else{
          this.form_error.nombre = false;
      }

      if(this.form.email.length < 3){
          this.form_error.email = true;
          error = true;

      }else{
          this.form_error.email = false;

      }

      if(this.form.tema.length < 3){
          this.form_error.tema = true;
          error = true;

      }else{
          this.form_error.tema = false;

      }

      if(this.form.rut.length < 3){
          this.form_error.rut = true;
          error = true;

      }else{
          this.form_error.rut = false;

      }

      if(this.form.mensaje.length < 3){
          this.form_error.mensaje = true;
          error = true;

      }else{
          this.form_error.mensaje = false;

      }

      if(!error){

      }
    }

  },
  created () {



  },

}
