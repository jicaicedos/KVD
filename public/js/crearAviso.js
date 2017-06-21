function crearAviso() {

	var idbeneficiario = $('#idbeneficiario').val()

	$.getJSON("../bd/K2GestoresMarzo-UTF8.json", function(datos) {
			/*optional stuff to do after success */
			$.each(datos["K2 Gestores Marzo"], function(index, KVD) {
				if( KVD["id beneficiario"] == idbeneficiario ) {  
					$("#aviso").html("<br><br><br><p>FECHA 	_________/_________/ 2017</p><br>" +
						"<p class='idbeneficiario_aviso'><strong>" + KVD["id beneficiario"] + "</strong></p>" +
						"<p><strong class='sede'>SEDE</strong>" + KVD["nombre institucion"] + "</p>" +
						"<p><strong class='departamento'>DEPARTAMENTO</strong>" + KVD["departamento"] + "</p>" +
						"<p><strong class='municipio'>MUNICIPIO</strong>" + KVD["municipio"] + "</p>" +
						"<p><strong class='centropoblado'>CENTRO POBLADO</strong>" + KVD["centro poblado"] + "</p>"
					)
					return false
				}
				else {
					$("#aviso").html("<br><p>No se encontró información del Kiosco Vive Digital consultado</p>")
				}
			});
	});
}