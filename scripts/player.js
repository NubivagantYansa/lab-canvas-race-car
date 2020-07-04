class Player extends Component {
  constructor(game, x, y, w, h) {
    super(game, x, y, w, h);
  }
  move() {
    document.onkeydown = (event) => {
      const key = event.keyCode;
      const possibleKeysStrokes = [37, 38, 39, 40];
      if (possibleKeysStrokes.includes(key)) {
        switch (key) {
          case 37:
            if (this.x >= 10) this.x -= 20;
            break;
          case 38:
            if (this.y >= 10) this.y -= 20;
            break;
          case 39:
            if (this.x <= 490 - this.width) this.x += 20;
            break;
          case 40:
            if (this.y <= 690 - this.height) this.y += 20;
            break;
        }
      }
    };
  }

  crashCollision(element) {
    //y axis
    if (this.y + 10 <= element.y + element.height && this.y >= element.y) {
      //x axis
      if (this.x >= element.x && this.x <= element.x + element.width) {
        setTimeout(() => {
          alert("crash");
        }, 5);
        window.location.reload();
      }
    }
  }
}
