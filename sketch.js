let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  balls.ball0 = {
    x: random(width),
    y: random(height),
    dy: (-1, 1),
  }
  balls.ball1 = {
    x: random(width),
    y: random(height),
    dy: (-1, 1),
  }
}

function draw() {
  background(200);
  
  balls.ball0.x += balls.ball0.dy;
  balls.ball0.y += balls.ball0.dy;
  circle(balls.ball0.x, balls.ball0.y, 50);
  
  balls.ball1.x += balls.ball1.dy;
  balls.ball1.y += balls.ball1.dy;
  circle(balls.ball1.x, balls.ball1.y, 50);
  
  // if the object hits the edges of the canvas
  // make it bounce off
  if (balls.ball0.y < 0 || balls.ball0.y > windowHeight) {
    balls.ball0.dy = -0.95 * balls.ball0.dy;
  }
  if (balls.ball1.y < 0 || balls.ball1.y > windowHeight) {
    balls.ball1.dy = -0.95 * balls.ball1.dy;
  }
  if (balls.ball0.x < 0 || balls.ball0.x > windowWidth) {
    balls.ball0.dy = -0.95 * balls.ball0.dy;
  }
  if (balls.ball1.x < 0 || balls.ball1.x > windowWidth) {
    balls.ball1.dy = -0.95 * balls.ball1.dy;
  }
}