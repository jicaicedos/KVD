/*********************************************************************************************

    Función para obtener los datos de un Kiosco Vive Digital

    Parámetros:
        IDBeneficiario: Valor ingresado por el usuario

**********************************************************************************************/
function consultarInfoKVD() {

    // Se obtiene el valor de ID Beneficiario ingresado por el usuario
	var idbeneficiario = $('#buscar').val()

    // Se cargan los datos a partir de un archivo JSON
    $.getJSON("bd/base-kvd-mayo-18.json", function(datos) 
	{
        // Se recorren uno a uno los registros en el archivo JSON
        $.each(datos["K2 Gestores Marzo"], function(idx,KVD) {
        	
            // Si un registro coincide con el criterio de búsqueda se obtienen los datos de ese registro
        	if ( KVD["ID BENEFICIARIO"] == idbeneficiario ) {

                // Copiamos los datos en el campo "gestores" del html: VerInformacionKVD.html
        		$("#gestores").html("<h4>Kiosco Vive Digital</h4>" +
                                "<div class='separador'></div>" + 
                                "<p>Contratistaa:    " + KVD["CONTRATISTA"] + "</p>" +
                                "<p>Tipo de KVD:    " + KVD["TIPO KVD"] + "</p>" +
                                "<p>Tipo de Velocidad:    " + KVD["TIPO VELOCIDAD"] + "</p>" +
                                "<p>Tipo de solución:    " + KVD["TIPO DE SOLUCIÓN INSTALADA"] + "</p>" +
                                "<p>IP Pública:    " + KVD["IP PUBLICA"] + "</p>" +
                                "<p>Velocidad mínima Download:    " + KVD["VELOCIDAD MÍNIMA DOWNLOAD (Kbps)"] + "</p>" +
                                "<p>Velocidad mínima Upload:    " + KVD["VELOCIDAD MÍNIMA UPLOAD (Kbps)"] + "</p>" +                               


                                "<h4>Códigos KVD</h4>" +
                                "<div class='separador'></div>" + 
        						"<p>ID Beneficiario:    " + KVD["ID BENEFICIARIO"] + "</p>" +
        						"<p>ID Punto:    "+ KVD["ID Punto"] +

        						"<h4>Ubicación del Kiosco Vive Digital</h4>" +
                                "<div class='separador'></div>" + 
        						"<p>Departamento:     "+  KVD["Departamento"] + "</p>" +
        						"<p>Municipio:     "+  unescape(KVD["Municipio"]) + "</p>" +
        						"<p>Centro poblado:     " + KVD["Centro poblado"] + "</p>" +
        						"<p>Institución Educativa:     " + KVD["Nombre Institución"] + "</p>" +
        						"<p> Sede:     " + KVD["Nombre Sede"] + "</p>" +
        						"<p>Dirección:     "+ KVD["Dirección de la sede educativa"] + "</p>" +

        						"<h4>Líneas telefónicas</h4>" +
                                "<div class='separador'></div>" + 
        						"<p>Teléfono KVD:     "+ KVD["TELÉFONO KVD"] + "</p>" +

        						"<h4>Datos Gestor(a)</h4>" +
                                "<div class='separador'></div>" + 
        						"<p>Nombre:     " + KVD["GESTOR"] + "</p>" +
        						// "<p>Cédula:     " + KVD["cedula gestor"] + "</p>" +
        						"<p>Celular:     " + KVD["TELÉFONO MOVIL GESTOR"] + "</p>"  +
                                "<p>Correo electrónico:     " + KVD["CORREO ELECTRÓNICO  GESTOR"] + "</p>" + 

                                "<h4>Coordinador</h4>" +
                                "<div class='separador'></div>" + 
                                "<p>Nombre:     "+ KVD["COORDINADOR"] + "</p>" +
                                "<p>Celular coordinador:     "+ KVD["TELEFONO CONTACTO"] + "</p>"

                            )
                return false 

        	}
            else {

                $("#gestores").html("<br><p>No se tiene información de este Kiosco Vive Digital</p>")

            }
         });
    });
}
