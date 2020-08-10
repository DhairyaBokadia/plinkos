const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var divisions=[];
var plinkos=[];


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  
}

function draw() {
  Engine.update(engine);
  background("green");  
  

  var divisionHeight=300

  for (var k=0;k<=width; k=k+80) {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }


  for (var k=0;k<divisions.length;k++) {
    divisions[k].display()
  }


  for (var j=40;j<=width;j=j+50) {
    plinkos.push(new Plinko(j,75))
  }

  for (var j=15;j<=width-10;j=j+50) {
    plinkos.push(new Plinko(j,175))
  }

  for (var j=40;k<plinkos.length;j++) {
    plinkos[j].display()
  }
  for (var j=150;k<plinkos.length;j++) {
    plinkos[j].display()
  }


}