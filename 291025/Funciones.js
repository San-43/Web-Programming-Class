addEventListener('load', inicializarEventos, false);

function inicializarEventos(){
	for(var i = 1; i <= 12; i++){
		var ob = document.getElementById('link' + i);
		ob.addEventListener('click', presionEnlace, false);
	} 
}

function presionEnlace(e){
	e.preventDefault();
	var url = e.target.getAttribute('href');
	cargarPersonalidad(url);
}

var conexion1;

function cargarPersonalidad(url){
	conexion1 = new XMLHttpRequest();
	conexion1.onreadystatechange = procesarEventos;
	conexion1.open("GET", url, true);
	conexion1.send();
}

function procesarEventos(){
	var detalle = document.getElementById("detalles");
	if (conexion1.readyState == 4){
		detalles.innerHTML = conexion1.responseText;
	}
	else{
		detalles.innerHTML = "Cargando...";
	}
}