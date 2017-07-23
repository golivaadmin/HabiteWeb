export const fakedata = {
    get_proyectos : function () {
      var data = {is_ok: true,
      Proyectos : [
        {nombre: "Edificio Estación",descripcion : "<p>Vive en pleno centro de Estaci&oacute;n Central, seguro y cerca de todo. Edificio de moderna arquitectura ubicado a una cuadra de Autopista General Vel&aacute;zquez, con excelente conectividad hacia las principales avenidas.</p><p>A pasos del Metro San Alberto Hurtado y Metro Universidad de Santiago, a dos cuadras de supermercado Lider, General Vel&aacute;squez, Estaci&oacute;n de Buses y variados comercios.</p><p>El proyecto cuenta con departamentos de 1 y 2 dormitorios, equipados con horno el&eacute;ctrico, encimera y campana, con termo para agua caliente, cer&aacute;mica en pisos, alfombra en dormitorios, balc&oacute;n, muy luminoso y bien distribuidos. Tu edificio cuenta con; Hall de acceso de doble altura. Sal&oacute;n Gourmet, Lounge, Lavander&iacute;a, Gimnasio, Quinchos Panor&aacute;micos y Bicicletero en Subterr&aacute;neo.</p>",
        banos: "1 a 2",
        dormitorios: "1 y 2",
        uf_desde: "1742",
        uf_hasta: "none",
        m2_desde : "12",
        m2_hasta: "97",
        url_google: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.2598548651526!2d-70.53214448459775!3d-33.390384201818506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cea90ee8caef%3A0xfbbdd18bb542785b!2sLos+Carpinteros+10096%2C+Las+Condes%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses!2scl!4v1500320625885",
        direccion : {
            calle : "Federico Scotto",
            numero: "112",
            especificacion : "none",
            comuna: "Estación Central",
            ciudad: "Santiago",
            region: "Region Metropolitana",
            latitud: -33,
            longitud: -33,
        }
        ,
        galeria_presentacion : {
            path: "destacado-edificio-estacion.jpg"
        },
        galeria_detalle : {
            path: ""
        },
        galeria:[
          {path: "Bicicletero.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-C1-201_Cam1.jpg"},
          {path: "Depto-C1-201_Cam2.jpg"},
          {path: "Depto-C3-205-Cam1.jpg"},
          {path: "Depto-C3-205-Cam2.jpg"},
          {path: "Quincho.jpg"},
          {path: "Salon-Gourmet.jpg"},
          {path: "slider-mini-stacion-01.jpg"},
        ],
        galeria:[
          {path: "Bicicletero.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-C1-201_Cam1.jpg"},
          {path: "Depto-C1-201_Cam2.jpg"},
          {path: "Depto-C3-205-Cam1.jpg"},
          {path: "Depto-C3-205-Cam2.jpg"},
          {path: "Quincho.jpg"},
          {path: "Salon-Gourmet.jpg"},
          {path: "slider-mini-stacion-01.jpg"},
        ],
        plantas : [
          {nombre:"1 Dormitorio",modelos:[
            {tipo:"Tipo B3",dormitorio_banno:"1D - 1B",descripcion:"<p>Excelente&nbsp;departamento de un dormitorio alfombrado, un ba&ntilde;o completo, piso cer&aacute;mico en estar y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y nicho para lavadora. Orientaciones Norte y Sur.</p>"
            ,galeria_presentacion:{ path: "depto-B3-big.jpg" },
            galeria_detalle:{ path: "depto-B3-thumb.jpg"}
          },

          {tipo:"Tipo B2",dormitorio_banno:"1D - 1B",descripcion:"<p>Departamento de muy buen tama&ntilde;o, de un dormitorio con un ba&ntilde;o completo ventilado naturalmente, piso cer&aacute;mico, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y nicho para lavadora. Orientaci&oacute;n Sur.</p>"
          ,galeria_presentacion:{ path: "depto-B2-big.jpg" },
          galeria_detalle:{ path: "depto-B2-thumb.jpg"}
        },

        {tipo:"Tipo B1",dormitorio_banno:"1D - 1B",descripcion:"<p>Departamento muy bien iluminado, con alfombra en&nbsp;dormitorio, piso cer&aacute;mico en estar y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, con nicho para lavadora, cuenta con termo para agua caliente y un ba&ntilde;o completo. Orientaciones Norte y Sur.</p>"
        ,galeria_presentacion:{ path: "depto-B1-big.jpg" },
        galeria_detalle:{ path: "depto-B2-thumb.jpg"}
        }

          ]},
          {nombre:"2 Dormitorio",modelos:[
            {tipo:"Tipo C3",dormitorio_banno:"2D - 1B",descripcion:"<p>Departamento muy iluminado, de 2 dormitorios alfombrados con una excelente distribuci&oacute;n, un ba&ntilde;o completo, piso cer&aacute;mico en living comedor y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y orientaci&oacute;n Nor-Poniente.</p>"
            ,galeria_presentacion:{ path: "depto-C3-big.jpg" },
            galeria_detalle:{ path: "depto-C3-thumb.jpg"}
          },

          {tipo:"Tipo C2",dormitorio_banno:"2D - 1B",descripcion:"<p>Departamento bien distribuido, con buenos espacios interiores, 2 dormitorios alfombrados independientes tipo mariposa con un ba&ntilde;o ventilado naturalmente, piso cer&aacute;mico, balc&oacute;n, cocina cerrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y orientaciones Oriente y Poniente. Norte</p>"
          ,galeria_presentacion:{ path: "depto-C2-big.jpg" },
          galeria_detalle:{ path: "depto-C2-thumb.jpg"}
        },

        {tipo:"Tipo C1",dormitorio_banno:"2D - 1B",descripcion:"<p>Muy grato departamento, bien iluminado, con buenos espacios, de dos&nbsp;dormitorios&nbsp;alfombrados con un ba&ntilde;o completo, piso cer&aacute;mico en estar y balc&oacute;n, cocina cerrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente. Orientaciones Oriente y Poniente.</p>"
        ,galeria_presentacion:{ path: "depto-C1-big.jpg" },
        galeria_detalle:{ path: "depto-C1-thumb.jpg"}
        }

          ]}
        ]
      },

        {nombre: "Edificio Embajador Qintana",descripcion : "<p>Edificio de moderna arquitectura ubicado en Embajador Quintana 4334, en la comuna de Estaci&oacute;n Central, con excelente conectividad, a solo pasos del metro San Alberto Hurtado y Autopista Central. Vive en un lugar tranquilo, seguro y cerca de todo. </p>",
    		banos: "1 a 2",
    		dormitorios: "ESTUDIO 1 y 2",
    		uf_desde: "1287",
    		uf_hasta: "none",
        m2_desde : "45",
        m2_hasta: "80",
        url_google: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.2598548651526!2d-70.53214448459775!3d-33.390384201818506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cea90ee8caef%3A0xfbbdd18bb542785b!2sLos+Carpinteros+10096%2C+Las+Condes%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses!2scl!4v1500320625885",
        direccion : {
            calle : "Embajador Quintana",
            numero: "4334",
            especificacion : "none",
            comuna: "Estación Central",
            ciudad: "Santiago",
            region: "Region Metropolitana",
            latitud: -33,
            longitud: -33,
        }
        ,
        galeria_presentacion : {
            path: "destacado-edificio-quintana.jpg"
        },
        galeria_detalle : {
            path: ""
        },
        galeria:[
          {path: "Bicicletero.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-C1-201_Cam1.jpg"},
          {path: "Depto-C1-201_Cam2.jpg"},
          {path: "Depto-C3-205-Cam1.jpg"},
          {path: "Depto-C3-205-Cam2.jpg"},
          {path: "Quincho.jpg"},
          {path: "Salon-Gourmet.jpg"},
          {path: "slider-mini-stacion-01.jpg"},
        ],
        galeria:[
          {path: "Bicicletero.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-C1-201_Cam1.jpg"},
          {path: "Depto-C1-201_Cam2.jpg"},
          {path: "Depto-C3-205-Cam1.jpg"},
          {path: "Depto-C3-205-Cam2.jpg"},
          {path: "Quincho.jpg"},
          {path: "Salon-Gourmet.jpg"},
          {path: "slider-mini-stacion-01.jpg"},
        ],
        plantas : [
          {nombre:"1 Dormitorio",modelos:[
            {tipo:"Tipo B3",dormitorio_banno:"1D - 1B",descripcion:"<p>Excelente&nbsp;departamento de un dormitorio alfombrado, un ba&ntilde;o completo, piso cer&aacute;mico en estar y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y nicho para lavadora. Orientaciones Norte y Sur.</p>"
            ,galeria_presentacion:{ path: "depto-B3-big.jpg" },
            galeria_detalle:{ path: "depto-B3-thumb.jpg"}
          },

          {tipo:"Tipo B2",dormitorio_banno:"1D - 1B",descripcion:"<p>Departamento de muy buen tama&ntilde;o, de un dormitorio con un ba&ntilde;o completo ventilado naturalmente, piso cer&aacute;mico, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y nicho para lavadora. Orientaci&oacute;n Sur.</p>"
          ,galeria_presentacion:{ path: "depto-B2-big.jpg" },
          galeria_detalle:{ path: "depto-B2-thumb.jpg"}
        },

        {tipo:"Tipo B1",dormitorio_banno:"1D - 1B",descripcion:"<p>Departamento muy bien iluminado, con alfombra en&nbsp;dormitorio, piso cer&aacute;mico en estar y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, con nicho para lavadora, cuenta con termo para agua caliente y un ba&ntilde;o completo. Orientaciones Norte y Sur.</p>"
        ,galeria_presentacion:{ path: "depto-B1-big.jpg" },
        galeria_detalle:{ path: "depto-B2-thumb.jpg"}
        }

          ]},
          {nombre:"2 Dormitorio",modelos:[
            {tipo:"Tipo C3",dormitorio_banno:"2D - 1B",descripcion:"<p>Departamento muy iluminado, de 2 dormitorios alfombrados con una excelente distribuci&oacute;n, un ba&ntilde;o completo, piso cer&aacute;mico en living comedor y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y orientaci&oacute;n Nor-Poniente.</p>"
            ,galeria_presentacion:{ path: "depto-C3-big.jpg" },
            galeria_detalle:{ path: "depto-C3-thumb.jpg"}
          },

          {tipo:"Tipo C2",dormitorio_banno:"2D - 1B",descripcion:"<p>Departamento bien distribuido, con buenos espacios interiores, 2 dormitorios alfombrados independientes tipo mariposa con un ba&ntilde;o ventilado naturalmente, piso cer&aacute;mico, balc&oacute;n, cocina cerrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y orientaciones Oriente y Poniente. Norte</p>"
          ,galeria_presentacion:{ path: "depto-C2-big.jpg" },
          galeria_detalle:{ path: "depto-C2-thumb.jpg"}
        },

        {tipo:"Tipo C1",dormitorio_banno:"2D - 1B",descripcion:"<p>Muy grato departamento, bien iluminado, con buenos espacios, de dos&nbsp;dormitorios&nbsp;alfombrados con un ba&ntilde;o completo, piso cer&aacute;mico en estar y balc&oacute;n, cocina cerrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente. Orientaciones Oriente y Poniente.</p>"
        ,galeria_presentacion:{ path: "depto-C1-big.jpg" },
        galeria_detalle:{ path: "depto-C1-thumb.jpg"}
        }

          ]}
        ]
      },

        {nombre: "Edificio Nueva Alameda",descripcion : "<p>Edificio Nueva Alameda ubicado en plena Avenida Libertador Bernardo O`higgins 4877, en la comuna de Estaci&oacute;n Central. Edificio de moderna arquitectura, Full Electric, con excelente conectividad, a pasos de la estaci&oacute;n de Metro Ecuador, y Las Rejas, cercano a Autopista Central, Colegios y Centros de Salud, emplazado en un sector de Comercio y gran desarrollo Urbano. El edificio contempla 22 pisos con 299 departamentos en tipolog&iacute;as Studio, 1 y 2 dormitorios. Cuenta con estacionamientos subterr&aacute;neos y bodegas. Vive en un lugar tranquilo, seguro y cerca de todo. &lowast; Valor no incluye bodega ni estacionamiento. </p>",
        banos: "1 a 2",
        dormitorios: "STUDIO 1 y 2",
        uf_desde: "1405",
        uf_hasta: "none",
        m2_desde : "45",
        m2_hasta: "90",
        url_google: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.2598548651526!2d-70.53214448459775!3d-33.390384201818506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cea90ee8caef%3A0xfbbdd18bb542785b!2sLos+Carpinteros+10096%2C+Las+Condes%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses!2scl!4v1500320625885",
        direccion : {
            calle : "Av Libertador Bernardo O'Higgins",
            numero: "4877",
            especificacion : "none",
            comuna: "Estación Central",
            ciudad: "Santiago",
            region: "Region Metropolitana",
            latitud: -33,
            longitud: -33,
        },
        galeria_presentacion : {
            path: "destacado-nueva-alameda.png"
        },
        galeria_detalle : {
            path: ""
        },
        galeria:[
          {path: "Bicicletero.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-C1-201_Cam1.jpg"},
          {path: "Depto-C1-201_Cam2.jpg"},
          {path: "Depto-C3-205-Cam1.jpg"},
          {path: "Depto-C3-205-Cam2.jpg"},
          {path: "Quincho.jpg"},
          {path: "Salon-Gourmet.jpg"},
          {path: "slider-mini-stacion-01.jpg"},
        ],
        galeria:[
          {path: "Bicicletero.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-C1-201_Cam1.jpg"},
          {path: "Depto-C1-201_Cam2.jpg"},
          {path: "Depto-C3-205-Cam1.jpg"},
          {path: "Depto-C3-205-Cam2.jpg"},
          {path: "Quincho.jpg"},
          {path: "Salon-Gourmet.jpg"},
          {path: "slider-mini-stacion-01.jpg"},
        ],
        plantas : [
          {nombre:"1 Dormitorio",modelos:[
            {tipo:"Tipo B3",dormitorio_banno:"1D - 1B",descripcion:"<p>Excelente&nbsp;departamento de un dormitorio alfombrado, un ba&ntilde;o completo, piso cer&aacute;mico en estar y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y nicho para lavadora. Orientaciones Norte y Sur.</p>"
            ,galeria_presentacion:{ path: "depto-B3-big.jpg" },
            galeria_detalle:{ path: "depto-B3-thumb.jpg"}
          },

          {tipo:"Tipo B2",dormitorio_banno:"1D - 1B",descripcion:"<p>Departamento de muy buen tama&ntilde;o, de un dormitorio con un ba&ntilde;o completo ventilado naturalmente, piso cer&aacute;mico, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y nicho para lavadora. Orientaci&oacute;n Sur.</p>"
          ,galeria_presentacion:{ path: "depto-B2-big.jpg" },
          galeria_detalle:{ path: "depto-B2-thumb.jpg"}
        },

        {tipo:"Tipo B1",dormitorio_banno:"1D - 1B",descripcion:"<p>Departamento muy bien iluminado, con alfombra en&nbsp;dormitorio, piso cer&aacute;mico en estar y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, con nicho para lavadora, cuenta con termo para agua caliente y un ba&ntilde;o completo. Orientaciones Norte y Sur.</p>"
        ,galeria_presentacion:{ path: "depto-B1-big.jpg" },
        galeria_detalle:{ path: "depto-B2-thumb.jpg"}
        }

          ]},
          {nombre:"2 Dormitorio",modelos:[
            {tipo:"Tipo C3",dormitorio_banno:"2D - 1B",descripcion:"<p>Departamento muy iluminado, de 2 dormitorios alfombrados con una excelente distribuci&oacute;n, un ba&ntilde;o completo, piso cer&aacute;mico en living comedor y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y orientaci&oacute;n Nor-Poniente.</p>"
            ,galeria_presentacion:{ path: "depto-C3-big.jpg" },
            galeria_detalle:{ path: "depto-C3-thumb.jpg"}
          },

          {tipo:"Tipo C2",dormitorio_banno:"2D - 1B",descripcion:"<p>Departamento bien distribuido, con buenos espacios interiores, 2 dormitorios alfombrados independientes tipo mariposa con un ba&ntilde;o ventilado naturalmente, piso cer&aacute;mico, balc&oacute;n, cocina cerrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y orientaciones Oriente y Poniente. Norte</p>"
          ,galeria_presentacion:{ path: "depto-C2-big.jpg" },
          galeria_detalle:{ path: "depto-C2-thumb.jpg"}
        },

        {tipo:"Tipo C1",dormitorio_banno:"2D - 1B",descripcion:"<p>Muy grato departamento, bien iluminado, con buenos espacios, de dos&nbsp;dormitorios&nbsp;alfombrados con un ba&ntilde;o completo, piso cer&aacute;mico en estar y balc&oacute;n, cocina cerrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente. Orientaciones Oriente y Poniente.</p>"
        ,galeria_presentacion:{ path: "depto-C1-big.jpg" },
        galeria_detalle:{ path: "depto-C1-thumb.jpg"}
        }

          ]}
        ]

      },

        {nombre: "Edificio Plaza Cousiño",descripcion : "<p>Sin Descripcion</p>",
        banos: "1 a 2",
        dormitorios: "1 y 2",
        uf_desde: "1953",
        uf_hasta: "none",
        m2_desde : "45",
        m2_hasta: "120",
        url_google: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.2598548651526!2d-70.53214448459775!3d-33.390384201818506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cea90ee8caef%3A0xfbbdd18bb542785b!2sLos+Carpinteros+10096%2C+Las+Condes%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses!2scl!4v1500320625885",
        direccion : {
            calle : "Dieciocho",
            numero: "620",
            especificacion : "none",
            comuna: "Santiago",
            ciudad: "Santiago",
            region: "Region Metropolitana",
            latitud: -33,
            longitud: -33,
        },
        galeria_presentacion : {
            path: "destacado-plaza-cousino.jpg"
        },
        galeria_detalle : {
            path: ""
        },
        galeria:[
          {path: "Bicicletero.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-C1-201_Cam1.jpg"},
          {path: "Depto-C1-201_Cam2.jpg"},
          {path: "Depto-C3-205-Cam1.jpg"},
          {path: "Depto-C3-205-Cam2.jpg"},
          {path: "Quincho.jpg"},
          {path: "Salon-Gourmet.jpg"},
          {path: "slider-mini-stacion-01.jpg"},
        ],
        galeria:[
          {path: "Bicicletero.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-C1-201_Cam1.jpg"},
          {path: "Depto-C1-201_Cam2.jpg"},
          {path: "Depto-C3-205-Cam1.jpg"},
          {path: "Depto-C3-205-Cam2.jpg"},
          {path: "Quincho.jpg"},
          {path: "Salon-Gourmet.jpg"},
          {path: "slider-mini-stacion-01.jpg"},
        ],
        plantas : [
          {nombre:"1 Dormitorio",modelos:[
            {tipo:"Tipo B3",dormitorio_banno:"1D - 1B",descripcion:"<p>Excelente&nbsp;departamento de un dormitorio alfombrado, un ba&ntilde;o completo, piso cer&aacute;mico en estar y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y nicho para lavadora. Orientaciones Norte y Sur.</p>"
            ,galeria_presentacion:{ path: "depto-B3-big.jpg" },
            galeria_detalle:{ path: "depto-B3-thumb.jpg"}
          },

          {tipo:"Tipo B2",dormitorio_banno:"1D - 1B",descripcion:"<p>Departamento de muy buen tama&ntilde;o, de un dormitorio con un ba&ntilde;o completo ventilado naturalmente, piso cer&aacute;mico, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y nicho para lavadora. Orientaci&oacute;n Sur.</p>"
          ,galeria_presentacion:{ path: "depto-B2-big.jpg" },
          galeria_detalle:{ path: "depto-B2-thumb.jpg"}
        },

        {tipo:"Tipo B1",dormitorio_banno:"1D - 1B",descripcion:"<p>Departamento muy bien iluminado, con alfombra en&nbsp;dormitorio, piso cer&aacute;mico en estar y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, con nicho para lavadora, cuenta con termo para agua caliente y un ba&ntilde;o completo. Orientaciones Norte y Sur.</p>"
        ,galeria_presentacion:{ path: "depto-B1-big.jpg" },
        galeria_detalle:{ path: "depto-B2-thumb.jpg"}
        }

          ]},
          {nombre:"2 Dormitorio",modelos:[
            {tipo:"Tipo C3",dormitorio_banno:"2D - 1B",descripcion:"<p>Departamento muy iluminado, de 2 dormitorios alfombrados con una excelente distribuci&oacute;n, un ba&ntilde;o completo, piso cer&aacute;mico en living comedor y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y orientaci&oacute;n Nor-Poniente.</p>"
            ,galeria_presentacion:{ path: "depto-C3-big.jpg" },
            galeria_detalle:{ path: "depto-C3-thumb.jpg"}
          },

          {tipo:"Tipo C2",dormitorio_banno:"2D - 1B",descripcion:"<p>Departamento bien distribuido, con buenos espacios interiores, 2 dormitorios alfombrados independientes tipo mariposa con un ba&ntilde;o ventilado naturalmente, piso cer&aacute;mico, balc&oacute;n, cocina cerrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y orientaciones Oriente y Poniente. Norte</p>"
          ,galeria_presentacion:{ path: "depto-C2-big.jpg" },
          galeria_detalle:{ path: "depto-C2-thumb.jpg"}
        },

        {tipo:"Tipo C1",dormitorio_banno:"2D - 1B",descripcion:"<p>Muy grato departamento, bien iluminado, con buenos espacios, de dos&nbsp;dormitorios&nbsp;alfombrados con un ba&ntilde;o completo, piso cer&aacute;mico en estar y balc&oacute;n, cocina cerrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente. Orientaciones Oriente y Poniente.</p>"
        ,galeria_presentacion:{ path: "depto-C1-big.jpg" },
        galeria_detalle:{ path: "depto-C1-thumb.jpg"}
        }

          ]}
        ]
      },

        {nombre: "Edificio Santo Domingo",descripcion : "<p>Edificio de moderna arquitectura ubicado en calle Santo Domingo 4259, con excelente conectividad, a pasos del metro Gruta de Lourdes y caminando al parque Quinta Normal. Vive en un lugar tranquilo, seguro y cerca de todo. </p>",
        banos: "1 a 2",
        dormitorios: "STUDIO 1 ,2, y 3",
        uf_desde: "1254",
        uf_hasta: "none",
        m2_desde : "35",
        m2_hasta: "150",
        url_google: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.2598548651526!2d-70.53214448459775!3d-33.390384201818506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cea90ee8caef%3A0xfbbdd18bb542785b!2sLos+Carpinteros+10096%2C+Las+Condes%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses!2scl!4v1500320625885",
        direccion : {
            calle : "Santo Domingo",
            numero: "4259",
            especificacion : "none",
            comuna: "Quinta Normal",
            ciudad: "Santiago",
            region: "Region Metropolitana",
            latitud: -33,
            longitud: -33,
        }
        ,
        galeria_presentacion : {
            path: "destacado-sto-doming.png"
        },
        galeria_detalle : {
            path: ""
        },
        galeria:[
          {path: "Bicicletero.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-C1-201_Cam1.jpg"},
          {path: "Depto-C1-201_Cam2.jpg"},
          {path: "Depto-C3-205-Cam1.jpg"},
          {path: "Depto-C3-205-Cam2.jpg"},
          {path: "Quincho.jpg"},
          {path: "Salon-Gourmet.jpg"},
          {path: "slider-mini-stacion-01.jpg"},
        ],
        galeria:[
          {path: "Bicicletero.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-C1-201_Cam1.jpg"},
          {path: "Depto-C1-201_Cam2.jpg"},
          {path: "Depto-C3-205-Cam1.jpg"},
          {path: "Depto-C3-205-Cam2.jpg"},
          {path: "Quincho.jpg"},
          {path: "Salon-Gourmet.jpg"},
          {path: "slider-mini-stacion-01.jpg"},
        ],
        plantas : [
          {nombre:"1 Dormitorio",modelos:[
            {tipo:"Tipo B3",dormitorio_banno:"1D - 1B",descripcion:"<p>Excelente&nbsp;departamento de un dormitorio alfombrado, un ba&ntilde;o completo, piso cer&aacute;mico en estar y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y nicho para lavadora. Orientaciones Norte y Sur.</p>"
            ,galeria_presentacion:{ path: "depto-B3-big.jpg" },
            galeria_detalle:{ path: "depto-B3-thumb.jpg"}
          },

          {tipo:"Tipo B2",dormitorio_banno:"1D - 1B",descripcion:"<p>Departamento de muy buen tama&ntilde;o, de un dormitorio con un ba&ntilde;o completo ventilado naturalmente, piso cer&aacute;mico, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y nicho para lavadora. Orientaci&oacute;n Sur.</p>"
          ,galeria_presentacion:{ path: "depto-B2-big.jpg" },
          galeria_detalle:{ path: "depto-B2-thumb.jpg"}
        },

        {tipo:"Tipo B1",dormitorio_banno:"1D - 1B",descripcion:"<p>Departamento muy bien iluminado, con alfombra en&nbsp;dormitorio, piso cer&aacute;mico en estar y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, con nicho para lavadora, cuenta con termo para agua caliente y un ba&ntilde;o completo. Orientaciones Norte y Sur.</p>"
        ,galeria_presentacion:{ path: "depto-B1-big.jpg" },
        galeria_detalle:{ path: "depto-B2-thumb.jpg"}
        }

          ]},
          {nombre:"2 Dormitorio",modelos:[
            {tipo:"Tipo C3",dormitorio_banno:"2D - 1B",descripcion:"<p>Departamento muy iluminado, de 2 dormitorios alfombrados con una excelente distribuci&oacute;n, un ba&ntilde;o completo, piso cer&aacute;mico en living comedor y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y orientaci&oacute;n Nor-Poniente.</p>"
            ,galeria_presentacion:{ path: "depto-C3-big.jpg" },
            galeria_detalle:{ path: "depto-C3-thumb.jpg"}
          },

          {tipo:"Tipo C2",dormitorio_banno:"2D - 1B",descripcion:"<p>Departamento bien distribuido, con buenos espacios interiores, 2 dormitorios alfombrados independientes tipo mariposa con un ba&ntilde;o ventilado naturalmente, piso cer&aacute;mico, balc&oacute;n, cocina cerrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y orientaciones Oriente y Poniente. Norte</p>"
          ,galeria_presentacion:{ path: "depto-C2-big.jpg" },
          galeria_detalle:{ path: "depto-C2-thumb.jpg"}
        },

        {tipo:"Tipo C1",dormitorio_banno:"2D - 1B",descripcion:"<p>Muy grato departamento, bien iluminado, con buenos espacios, de dos&nbsp;dormitorios&nbsp;alfombrados con un ba&ntilde;o completo, piso cer&aacute;mico en estar y balc&oacute;n, cocina cerrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente. Orientaciones Oriente y Poniente.</p>"
        ,galeria_presentacion:{ path: "depto-C1-big.jpg" },
        galeria_detalle:{ path: "depto-C1-thumb.jpg"}
        }

          ]}
        ]
      },

        {nombre: "Edificio Alameda Central",descripcion : "<p>Edificio de 24 pisos con c&oacute;modos espacios comunes como Lounge, Sal&oacute;n Gourmet, Lavander&iacute;a y Quinchos panor&aacute;micos. Vendido y entregado el a&ntilde;o 2016, podemos encontrar tipolog&iacute;as de departamentos, Estudio, de 1 Dormitorio y 2 Dormitorios, todos con 1 Ba&ntilde;o. Su arquitectura favorece la orientaci&oacute;n de cada uno de estos departamentos, logrando dar buena luz y confortables espacios. Cuenta con un subterr&aacute;neo para estacionamientos y bodegas, adem&aacute;s de estacionamientos en el primer nivel rodeando su Hall de Acceso doble altura, donde tambi&eacute;n se encuentra un sal&oacute;n multiuso para los propietarios y sus visitas.</p>",
        banos: "1 a 3",
        dormitorios: "STUDIO 1 ,2, y 3",
        uf_desde: "1500",
        uf_hasta: "none",
        m2_desde : "45",
        m2_hasta: "120",
        url_google: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.2598548651526!2d-70.53214448459775!3d-33.390384201818506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cea90ee8caef%3A0xfbbdd18bb542785b!2sLos+Carpinteros+10096%2C+Las+Condes%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses!2scl!4v1500320625885",
        direccion : {
            calle : "Coronel Godoy",
            numero: "128",
            especificacion : "none",
            comuna: "Estación Central",
            ciudad: "Santiago",
            region: "Region Metropolitana",
            latitud: -33,
            longitud: -33,
        },
        galeria_presentacion : {
            path: "destacado-alameda-central.jpg"
        },
        galeria_detalle : {
            path: ""
        },
        galeria:[
          {path: "Bicicletero.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-B1-206.jpg"},
          {path: "Depto-C1-201_Cam1.jpg"},
          {path: "Depto-C1-201_Cam2.jpg"},
          {path: "Depto-C3-205-Cam1.jpg"},
          {path: "Depto-C3-205-Cam2.jpg"},
          {path: "Quincho.jpg"},
          {path: "Salon-Gourmet.jpg"},
          {path: "slider-mini-stacion-01.jpg"},
        ],
        plantas : [
          {nombre:"1 Dormitorio",modelos:[
            {tipo:"Tipo B3",dormitorio_banno:"1D - 1B",descripcion:"<p>Excelente&nbsp;departamento de un dormitorio alfombrado, un ba&ntilde;o completo, piso cer&aacute;mico en estar y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y nicho para lavadora. Orientaciones Norte y Sur.</p>"
            ,galeria_presentacion:{ path: "depto-B3-big.jpg" },
            galeria_detalle:{ path: "depto-B3-thumb.jpg"}
          },

          {tipo:"Tipo B2",dormitorio_banno:"1D - 1B",descripcion:"<p>Departamento de muy buen tama&ntilde;o, de un dormitorio con un ba&ntilde;o completo ventilado naturalmente, piso cer&aacute;mico, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y nicho para lavadora. Orientaci&oacute;n Sur.</p>"
          ,galeria_presentacion:{ path: "depto-B2-big.jpg" },
          galeria_detalle:{ path: "depto-B2-thumb.jpg"}
        },

        {tipo:"Tipo B1",dormitorio_banno:"1D - 1B",descripcion:"<p>Departamento muy bien iluminado, con alfombra en&nbsp;dormitorio, piso cer&aacute;mico en estar y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, con nicho para lavadora, cuenta con termo para agua caliente y un ba&ntilde;o completo. Orientaciones Norte y Sur.</p>"
        ,galeria_presentacion:{ path: "depto-B1-big.jpg" },
        galeria_detalle:{ path: "depto-B2-thumb.jpg"}
        }

          ]},
          {nombre:"2 Dormitorio",modelos:[
            {tipo:"Tipo C3",dormitorio_banno:"2D - 1B",descripcion:"<p>Departamento muy iluminado, de 2 dormitorios alfombrados con una excelente distribuci&oacute;n, un ba&ntilde;o completo, piso cer&aacute;mico en living comedor y balc&oacute;n, cocina integrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y orientaci&oacute;n Nor-Poniente.</p>"
            ,galeria_presentacion:{ path: "depto-C3-big.jpg" },
            galeria_detalle:{ path: "depto-C3-thumb.jpg"}
          },

          {tipo:"Tipo C2",dormitorio_banno:"2D - 1B",descripcion:"<p>Departamento bien distribuido, con buenos espacios interiores, 2 dormitorios alfombrados independientes tipo mariposa con un ba&ntilde;o ventilado naturalmente, piso cer&aacute;mico, balc&oacute;n, cocina cerrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente y orientaciones Oriente y Poniente. Norte</p>"
          ,galeria_presentacion:{ path: "depto-C2-big.jpg" },
          galeria_detalle:{ path: "depto-C2-thumb.jpg"}
        },

        {tipo:"Tipo C1",dormitorio_banno:"2D - 1B",descripcion:"<p>Muy grato departamento, bien iluminado, con buenos espacios, de dos&nbsp;dormitorios&nbsp;alfombrados con un ba&ntilde;o completo, piso cer&aacute;mico en estar y balc&oacute;n, cocina cerrada y equipada con horno, encimera y campana, full electric, con termo para agua caliente. Orientaciones Oriente y Poniente.</p>"
        ,galeria_presentacion:{ path: "depto-C1-big.jpg" },
        galeria_detalle:{ path: "depto-C1-thumb.jpg"}
        }

          ]}
        ]

      }
      ]
    }
      return(data);
    },

  get_novedades : function () {
      var data= {
        is_ok: true,
        novedades: [
          {
          titulo:"Edificio Estación",
          sub_titulo: "¡EL QUE ELIGE PRIMERO,ELIGE MEJOR!",
          descripcion : "<p>As&iacute; es amigos. Como bien dice el dicho popular, el que elige primero, elige mejor! Ven e inscr&iacute;bete en el nuevo proyecto de Inmobiliaria Habite, en la comuna de Estaci&oacute;n Central. Inscr&iacute;bete ac&aacute; para m&aacute;s informaci&oacute;n:&nbsp;Edificio Estaci&oacute;n.</p>",
          detalle: '<p>As&iacute; es amigos. Como bien dice el dicho popular, el que elige primero, elige mejor! Ven e inscr&iacute;bete en el nuevo proyecto de Inmobiliaria Habite, en la comuna de Estaci&oacute;n Central. Inscr&iacute;bete ac&aacute; para m&aacute;s informaci&oacute;n:&nbsp;Edificio Estaci&oacute;n.</p><p>As&iacute; es amigos. Como bien dice el dicho popular, el que elige primero, elige mejor! Ven e inscr&iacute;bete en el nuevo proyecto de Inmobiliaria Habite, en la comuna de Estaci&oacute;n Central. Inscr&iacute;bete ac&aacute; para m&aacute;s informaci&oacute;n:&nbsp;Edificio Estaci&oacute;n.</p>',  galeria_presentacion : {
                path: "promocion-2.jpg"
            },
            galeria_detalle : {
                path: ""
            },},
          {titulo:"Edificio Santo Domingo",
          sub_titulo: "PAGA EL PIE EN 25 CUOTAS!",
          descripcion : "<p>Inauguramos un nuevo proyecto en Estaci&oacute;n Central. Aprovecha venta en verde pagando tu pie en 25 cuotas, Invierte Hoy y Disfruta ma&ntilde;ana. Si quieres saber precios, tipolog&iacute;as y caracter&iacute;sticas, ll&aacute;manosal +569 957485720. &iexcl;Te esperamos!.</p>",
          detalle: "<p>As&iacute; es amigos. Como bien dice el dicho popular, el que elige primero, elige mejor! Ven e inscr&iacute;bete en el nuevo proyecto de Inmobiliaria Habite, en la comuna de Estaci&oacute;n Central. Inscr&iacute;bete ac&aacute; para m&aacute;s informaci&oacute;n:&nbsp;Edificio Estaci&oacute;n.</p><p>As&iacute; es amigos. Como bien dice el dicho popular, el que elige primero, elige mejor! Ven e inscr&iacute;bete en el nuevo proyecto de Inmobiliaria Habite, en la comuna de Estaci&oacute;n Central. Inscr&iacute;bete ac&aacute; para m&aacute;s informaci&oacute;n:&nbsp;Edificio Estaci&oacute;n.</p>",
          galeria_presentacion : {
              path: "promocion-3.jpg"
          },
          galeria_detalle : {
              path: ""
          }
        }
        ]
      };
      return(data);
    }

    ,
    get_preguntas : function () {
      var data= {
        is_ok: true,
        preguntas : [
          {pregunta: "Necesito los planos de mi propiedad, ¿Dónde los consigo?" , respuesta: "Los planos de tu propiedad puedes solicitarlos en la Dirección de Obras Municipales (DOM) de la Municipalidad de la comuna en donde se encuentra tu domicilio."},
          {pregunta: "¿En qué consiste el equipo móvil de asistencia Posventa?" , respuesta: '<p>El equipo móvil de asistencia Posventa Habite que te asistirá en terreno está conformado por ingenieros constructores, coordinadores, supervisores y maestros polivalentes, quienes deberán identificarse antes de entrar a su domicilio con su credencial y cédula de identidad.Para ser más eficientes, el equipo móvil sólo resuelve solicitudes efectuadas previamente por escrito al correo electrónico postventa@terraconstructora.cl, o a través de nuestro sistema de soporte en línea, formalidad establecida para evitar alterar el calendario de trabajo programado y asegurar el seguimiento de las tareas por realizar.</p> <p>Si al efectuar una visita técnica, nadie atiende en tu domicilio, te dejarán un comprobante y deberás contactarnos para programar una nueva visita.</p> <p>Durante la ejecución de algunos trabajos será necesario esperar algún tiempo por razones climáticas, técnicas o debido a la demora de la respuesta de algún proveedor, plazo que te será debidamente informado por el coordinador o supervisor responsable.</p> <p>Es obligatorio que una vez concluidas las reparaciones, firmes la recepción para registrar tu conformidad con el trabajo realizado o bien enviarnos un correo a postventa@terraconstructora.cl indicando la conformidad de los trabajos. En caso contrario, si efectúas una nueva solicitud de postventa, ante la falta de firma de la orden del trabajo anterior, no se cursará.</p> <p>Nuestro horario de atención de postventa en terreno es de lunes a viernes de 09:00 a 17:00 hrs. En caso de que sufras una emergencia fuera de este horario, te sugerimos buscar una solución temporal hasta que podamos asistirte.</p>'
          },

          {pregunta: "Quiero realizar una ampliación o trabajo de remodelación en mi propiedad, ¿Puedo pedirles que lo haga Habite?" , respuesta: " No. Habite no realiza trabajos de ampliación ni adecuaciones adicionales."},

          {pregunta: "¿Cuál es el tiempo de garantí­a que tiene mi departamento?" , respuesta: "<p>*Hasta 10 años: En el caso de fallas o defectos que afecten a la estructura soportante de tu inmueble, como: cimientos, sobrecimientos, fundaciones, muros soportantes, losas, vigas, cadenas, pilares, estructura de techumbres y entramados horizontales o verticales de carácter estructural. *Hasta 5 años: Cuando se trate de fallas o defectos de los elementos constructivos o de las instalaciones, tales como: cubiertas de techumbres, ventanas, estructuras no soportantes de muro y de cielo, bases de pavimentos, estructuras o bases de pisos, impermeabilizaciones, aislamiento térmico y acústico, instalaciones eléctricas, corrientes débiles, calefacción, climatización, gas, sanitarias, redes húmedas y secas de incendio, sistemas de evacuación de basuras e instalaciones. Además, de equipos eléctricos mayores como, ascensores, equipos de presurización, calderas colectivas y grupos electrógenos(*).</p> <p>*Hasta 3 años: Si hubiesen fallas o defectos que afecten a elementos de terminaciones o de acabado de las obras tales como: cielos, pisos, puertas, revestimientos y pinturas exteriores e interiores, barnices, alfombras, cerámicos, quincallerí­a, muebles adosados o empotrados a la construcción.</p> <p>Para ejercer las garantí­as en las instalaciones es condición absoluta que la Comunidad mantenga contrato de mantenimiento de ellas con los instaladores. Cualquier intervención por terceros en las instalaciones provoca la caducidad inmediata de la garantí­a.</p>."},

          {pregunta: "¿Cómo puedo formular un reclamo de mi propiedad?" , respuesta: "Enviando un correo a postventa@terraconstructora.cl en donde se coordinará una visita y se evaluará si tu problema está cubierto por la garantí­a. De ser así­, se atenderá tu reclamo sin costo alguno para tí­."},

          {pregunta: "¿Cuánto demora la atención de un reclamo?" , respuesta: "Dentro de los 5 dí­as hábiles siguientes a la formulación de un reclamo, personal de nuestra empresa se contactará contigo para programar una visita de evaluación del reclamo. En caso de proceder, se agendará el trabajo de reparación dentro de los horarios de asistencia de posventa, en acuerdo contigo. En caso de tratarse de una emergencia, ésta debe ser inspeccionada durante el dí­a (si es día hábil), o el dí­a hábil más cercano."},

          {pregunta: "Me llegaron las cuentas, pero los consumos corresponden en un porcentaje de HABITE y otro a mí­." , respuesta: "Por lo general, la cuenta inicial de tu departamento contendrá un monto de cargo de HABITE, por lo que una vez cancelada por ti, debes hacer llegar la cuenta original pagada a nuestras oficinas ubicadas en Av. La Dehesa 181, Lo Barnechea, Santiago o bien escanearlas y enviarlas digitalmente al correo devoluciones@habite.cl indicando número de departamento, su dirección, datos de transferencia y comprobante de pago."},

          {pregunta: "¿Con quién debo retirar la copia de mi escritura?" , respuesta: "<p>En caso de que su operación haya sido a través de una institución bancaria, Ud. debe solicitar su copia al ejecutivo de crédito del banco directamente; Si su operación fue contado, debe dirigirse al ejecutivo de la inmobiliaria que lo ha atendido en el proceso de compra.</p><p>El tiempo aproximado del proceso completo de ecrituración, es de 120 días desde que se firma en Notaría.</p>."},

        ]
      }; return(data);
    },

    get_manuales : function (){
        var data = {
           is_ok: true,
           manuales_principales : [
             {titulo : "Asistencia en Terreno",paht:""},
             {titulo : "Manual de Recepción Viviendas Nuevas",paht:""},
             {titulo : "Emergencias Postventa",paht:""},
             {titulo : "Manual de Mantención de Pisos Flotantes",paht:""},
             {titulo : "Anexo Humedad en el Primer Año",paht:""},
             {titulo : "Termo Eléctrico Winter (Edificio Parque Lourdes)",paht:""},
             {titulo : "Manual de uso Horno Eléctrico",paht:""},
             {titulo : "Manual de uso cocina encimera (Edificio Parque Lourdes)",paht:""}

           ],
           manuales_edificios : [
             {nombre:"Edificio Plaza Cousiño",manuales:[
               {titulo : "Manual de Uso y Mantenimiento Edificio",paht:""},
               {titulo : "Reglamento de Copropiedad Edificio",paht:""},
               {titulo : "Reglamento Interno y de Convivencia",paht:""},
               {titulo : "Reglamento de Seguridad e Higiene Piscina",paht:""},
               {titulo : "Manuales Artefactos",paht:""}
             ]},
             {nombre:"Edificio Alameda Central",manuales:[
               {titulo : "Reglamento de Copropiedad Edificio",paht:""},
               {titulo : "Reglamento Interno y de Convivencia Edificio",paht:""},
               {titulo : "Plan de Evacuación",paht:""},
               {titulo : "Manual de Uso y Mantenimiento AC",paht:""},
             ]},
             {nombre:"Edificio Parque Lourdes",manuales:[
               {titulo : "Plan de Evacuación",paht:""},
               {titulo : "Reglamento de Copropiedad",paht:""},
               {titulo : "Manual Termo Eléctrico Winter",paht:""},
             ]},
             {nombre:"Edificio Altavista",manuales:[
                {titulo : "Manual de Uso y Mantenimiento",paht:""},
                {titulo : "Reglamento de Copropiedad",paht:""},
                {titulo : "Reglamento de Uso Piscina",paht:""},
                {titulo : "Plan de evacuación",paht:""},
             ]},
             {nombre:"Edificio Décima Avenida 1230",manuales:[
               {titulo : "Manual de Uso y Mantenimiento",paht:""},
               {titulo : "Reglamento de Copropiedad",paht:""},
             ]},
             {nombre:"Edificio Lo Ovalle 1231",manuales:[
               {titulo : "Manual de Uso y Mantenimiento",paht:""},
               {titulo : "Reglamento de Copropiedad",paht:""},
             ]},
             {nombre:"Edificio Carvajal 0660",manuales:[
               {titulo : "Manual de Uso y Mantenimiento",paht:""},
               {titulo : "Reglamento de Copropiedad",paht:""},
             ]},
             {nombre:"Edificio San Ignacio 1673",manuales:[
               {titulo : "Manual de Uso y Mantenimiento",paht:""},
               {titulo : "Reglamento de Copropiedad",paht:""},
             ]},
             {nombre:"Edificio Walker Martínez 1612",manuales:[
               {titulo : "Manual de Uso y Mantenimiento",paht:""},
               {titulo : "Reglamento de Copropiedad",paht:""},
             ]},
           ]


        };
        return data;
    }

}
