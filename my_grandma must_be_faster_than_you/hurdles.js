class Hurdles
{
    constructor()
    {
      this.r = 65;
      this.x = width;
      this.y = height - this.r;
    }

    reset()
    {
      this.r = 65;
      this.x = width;
      this.y = height - this.r;
    }
  
    move()
    {
      this.x -= 10;
    }
  
    show() //hurdles Img
    {
      image(hImg, this.x, this.y, this.r, this.r);
    }
  }