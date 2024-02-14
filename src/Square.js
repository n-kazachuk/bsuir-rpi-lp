

disableFriendlyErrors = true;

class Square {
  num;
  i;
  j;
  x;
  y;
  mine;
  minesAround;
  opened;
  clicked;
  flagged;

  constructor(i, j, num) {
    this.num = num;
    this.i = i;
    this.j = j;
    this.x = i * squareSize;
    this.y = j * squareSize;
    this.mine = false;
    this.minesAround = 0;
    this.opened = false;
    this.clicked = false;
    this.flagged = false;
  }

  draw() {
    if (this.opened && this.clicked && this.mine) {

      text(DETONATION, this.x, this.y);
      return;
    }
    if (this.opened && this.mine) {

      text(MINE, this.x, this.y);
      return;
    }
    if (this.opened && this.flagged) {

      text(WRONG, this.x, this.y);
      return;
    }
    if (this.opened) {

      text(NUMBERS[this.minesAround], this.x, this.y);
      return;
    }
    if (this.flagged) {

      text(FLAG, this.x, this.y);
      return;
    }

    text(CLOSED, this.x, this.y);


    if (window.location.hash === "#debug") {
      textSize(10.5);
      if (this.mine) {
        fill(255, 61, 61);
      }
      text(this.num, this.x + squareSize / 2.5, this.y - squareSize / 6);
      textSize(squareSize - squareSize * 0.05);
      darkMode ? fill(225) : fill(35);
    }


    if (window.location.hash === "#debug-simple") {
      textSize(10.5);
      if (this.mine) {
        fill(255, 61, 61);
        text("🔴", this.x + squareSize / 2.5, this.y - squareSize / 6);
      }
      textSize(squareSize - squareSize * 0.05);
      darkMode ? fill(225) : fill(35);
    }
  }
}
