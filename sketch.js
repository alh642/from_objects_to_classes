let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    balls[i] = new Ball();
  }
}

function draw() {
  background('black');

  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
  }
}

class Ball {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // objects bounce off edges of canvas 
    if(this.x < 0 || this.x > windowWidth) {
      this.speedX = this.speedX * -0.95;
    }
    if(this.y < 0 || this.y > windowHeight) {
      this.speedY = this.speedY * -0.95;
    }
  }
  display() {
    noStroke();
    circle(this.x, this.y, 30);
  }
}