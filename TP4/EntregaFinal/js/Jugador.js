class Jugador {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.div = document.getElementById('girl');
    this.state = "walk";
  }

  draw (anim) {
     this.div.className = anim;
     this.div.style.left = this.x.toString() + 'px';
     this.div.style.top = this.y.toString() + 'px';
  }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }

}
