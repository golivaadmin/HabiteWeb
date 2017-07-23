export const validate = {
    string : function (str) {
        if((''+str).length >2){
            return true;
        }else{
            return false;
        }
    },
    natural_number : function (n) {
      n = n.toString(); // force the value incase it is not
     var n1 = Math.abs(n),
         n2 = parseInt(n, 10);
     return !isNaN(n1) && n2 === n1 && n1.toString() === n;
    },
    isBase64 : function (str) {
      if((''+str).length >35){ return true;}
      else {return false}
    },
    validar : function (forms) {

      var todo_ok = true;

      for(var i=0; i<forms.length; i++) {
        var form = forms[i];

        if(form.type == 'string' || form.type == 'text_area'){
          if(this.string(form.value)){
            form.error = false;
          }else{
            form.error = true;
            todo_ok = false;
          }
        }

        if(form.type == 'natural_number'){
          if(this.natural_number(form.value)){
            form.error = false;
          }else{
            form.error = true;
            todo_ok = false;
          }
        }

        if(form.type == 'foto'){
          if(this.isBase64(form.value)){
            form.error = false;
          }else{
            form.error = true;
            todo_ok = false;
          }
        }

      }

      return todo_ok;
    }
}
