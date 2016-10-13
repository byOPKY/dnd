window.onload = function () {
	var boton = document.getElementById("boton");
	var agregar = document.getElementById("agregar");
	var escribir = document.getElementById("escribir");
	var none = document.getElementById("none");
	var body = document.querySelector("body");
 	

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

	boton.addEventListener("click", function(e){
		e.preventDefault();
		var contenedor = document.getElementById("contenedor");
		var cuadro= document.createElement("div");
		cuadro.classList.add("cuadro");
		cuadro.classList.add("primero");
		cuadro.classList.add("border");
		contenedor.appendChild(cuadro);

		var titulo = escribir.value;
		var title = document.createElement("div");
		title.innerHTML = titulo;
		title.classList.add("titulo");
		cuadro.insertBefore(title, cuadro.childNodes[0]);

		var input = document.createElement("a");
		cuadro.insertBefore(input, cuadro.childNodes[1]);
		escribir.value= "";
		var link = document.createTextNode("Añadir una Lista");
		input.appendChild(link);

		input.addEventListener("click" ,function(){
			var cuadro2= document.createElement("div");
			cuadro2.classList.add("cuadro2");
			cuadro2.classList.add("border");
			cuadro.appendChild(cuadro2);
			input.classList.add("no")
			var aText = document.createElement("textarea")
			cuadro2.insertBefore(aText, cuadro2.childNodes[0]);
			
			var aBoton = document.createElement("button");
			aBoton.classList.add("aBoton")
			aBoton.classList.add("border")
			cuadro2.insertBefore(aBoton, cuadro2.childNodes[1]);
			var linkBoton = document.createTextNode("Guardar");
			aBoton.appendChild(linkBoton);
			
			aBoton.addEventListener("click", function(){

				var context = aText.value;
				var textContext=document.createElement("div");
				textContext.innerHTML = context;
				textContext.classList.add("textos");
				cuadro.insertBefore(textContext,cuadro.childNodes[1]);
				aText.value ="";
				input.classList.remove("no");
				cuadro2.classList.add("no"); 

			});
			
			agregar.addEventListener("click", function() {
				input.classList.add("si");
				cuadro2.classList.add("no"); });
			});
		
		});
	
	
}
