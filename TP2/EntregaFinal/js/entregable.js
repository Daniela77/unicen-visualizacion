var objetos, objetoActual, formas = null;
var inicioX = 0, inicioY = 0;
var ctx = document.getElementById("canvas").getContext("2d");
// ctx.translate(100,100);
var cv = document.getElementById("canvas");
// document.getElementById("canvas").addEventListener("click", pintarFondo);



function actualizar (){
		ctx.fillStyle = '#f0f0f0';
		ctx.fillRect(0,0, 900, 600);
	for (var i = 0; i < objetos.length; i++){
			formas[i].dibujar();
			objetos[i].dibujar();
	}
}

window.onload = function(){
	objetos=[];
	formas= [];

	var circle2 = new Circle (50,50,50,"#27cb99");
	var square2 = new Square (150,0,100,100,"#c179b4");
	var circle3 = new Circle (250,50,50,"#cb2735");
	objetos.push(circle2,square2,circle3);
	var circle1 = new Circle (450,50,50,"#030203");
	var square1 = new Square (550,0,100,100,"#030203");
	var circle4 = new Circle (750,50,50,"#030203");
 	formas.push(circle1,square1,circle4);
 	actualizar();

	cv.onmousedown = function(e){
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
			for (var i = 0; i < objetos.length; i++){
				if(objetos[i].incluido(x,y)){
			// if(objetos[i].posx < event.clientX
			// && (objetos[i].radio + objetos[i].posx > event.clientX)
			// && objetos[i].posy < event.clientY
			// && (objetos[i].radio + objetos[i].posy > event.clientY)){
			objetoActual = objetos[i];
			inicioY = e.clientY - objetos[i].posy;
			inicioX = e.clientX - objetos[i].posx;
			break;
			}
			}
		};

		cv.onmousemove = function(event){
		if(objetoActual != null){
			objetoActual.posx = event.clientX - inicioX;
			objetoActual.posy = event.clientY - inicioY;
			actualizar();
		}

		};
		cv.onmouseup = function(event){
				//  cv.onmousemove = null;
				 	objetoActual = null;
		}

}
