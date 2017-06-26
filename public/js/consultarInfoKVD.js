/*********************************************************************************************

    Función para obtener los datos de un Kiosco Vive Digital

    Parámetros:
        IDBeneficiario: Valor ingresado por el usuario

**********************************************************************************************/
function consultarInfoKVD() {

    // Se obtiene el valor de ID Beneficiario ingresado por el usuario
	var idbeneficiario = $('#buscar').val()

    // Se cargan los datos a partir de un archivo JSON
    $.getJSON("../bd/K2GestoresMarzo-UTF8.json", function(datos) 
	{
        // Se recorren uno a uno los registros en el archivo JSON
        $.each(datos["K2 Gestores Marzo"], function(idx,KVD) {
        	
            // Si un registro coincide con el criterio de búsqueda se obtienen los datos de ese registro
        	if ( KVD["id beneficiario"] == idbeneficiario ) {

                // Copiamos los datos en el campo "gestores" del html: VerInformacionKVD.html
        		$("#gestores").html("<h4>Códigos de identificación del KVD</h4>" +
                                "<div class='separador'></div>" + 
        						"<p> ID Beneficiario: " + KVD["id beneficiario"] + "</p>" +
        						"<p>ID Punto:"+ KVD["id punto"] +

        						"<h4>Ubicación del Kiosco Vive Digital</h4>" +
                                "<div class='separador'></div>" + 
        						"<p>Departamento:"+  KVD["departamento"] + "</p>" +
        						"<p>Municipio:"+  unescape(KVD["municipio"]) + "</p>" +
        						"<p>Centro poblado:" + KVD["centro poblado"] + "</p>" +
        						"<p>Institución Educativa:" + KVD["nombre institucion"] + "</p>" +
        						"<p> Sede:" + KVD["nombre sede"] + "</p>" +
        						"<p>Dirección:"+ KVD["direccion de la sede educativa"] + "</p>" +

        						"<h4>Líneas telefónicas</h4>" +
                                "<div class='separador'></div>" + 
        						"<p>Línea cabina:"+ KVD["linea cabina "] + "</p>" +
        						"<p>Línea interna:"+ KVD["linea interna"] + "</p>" +

        						"<h4>Coordinador</h4>" +
                                "<div class='separador'></div>" + 
        						"<p>Nombre:"+ KVD["coordinador"] + "</p>" +
        						"<p>Celular coordinador:"+ KVD["telefono contacto"] + "</p>" +

        						"<h4>Datos Gestor(a)</h4>" +
                                "<div class='separador'></div>" + 
        						"<p>Nombre:" + KVD["nombres gestor"] + "</p>" +
        						"<p>Cédula:" + KVD["cedula gestor"] + "</p>" +
        						// "<p>Celular:" + KVD["Celular gestor"] + "</p>"  +
                                "<p>Correo electrónico:" + KVD["correo electrónico  gestor"] + "</p>"
                            )
                return false 

        	}
            else {

                $("#gestores").html("<br><p>No se tiene información de este Kiosco Vive Digital</p>")

            }
         });
    });
}
