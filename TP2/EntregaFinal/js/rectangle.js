function Rectangle(posx,posy,radio,alto,color) {
  this.forma = 'rectangle';
  this.posx=posx;
  this.posy=posy;
  this.radio=radio;
  this.alto=alto;
  this.color=color;
}
Rectangle.prototype.dibujar = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.rect(this.posx - this.radio,this.posy- (this.radio*0.75),this.radio*2, this.radio*1.5);
  ctx.fill();
  ctx.closePath();
};
