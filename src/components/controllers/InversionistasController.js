import { http } from '../../services/httpServices';

export default {

  data () {
    return {
      paso1_paso2 : true,
      form : {

      },
      select : '',

      opciones : {
        renta_mensual: [
          {
          label: '$499.000 o menos',value: '0,499000'
          },
          {
          label: '$500.000 a $749.000',value: '500000,749000'
          },
          {
          label: '$750.000 a $999.000',value: '750000,999000'
          },
          {
          label: '$1.000.000 a $1.499.000',value: '1000000,1499000'
          },
          {
          label: '$1.500.000 a $1.999.000',value: '1500000,1999000'
          },
          {
          label: '$2.000.000 a $2.499.000',value: '2000000,249900000'
          },
          {
          label: '$2.500.000 o más',value: '2500000,0'
          },
        ],
        capacidad_ahorro: [
          {
          label: '$120.000 a $149.000',value: '120000,149000'
          },
          {
          label: '$150.000 a $299.000',value: '150000, 299000'
          },
          {
          label: '$300.000 o más',value: '300.000,0'
          },
        ],
        ocupacion : [
          {
          label: 'Empleado Tiempo Completo',value: 'Empleado Tiempo Completo'
          },
          {
          label: 'Empleado Tiempo Parcial',value: 'Empleado Tiempo Parcial'
          },
          {
          label: 'Independiente',value: 'Independiente'
          },
          {
          label: 'Pensionado',value: 'Pensionado'
          },
          {
          label: 'Estudiante',value: 'Estudiante'
          },
          {
          label: 'Dueña de Casa',value: 'Dueña de Casa'
          },
          {
          label: 'Desempleado',value: 'Desempleado'
          }

        ],
        cuenta_corriente : [
          {
          label: 'Si',value: 'si'
          },
          {
          label: 'No',value: 'no'
          },
        ],
        credito_hipotecario : [
          {
          label: 'Si',value: 'si'
          },
          {
          label: 'No',value: 'no'
          },
        ],
        pago_dividendo : [
          {
          label: 'Si',value: 'si'
          },
          {
          label: 'No',value: 'no'
          },
        ],
        cecibes_arriendo : [
          {
          label: 'Si',value: 'si'
          },
          {
          label: 'No',value: 'no'
          },
        ],
        tienes_ahorros : [
          {
          label: 'Si',value: 'si'
          },
          {
          label: 'No',value: 'no'
          },
        ],
        precio_departamento : [
          {
          label: '1000 a 1500 UF',value: 'si'
          },
          {
          label: '1501 a 2000 UF',value: 'no'
          },
          {
          label: '2001 a 3000 UF',value: 'no'
          },
        ],
        tipologia : [
          {
          label: 'ESTUDIO',value: 'si'
          },
          {
          label: '1D1B',value: 'no'
          },
          {
          label: '2D1B',value: 'no'
          },
          {
          label: '3D1B',value: 'no'
          },
        ],
        Proyecto_intereza: [
          {
          label: 'SANTO DOMINGO - QUINTA NORMAL METRO GRUTA LOURDES | ENTREGA 2 SEM. 2017',value: 'si'
          },
          {
          label: 'EMBAJADOR QUINTANA - ESTACION CENTRAL METRO SAN ALBERTO HURTADO | ENTREGA 1 SEM. 2020',value: 'no'
          },
          {
          label: 'EDIFICIO NUEVA ALAMEDA- ESTACION CENTRAL METRO ECUADOR | ENTREGA 1 SEM. 2019',value: 'no'
          },
          {
          label: 'EDIFICIO ESTACION - ESTACION CENTRAL METRO U. DE SANTIAGO | ENTREGA 2 SEM 2019',value: 'no'
          },
        ],
        contacto : [
          {
          label: 'Si',value: 'si'
          },
          {
          label: 'No',value: 'no'
          },
        ],

      }
    }
  },
  methods: {

   siguiente : function () {
     this.paso1_paso2 = false;
   },
   enviar : function () {

   },
   paso_1 : function () {
     this.paso1_paso2 = true;
   },
   paso_2 : function () {
     this.paso1_paso2 = false;
   },


  },
  created () {



  },

}
