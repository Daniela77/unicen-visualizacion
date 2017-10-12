function Circle(posx,posy,radio,color) {
  this.forma = 'circle';
  this.posx=posx;
  this.posy=posy;
  this.radio=radio;
  this.color=color;
}

Circle.prototype.dibujar = function () {
  ctx.fillStyle = this.color;
  ctx.save();
  ctx.beginPath();
  ctx.arc(this.posx,this.posy,this.radio, 0, Math.PI*2);
  ctx.fill();
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

Circle.prototype.incluido = function (posx,posy) {
  console.log(posx);
  console.log(posy);
  var pActual= Math.sqrt((Math.pow(posx-this.posx , 2))+ Math.pow( posy-this.posy, 2));
  console.log("act"+pActual);
  return (pActual < this.radio)

}

Circle.prototype.actualizar=function (e) {
//dentro del Element del document
  var cX = e.clientX;
  var cY = e.clientY;
};
