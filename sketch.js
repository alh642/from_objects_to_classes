let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  balls.ball0 = {
    x: random(width),
    y: random(50),
    dy: 0,
  }
  balls.ball1 = {
    x: random(width),
    y: random(50),
    dy: 0,
  }
}

function draw() {
  background(200);
  balls.ball0.y += balls.ball0.dy;
  balls.ball0.dy += 0.25;
  circle(balls.ball0.x, balls.ball0.y, 50);
  balls.ball1.y += balls.ball1.dy;
  balls.ball1.dy += 0.25;
  circle(balls.ball1.x, balls.ball1.y, 50);
  // if the object hits the bottom of the canvas
  // make it go up instead of down
  if (balls.ball0.y >= height) {
    balls.ball0.dy = -0.95 * balls.ball0.dy;
  }
  if (balls.ball1.y >= height) {
    balls.ball1.dy = -0.95 * balls.ball1.dy;
  }
}