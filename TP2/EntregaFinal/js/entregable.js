var objetos, objetoActual, formas,partida = null;
var objetoBase = {x:0,y:0,ficha: null};
var ctx = document.getElementById("canvas").getContext("2d");
var cv = document.getElementById("canvas");
var inicioX = (cv.width/9);
var inicioY = (cv.height/9);
var centesimas = 0;
 var segundos = 0;
 var minutos = 0;
 var horas = 0;
// var centesimas, segundos, minutos,horas = 0;
var nivel=5;
objetos= [];
formas = [];
partida = [];

for (var i = 0; i < nivel; i++) {
    partida[i]=false;
  }

function actualizar (){
		ctx.fillStyle = '#9eede6';
		ctx.fillRect(0,0, 1350, 500);
	  for (var i = 0; i < objetos.length; i++){
			formas[i].dibujar();
			objetos[i].dibujar();
	}
}

// $(".jugar").on("click", function(){
//   $(".nivel").slideDown();
// })

$("#inicio").on("load", function(){
	inicio();
})

$(".facil").on("click", function(){
  nivel=3;
	cargar();
})

$(".medio").on("click", function(){
  nivel=4;
  cargar();
})

$(".dificil").on("click", function(){
  nivel=6;
  cargar();
})
//
// document.getElementById("inicio").addEventListener("load", inicio);
// // document.getElementById("inicio").onload = function() {inicio()};


function terminarJuego(){
clearInterval(control);
  $("#contenedor").html("Finalizado en: " + segundos +" segundos" );
}


//Cronometro
function inicio () {
	control = setInterval(cronometro,10);
}

function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}

function cargar(){
	inicio();
	cargarFormas();
}
//Cargado de formas
 function cargarFormas() {
	var originales=[];
	var copias=[];
	var circle1 = new Circle (inicioX,inicioY,50,"#27cb99");
	var square1 = new Square (inicioX*2,inicioY,50,50,"#c179b4");
	var rectangle1 = new Rectangle(inicioX*3,inicioY,50,70,"#87235f");
	var triangle1= new Triangle(inicioX,inicioY*3,50,70,"#312387");
	var diamond1= new Diamond(inicioX*2,inicioY*3,50,70,"#22bb36");
	// var circle3 = new Circle (inicioX*3,inicioY,50,"#cb2735");
	originales.push(circle1,square1,rectangle1,triangle1,diamond1);
	// objetos.push(circle1,square1,rectangle1,triangle1,diamond1);
	var circlec = new Circle (inicioX*5,inicioY,50,"#030203");
	var squarec = new Square (inicioX*6,inicioY,50,70,"#030203");
	var rectanglec = new Rectangle(inicioX*7,inicioY,50,70,"#030203");
	var trianglec= new Triangle(inicioX*5,inicioY*3,50,70,"#030203");
	var diamondc= new Diamond(inicioX*6,inicioY*3,50,70,"#030203");
	// var circle4 = new Circle (inicioX*7,inicioY,50,"#030203");
	copias.push(circlec,squarec,rectanglec,trianglec,diamondc);
	// formas.push(circlec,squarec,rectanglec,trianglec,diamondc);
	for (var i = 0; i < nivel; i++){
		objetos[i]=originales[i];
		formas[i]=copias[i];
	}
	actualizar();
}


	 $("canvas").on( "mousedown", function( event ) {
		  var x= event.pageX - canvas.offsetLeft;
		  var y= event.pageY - canvas.offsetTop;
		  for (var i = 0; i < objetos.length; i++) {
		    if ((x > (objetos[i].posx-objetos[i].radio))
			&&(x < (objetos[i].posx+objetos[i].radio))
			&&(y > (objetos[i].posy-objetos[i].radio))
			&&(y < (objetos[i].posy+objetos[i].radio))) {
		      objetoBase.x = objetos[i].posx;
		      objetoBase.y = objetos[i].posy;
			    objetoBase.ficha = i;
	    }
	  }
	});

	$("canvas").on( "mousemove", function( event ) {
	  var x = event.pageX - canvas.offsetLeft;
	  var y = event.pageY - canvas.offsetTop;
	  if (objetos[objetoBase.ficha] != null) {
	    objetos[objetoBase.ficha].posx = x;
	    objetos[objetoBase.ficha].posy = y;
	  }
	  actualizar();
	});


$("canvas").on( "mouseup", function( event ) {
  var x = event.pageX - canvas.offsetLeft;
  var y = event.pageY - canvas.offsetTop;
  for (var i = 0; i < formas.length; i++) {
    if ((x > (formas[i].posx-formas[i].radio))
	&&(x < (formas[i].posx+formas[i].radio))
	&&(y > (formas[i].posy-formas[i].radio))
	&&(y < (formas[i].posy+formas[i].radio)))
    if (formas[i].forma == objetos[objetoBase.ficha].forma) {
      partida[objetoBase.ficha]=true;
      objetos[objetoBase.ficha].posx=formas[i].posx;
      objetos[objetoBase.ficha].posy=formas[i].posy;
      objetoBase.ficha=null;
      var juegoCompleto=true;
      for (var i = 0; i < nivel; i++) {
        if (partida[i]==false) {
          juegoCompleto=false;
        }
      }
      if (juegoCompleto) {
				// ejecutar sonido
        terminarJuego();
      }
      actualizar();
      return;
    }
  }
  objetos[objetoBase.ficha].posx=objetoBase.x;
  objetos[objetoBase.ficha].posy=objetoBase.y;
  objetoBase.ficha=null;
  actualizar();
});
