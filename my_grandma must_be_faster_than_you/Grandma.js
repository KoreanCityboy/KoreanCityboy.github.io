class Grandma
{
    constructor()
    {
      this.r = 100;
      this.x = 50;
      this.y = height - this.r;
      this.d = 0;
      this.gravity = 3;
    }
  
    reset()
    {
      this.r = 100;
      this.x = 50;
      this.y = height - this.r;
      this.d = 0;
      this.gravity = 3;
    }

    jump()
    {
      if (this.y == height - this.r)
      {
        this.d = -45;
        JumpMusic.play();
        JumpMusic.setVolume(0.1);
      }
    }
  
    hits(hurdles) // bump
    {
      let x1 = this.x + this.r * 0.001;
      let y1 = this.y + this.r * 0.001;
      let x2 = hurdles.x + hurdles.r * 0.001;
      let y2 = hurdles.y + hurdles.r * 0.001;
      return collideCircleCircle(x1, y1, 50, x2, y2, 50);
    }
  
    move()
    {
      this.y += this.d;
      this.d += this.gravity;
      this.y = constrain(this.y, 0, height - this.r);
    }
  
    show() // grandma Img
    {
      image(gImg, this.x, this.y, this.r, this.r);  

    }
    
}
  