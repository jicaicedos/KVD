Tener en cuenta



- Se deben cambiar los campos que tienen nombres con t�ldes

- Para crear base de datos en formato JSON se deben eliminar los puntos y comas (;)

- Eliminar las dobles comillas que est�n afectando el archivo JSON
	
	P�gina para probar archivos JSON:  https://jsonlint.com/




Ver 

http://respag.net/c�mo-parsear-un-texto-json-con-javascript.aspx

https://www.html5rocks.com/es/tutorials/file/dndfiles/


Pasos para convertir archivo .xls (Microsoft Excel) a .json (JSON)

1) Convertir el archivo .xls o .xlsx a CSV

Para ello debes ir al men� de "Archivo" y dar clic en la opci�n "Guardar como..."
Luego elegir la opci�n: "CSV (delimitado por comas) (*.csv)
Finalmente dar un nombre al archivo y dar clic en el bot�n "Guardar"

2) Abrir la p�gina para convertir de CSV a JSON

http://www.csvjson.com/csv2json

3) Dar clic en la opci�n: "Select a file..."

Y buscamos el archivo con extensi�n .csv
Una vez cargado el archivo (puede tardar unos segundos o minutos) dar clic en
el bot�n "> Convert"

4) Una vez convertidos copiamos el resultado obtenido, similar a:

Verificar aquellos campos que son num�ricos, como ID que le faltan comillas (ver el siguiente ejemplo)
y encerrarlos entre comillas dobles


[
  {
    "ID": 50002,
    "DEPARTAMENTO": "META",
    "ACCESS POINT": "AP2479",
    "ATA AUDIOCODES": "AT2479",
    "EQUIPO CLIENTE": "",
    "EQUIPO SERVIDOR": "ES3130",
    "IMPRESORA LASER": "IM2479",
    "MESA PARA TV O IMPRESORA": "ME3327",
    "SKY EDGE WEB ENHANCE": "SE2479",
    "SWITCH 8 PUERTOS": "SW2479",
    "TELEFONO PUBLICO": "",
    "TELEVISOR 42": "TV2479",
    "Total general": 8
  },
  {
    "ID": 50003,
    "DEPARTAMENTO": "BOLIVAR",
    "ACCESS POINT": "AP2888",
    "ATA AUDIOCODES": "AT2276",
    "EQUIPO CLIENTE": "",
    "EQUIPO SERVIDOR": "ES2186",
    "IMPRESORA LASER": "IM2126",
    "MESA PARA TV O IMPRESORA": "ME2971",
    "SKY EDGE WEB ENHANCE": "SE2216",
    "SWITCH 8 PUERTOS": "SW2387",
    "TELEFONO PUBLICO": "TP3025",
    "TELEVISOR 42": "TV2385",
    "Total general": 9
  }
]




5) Con el editor de texto Notepad++ crear un nuevo archivo
Luego ir al men�  "Encoding" y seleccionar la opci�n: "Encode in UTF-8"


Agregarle un nombre al arreglo, encerrando todo entre corchetes {}


{
  "nombre del arreglo JSON" : 
  [
   {
    "ID": "50002",
    "DEPARTAMENTO": "META",
    "ACCESS POINT": "AP2479",
    "ATA AUDIOCODES": "AT2479",
    "EQUIPO CLIENTE": "",
    "EQUIPO SERVIDOR": "ES3130",
    "IMPRESORA LASER": "IM2479",
    "MESA PARA TV O IMPRESORA": "ME3327",
    "SKY EDGE WEB ENHANCE": "SE2479",
    "SWITCH 8 PUERTOS": "SW2479",
    "TELEFONO PUBLICO": "",
    "TELEVISOR 42": "TV2479",
    "Total general": "8"
   },
   {
    "ID": "50003",
    "DEPARTAMENTO": "BOLIVAR",
    "ACCESS POINT": "AP2888",
    "ATA AUDIOCODES": "AT2276",
    "EQUIPO CLIENTE": "",
    "EQUIPO SERVIDOR": "ES2186",
    "IMPRESORA LASER": "IM2126",
    "MESA PARA TV O IMPRESORA": "ME2971",
    "SKY EDGE WEB ENHANCE": "SE2216",
    "SWITCH 8 PUERTOS": "SW2387",
    "TELEFONO PUBLICO": "TP3025",
    "TELEVISOR 42": "TV2385",
    "Total general": "9"
   }

 ]

}

6) Finalmente Guardar el archivo


