function Diamond(posx,posy,radio,alto,color) {
  this.forma = 'diamond';
  this.posx=posx;
  this.posy=posy;
  this.radio=radio;
  this.alto=alto;
  this.color=color;
}

Diamond.prototype.dibujar = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.moveTo(this.posx - this.radio,this.posy);
  ctx.lineTo(this.posx,this.posy+this.radio);
  ctx.lineTo(this.posx+this.radio,this.posy);
  ctx.lineTo(this.posx,this.posy-this.radio);
  ctx.fill();
  ctx.closePath();
}
