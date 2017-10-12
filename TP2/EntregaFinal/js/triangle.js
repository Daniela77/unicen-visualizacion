function Triangle(posx,posy,radio,alto,color) {
  this.forma = 'triangle';
  this.posx=posx;
  this.posy=posy;
  this.radio=radio;
  this.alto=alto;
  this.color=color;
}
Triangle.prototype.dibujar = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.moveTo(this.posx - this.radio,this.posy+this.radio);
  ctx.lineTo(this.posx + this.radio,this.posy+this.radio);
  ctx.lineTo(this.posx,this.posy-this.radio);
  ctx.fill();
  ctx.closePath();
};
