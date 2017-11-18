
function Juego(nombre) {
  var puntaje= 0;
  var jugador= nombre;
  this.enemigos = [];
}

var enemigos = [];
var jugadorG= new Jugador(0,310);
// enemigos.push(crearEnemigo(1,900,440,-1));
// enemigos.push(crearEnemigo(2,50,300,1));

Juego.prototype.jugar= function () {
  // var jugadorG= new Jugador(0,310);



};


var j = new Juego("Dani");
function update() {
  //jugadorG.update();
}

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
    default:
      jugadorG.draw("personaje idle");
  }

}

function mainLoop() {
    update();
    draw();
    requestAnimationFrame(mainLoop);
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
jugadorG.state = "idle";
});

requestAnimationFrame(mainLoop);
