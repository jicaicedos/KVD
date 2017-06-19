function consultarInfoKVD() {

	var txt = document.getElementById("gestores")
    var temp = ""
	var idbeneficiario = $('#buscar').val()


	$.getJSON("K2 Gestores Marzo.json", function(datos) 
	{
        $.each(datos["K2 Gestores Marzo"], function(idx,KVD) {
        	
        	if ( KVD["id beneficiario"] == idbeneficiario ) {
                
        		txt.innerHTML = "<h4>Códigos de identificación del KVD</h4>" +
                                "<div class='separador'></div>" + 
        						"<p> ID Beneficiario: " + KVD["id beneficiario"] + "</p>" +
        						"<p>ID Punto:"+ KVD["id punto"] +

        						"<h4>Ubicación del Kiosco Vive Digital</h4>" +
                                "<div class='separador'></div>" + 
        						"<p>Departamento:"+ KVD["departamento"] + "</p>" +
        						"<p>Municipio:"+ KVD["municipio"] + "</p>" +
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
        						"<p>Celular:" + KVD["Celular gestor"] + "</p>"                    
                return false 

        	}
            else {

                txt.innerHTML = "<br><p>No se tiene información de este Kiosco Vive Digital</p>"
                
            }
         });
    });
}