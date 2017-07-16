function consultarInventario() {
	
	var idcontratista = $("#idcontratista").val()

	$.getJSON("bd/inventario-UTF8.json", function(datos) 
	{
		$.each(datos["inventario"], function(index, inventario) 
		{
			
			if( inventario["ID"] == idcontratista ) 
			{
				$("#inventarioKVD").html(
					"<p><div class='inventario_bold'> Sky Edge Web Enhance</div>" + inventario["SKY EDGE WEB ENHANCE"] + "</p>"+
					"<p><div class='inventario_bold'> Access Point</div>" + inventario["ACCESS POINT"] + "</p>"+
					"<p><div class='inventario_bold'> Impresora</div>" + inventario["IMPRESORA LASER"] + "</p>"+
					"<p><div class='inventario_bold'> Servidor</div>" + inventario["EQUIPO SERVIDOR"] + "</p>"+
					"<p><div class='inventario_bold'> Televisor</div>" + inventario["TELEVISOR 42"] + "</p>"+
					"<p><div class='inventario_bold'> Switch</div>" + inventario["SWITCH 8 PUERTOS"] + "</p>"+
					"<p><div class='inventario_bold'> ATA</div>" + inventario["ATA AUDIOCODES"] + "</p>"+
					"<p><div class='inventario_bold'> Mesa</div>" + inventario["MESA PARA TV O IMPRESORA"] + "</p>"+
					"<p><div class='inventario_bold'> Teléfono público</div>" + inventario["TELEFONO PUBLICO"] + "</p>"
				)
				return false
			}
		});

	});
}

function consultarIDContratista() {
	
	var idbeneficiario = $("#idbeneficiario").val()

	var band = 0

	// Inicializar mensajes y cajas de texto
	$("#contratista").html("")
	$("#inventarioKVD").html("")
	$("#idcontratista").val("0")
	
	$.getJSON("bd/K2GestoresMarzo-UTF8.json",  function(datos) 
	{
		$.each(datos["K2 Gestores Marzo"], function(index, KVD) 
		{			
			if( KVD["id beneficiario"] == idbeneficiario ) 
			{
				$("#contratista").html("Id Contratista: " + KVD["id punto"])								
				band = 1
				return false
			}
		});

		if ( band == 0 ) {
			alert("No se tiene información del KVD: "+idbeneficiario)

		}
	});

}