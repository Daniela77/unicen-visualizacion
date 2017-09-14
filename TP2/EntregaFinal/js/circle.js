function Circle(posx,posy,radio,color) {
  this.posx=posx;
  this.posy=posy;
  this.radio=radio;
  this.color=color;
}


Circle.prototype.dibujar = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.posx,this.posy,this.radio, 0, Math.PI*2);
  ctx.fill();
  ctx.closePath();
};

Circle.prototype.incluido = function (posx,posy) {
  console.log(posx);
  console.log(posy);
  var pActual= Math.sqrt((Math.pow(posx-this.posx , 2))+ Math.pow( posy-this.posy, 2));
  console.log("act"+pActual);
  return (pActual < this.radio)

}

Circle.prototype.onmouseDown=function (e) {
//dentro del Element del document
  var cX = e.clientX;
  var cY = e.clientY;
};

Circle.prototype.actualizar=function (e) {
//dentro del Element del document
  var cX = e.clientX;
  var cY = e.clientY;
};

// var circle1 = new Circle (400,300,50,"#27cb99");
// circle1.dibujar();
// circle1.onmouseDown(this);
