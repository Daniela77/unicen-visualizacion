function Juego(nombre) {
  var puntaje= 0;
  var jugador= nombre;
}

var jugadorG= new Jugador(0,320);
var id;
var puntaje = 0;
var colision = false;
var j = new Juego("Dani");

function draw() {
  switch (jugadorG.state) {
    case "idle":
      jugadorG.draw("personaje idle");
      break;
    case "walk":
      jugadorG.draw("personaje walk");
      break;
    case "walkRev":
      jugadorG.draw("personaje walkRev");
      break;
    case "jump":
      jugadorG.draw("personaje jump");
      break;
    case "dead":
      jugadorG.draw("personaje dead");
    break;

    default:
      jugadorG.draw("personaje idle");
  }

}

// btnJugar.addEventListener("onclick",mainLoop);

function mainLoop() {
  id = setInterval(function(){
    update();
    draw();
    // requestAnimationFrame(mainLoop);
  }, 50);
}

document.addEventListener('keydown', event => {
    if (event.keyCode === 39) { // 39: derecha
      jugadorG.setX(jugadorG.x += 5);
      jugadorG.state = "walk";
    } else if (event.keyCode === 37) { // 37: izq
      jugadorG.setX(jugadorG.x -= 5);
      jugadorG.state = "walkRev";
    }
    else if (event.keyCode === 38) { // 38: up
      jugadorG.setX(jugadorG.x += 5);
      jugadorG.state = "jump";
    }
}, false);

document.addEventListener('keyup', event => {
jugadorG.state = "walk";
});

requestAnimationFrame(mainLoop);

function isColision(object){
var personaje = $("#girl");
var cx = personaje.offset().left;
var cy= personaje.offset().top;
var ch = personaje.outerHeight();
var cw = personaje.outerWidth();

 var element = $("#"+object);
 var ey = element.offset().top;
 var ex = element.offset().left;
 var eh = element.outerHeight();
 var ew = element.outerWidth();

 return!(
   ((cy + ch) < (ey)) ||
   (cy> (ey + eh)) ||
   ((cx + cw) < ex) ||
   (cx > (ex + ew)));

 }

 function enemigoUpdate(px){
  var enemigo =  $("#enemigo");
   if(parseInt( enemigo.offset().left)>30){
    enemigo.offset({left: parseInt(enemigo.offset().left)-px});
   }else{
    var distanciaX = Math.floor((Math.random()) + innerWidth);
     this.updateDistancia("enemigo",distanciaX);
     colision = false;
   }
 }

 function updateDistancia(object,distanciaX){
  var div = document.getElementById(object);
   if(object == 'enemigo'){
     div.style.left = parseInt(div.style.left,5) + distanciaX+'px';
   }
 }

 function update(){
   this. enemigoUpdate(3);
   puntaje += 1;
   document.getElementById('puntajeJuego').innerHTML = puntaje;
   if(this.isColision('enemigo')){
     jugadorG.state = "dead";
     setTimeout(function() {this.gameover();}, 1000);
   }
 }

 function gameover(){
   document.getElementById('enemigo').style.webkitAnimationPlayState = 'paused';
   document.getElementById('paisaje').style.webkitAnimationPlayState = 'paused';
   document.getElementById('girl').style.webkitAnimationPlayState = 'paused';
   document.getElementById('flor').style.webkitAnimationPlayState = 'paused';
   clearInterval(id);
   document.getElementById('gameOver').style.visibility = 'visible';
 }
