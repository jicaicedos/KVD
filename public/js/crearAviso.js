function crearAviso() {

	var arr_avisos = [{},{}]
	var arr_idbeneficiario = []
	var cont = 0

	// Se obtiene los ID ingresador por el interventor de KVD al sistema
	arr_idbeneficiario[0] = $('#idbeneficiario1').val()
	arr_idbeneficiario[1] = $('#idbeneficiario2').val()

	var textID1 = "No se encontró información del KVD: " + arr_idbeneficiario[0]
	var textID2 = "No se encontró información del KVD: " + arr_idbeneficiario[1]

	$.getJSON("../bd/K2GestoresMarzo-UTF8.json", function(datos) 
	{
		$.each(datos["K2 Gestores Marzo"], function(index, KVD) 
		{

			if( KVD["id beneficiario"] == arr_idbeneficiario[0] ) 
			{ 
				arr_avisos[cont].idbeneficiario = KVD["id beneficiario"]
				arr_avisos[cont].ie = KVD["nombre institucion"]
				arr_avisos[cont].departamento = KVD["departamento"]
				arr_avisos[cont].municipio = KVD["municipio"]
				arr_avisos[cont].centropoblado = KVD["centro poblado"]				
				cont++
				textID1 = ""
			}
			if( KVD["id beneficiario"] == arr_idbeneficiario[1] ) 
			{
				arr_avisos[cont].idbeneficiario = KVD["id beneficiario"]
				arr_avisos[cont].ie = KVD["nombre institucion"]
				arr_avisos[cont].departamento = KVD["departamento"]
				arr_avisos[cont].municipio = KVD["municipio"]
				arr_avisos[cont].centropoblado = KVD["centro poblado"]
				cont++
				textID2 = ""
			}
		});

		if( cont == 0 ) 
		{
			alert( textID1 + "\n\n" + textID2 )
		}
		if( cont == 1 ) 
		{
			if( textID1 == ("No se encontró información del KVD: " + arr_idbeneficiario[0]) )
			{
				alert(textID1+"\n\nAvisos generados: "+arr_idbeneficiario[1])
			}
			if( textID2 == ("No se encontró información del KVD: " + arr_idbeneficiario[1]) ) 
			{
				alert(textID2+"\n\nAvisos generados: "+arr_idbeneficiario[0])
			}
			avisos(arr_avisos, cont)
			return false
		}
		if( cont >= 1 ) 
		{
			alert("Avisos generados: "+arr_idbeneficiario[0] +" y "+arr_idbeneficiario[1])
			avisos(arr_avisos, cont)
			return false
		}
	});
}

// Se toman los datos obtenidos en la consulta y se estructura el archivo PDF del aviso
function avisos(arr_avisos, cont) {

	var doc = new jsPDF()
	var x = 30
	var y = 80
	var nombrePDF = ""

	for( var i=0; i<cont; i++ ) 
	{
		doc.setFontSize(25)
		doc.text("Fecha ______/______/ 2017", x, y-50)	// y-50
		doc.setFontSize(160)
		doc.setFontType("bold")
		doc.text(arr_avisos[i].idbeneficiario, x, y) // y=70
		nombrePDF += "(" + arr_avisos[i].idbeneficiario + ")"
		doc.setFontSize(15)
		doc.setFontType("normal")
		doc.text("Sede   " + arr_avisos[i].ie, x, y+10) // y+10
		doc.setFontSize(20)
		doc.text("Departamento     " + arr_avisos[i].departamento, x, y+20)
		doc.setFontSize(20)
		doc.text("Municipio             " + arr_avisos[i].municipio, x, y+30)
		doc.setFontSize(20)
		doc.text("Centro poblado   " + arr_avisos[i].centropoblado, x, y+40)
		if( i%2 == 0 ) {
			doc.text("-------------------------------------------------------------------------", x, y+60)
		}
		y = y + 130
	}

	// Se genera y guarda el PDF en la carpeta "Descargas"
	doc.save( nombrePDF + ".pdf")

}