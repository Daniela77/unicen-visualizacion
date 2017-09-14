function Square(posx,posy,ancho,alto,color) {
  this.posx=posx;
  this.posy=posy;
  this.ancho=ancho;
  this.alto=alto;
  this.color=color;
}


Square.prototype.dibujar = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.rect(this.posx,this.posy,this.ancho,this.alto);
  ctx.fill();
  ctx.closePath();
};

Square.prototype.incluido = function (posx,posy) {
  var cv = document.getElementById("canvas");
  var square = cv.getBoundingClientRect();
  return((this.posx-canvas.offsetLeft<(posx-square.left))&&
  (this.ancho + this.posx-canvas.offsetLeft> (posx-square.left))&&
  (this.posy- canvas.offsetTop < (posy -square.top))&&
  (this.posy +this.posY-canvas.offsetTop>(posy-square.top)));


}
