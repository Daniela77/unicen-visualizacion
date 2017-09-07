var ctx = document.getElementById("canvas").getContext("2d");
document.getElementById("canvas").addEventListener("click", pintarFondo);
// document.getElementById("mydiv").addEventListener("onmouseover", pintarFondodiv);


function pintarFondo() {
  ctx.fillStyle = "#00000";
  ctx.fillRect(0,0,900,600);
}

function pintarFondodiv() {
  ctx.fillStyle = "#3bc8b3";
  ctx.fill();
}

function Circle() {
  this.posx=2;
  this.posy=2;
  this.radio=3;
  this.color=rgb(100, 242, 82);
}

function Circle(posx,posy,radio,color) {
  this.posx=posx;
  this.posy=posy;
  this.radio=radio;
  this.color=color;
}

Circle.prototype.message = function () {
  alert("hola el radio es :" +this.radio);
};

Circle.prototype.dibujar = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.posx,this.posy,this.radio, 0, Math.PI*2);
  ctx.fill();
  ctx.closePath();
};

Circle.prototype.mouseDown=function (e) {
//dentro del Element del document
  var cX = e.clientX;
  var cY = e.clientY;
};

var circle1 = new Circle (400,300,50,"#FF0000");
// var circle2 = new Circle (10,10,2,"rgba(60, 118, 128,0)");
// circle1.message();
circle1.dibujar();
circle1.mouseDown(this);

function Punto () {
  this.x = 1;
  this.y = 1;
}

function Punto (x,y) {
  this.x = x;
  this.y = y;
}

Punto.prototype.incluido = function (posx,posy,radio) {
  var pActual= Math.sqrt((Math.pow(this.x - posx, 2))+ Math.pow(this.y - posy, 2));
  alert(pActual);
  if (pActual < radio)
  alert("esta");
  else
  alert("no esta");
}

var p1 = new Punto (410,310);
// p1.incluido(circle1.posx,circle1.posy,circle1.radio);
