window.addEventListener("load", cargaPagina);

var contador=1;

function cargaPagina(){

	var boton = document.getElementById("boton");
	var agregar = document.getElementById("agregar");
	var escribir = document.getElementById("escribir");
	var none = document.getElementById("none");
	
 	
	none.classList.add("no"); 
	agregar.addEventListener("click", function() {
			agregar.classList.add("no");
			none.classList.remove("no"); 
			none.classList.add("si"); 

	});
	none.addEventListener("mouseover", function() {
			agregar.classList.add("no");
			none.classList.remove("no"); 
			none.classList.add("si"); 
	});		
	none.addEventListener("mouseout", function() {
			agregar.classList.remove("no");
			none.classList.remove("si");
			none.classList.add("no"); 
	});
	boton.addEventListener("click", clickAndClick);
};

function clickAndClick (e){
		e.preventDefault();
		var contenedor = document.getElementById("contenedor");
		var cuadro= document.createElement("div");
		cuadro.classList.add("cuadro", "primero", "border");
		contenedor.appendChild(cuadro);

		var titulo = escribir.value;
		var title = document.createElement("div");
		title.innerHTML = titulo;
		title.classList.add("titulo");
		cuadro.insertBefore(title, cuadro.childNodes[0]);

		var input = document.createElement("a");
		cuadro.insertBefore(input, cuadro.childNodes[1]);
		escribir.value= "";
		var link = document.createTextNode("Añadir una tarjeta");
		input.appendChild(link);

		input.addEventListener("click" , agregarCuadro);

		function agregarCuadro(){
		var cuadro2= document.createElement("div");
		cuadro2.classList.add("cuadro2", "border");
		cuadro.appendChild(cuadro2);
		input.classList.add("no")
		var aText = document.createElement("textarea")
		cuadro2.insertBefore(aText, cuadro2.childNodes[0]);
			
		var aBoton = document.createElement("button");
		aBoton.classList.add("aBoton", "border")
		cuadro2.insertBefore(aBoton, cuadro2.childNodes[1]);
		var linkBoton = document.createTextNode("Guardar");
		aBoton.appendChild(linkBoton);
			
		aBoton.addEventListener("click", agregarTarjetas);
		agregar.addEventListener("click", desaparecer);
		

		function agregarTarjetas (){
		
		var context = aText.value;
		var textContext=document.createElement("div");
		textContext.innerHTML = context;
		textContext.setAttribute("draggable", "true");
		textContext.id= "id" + contador;
		textContext.classList.add("textos","cuadro3");
		cuadro.insertBefore(textContext,cuadro.childNodes[1]);
		aText.value ="";
		input.classList.remove("no");
		cuadro2.remove(); 
		contador++;

		textContext.addEventListener("dragstart", empiezaArrastrar);
		textContext.addEventListener("dragenter", entraArrastrar);
		textContext.addEventListener("dragleave", dejaArrastrar);
		textContext.addEventListener("dragover", arrastrarSobre);
		textContext.addEventListener("drop", soltar);
		textContext.addEventListener("dragend", terminaArrastrar);
		};
		function empiezaArrastrar(e) {
			e.dataTransfer.setData("text", this.id);
			this.classList.add("mover");
		}

		function entraArrastrar(e) {
			this.classList.add("over");
		}

		function dejaArrastrar(e) {
			this.classList.remove("mover", "over");
		}

		function arrastrarSobre(e) {
			e.preventDefault();
		}

		function soltar(e) {
			var idArrastrado = e.dataTransfer.getData("text");
			var elementoArrastrado = document.getElementById(idArrastrado);
			var lista = this.parentElement;
			var hijosLista = lista.children.length;
			lista.insertBefore(elementoArrastrado, lista.children[hijosLista-2]);
			this.classList.remove("over", "mover");

		}

		function terminaArrastrar(e) {
			this.classList.remove("over", "mover");
			this.classList.add("animated", "rubberBand");
		}


		function desaparecer(){
		input.classList.add("si");
		cuadro2.classList.add("no");
		};
	};
};

	