var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var object;
// var wall1;

function preload() {
  helicopterIMG = loadImage("helicopter.png");
  packageIMG = loadImage("package.png");
}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  rectMode(CENTER);

  wall1 = new Wall1(200, 300, 50, 50);

  var ball_options = {
    restitution: 1.0,
  };

  packageSprite = createSprite(width / 2, 80, 10, 10);
  packageSprite.addImage(packageIMG);
  packageSprite.scale = 0.2;
  console.log(packageSprite.x, "packageSprite.x");
  // World.add(World, packageSprite);

  helicopterSprite = createSprite(width / 2, 200, 10, 10);
  helicopterSprite.addImage(helicopterIMG);
  helicopterSprite.scale = 0.6;
  // World.add(World, helicopterSprite);

  groundSprite = createSprite(width / 2, height - 35, width, 10);
  groundSprite.shapeColor = color(255);
  // World.add(World, groundSprite);

  engine = Engine.create();
  world = engine.world;
  object = Bodies.rectangle(200, 200, 50, 50);
  World.add(world, object);

  packageBody = Bodies.circle(width / 2, 200, 5, ball_options);
  World.add(world, packageBody);

  //Create a Ground
  ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
  World.add(world, ground);

  // packageSprite = Bodies.rectangle(width / 2, 80, 10, 10, ball_options);
  // World.add(world, packageSprite);

  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  wall1.display();
  drawSprites();
}

function keyPressed() {}
