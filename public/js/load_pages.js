function load_index() {

	// Menu de navegación
	$("nav").html(
			"<ul class='menu'>"+
				"<li class='menu__item'><a href='index.html'>Inicio</a></li>"+
				"<li class='menu__item'><a href='public/visita_calidad.html' target='_blank'>Visita de Calidad</a></li>"+
				"<li class='menu__item'><a href='public/visita_aprobacion.html' target='_blank'>Visita de Aprobación</a></li>"+
				"<li class='menu__item'><a href='public/consultarKVD.html' target='_blank'>Consultar KVD</a></li>"+
				"<li class='menu__item'><a href='public/crear_aviso.html' target='_blank'>Crear aviso</a></li>"+
				"<li class='menu__item'><a href='public/inventario.html' target='_blank'>Inventario</a></li>"+
			"</ul>"
	)
	// Cargar footer
	load_footer()
}

function load_pages() {

	// Menu de navegación
	$("nav").html(
			"<ul class='menu'>"+
				"<li class='menu__item'><a href='../index.html'>Inicio</a></li>"+
				"<li class='menu__item'><a href='../public/visita_calidad.html' target='_blank'>Visita de Calidad</a></li>"+
				"<li class='menu__item'><a href='../public/visita_aprobacion.html' target='_blank'>Visita de Aprobación</a></li>"+
				"<li class='menu__item'><a href='../public/consultarKVD.html' target='_blank'>Consultar KVD</a></li>"+
				"<li class='menu__item'><a href='../public/crear_aviso.html' target='_blank'>Crear aviso</a></li>"+
				"<li class='menu__item'><a href='../public/inventario.html' target='_blank'>Inventario</a></li>"+
			"</ul>"
	)
	load_footer()
}

function load_footer() {

	// Pie de página <footer>
	$("footer").html(
		"<p>Creado por: Javier Ignacio Caicedo</p>"
		// "<p>Correo electrónico: javiercaicedos0324@gmail.com</p>"
	)
}