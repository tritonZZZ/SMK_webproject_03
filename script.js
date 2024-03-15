var container = document.getElementById("container");
var world = document.getElementById("world");

var x = 0;

function createWorld() {
  for (let i = 0; i < 6; i++) {
    let myElement = document.createElement("div");
    myElement.id = "element" + i;
    myElement.style.position = "absolute";
    world.append(myElement);
  }
}

createWorld();

function update() {
  world.style.transform = `
  rotateX(${x}deg)
  translate3d(500px, 300px, 0px)`;
  x++;
}

timer = setInterval(update, 10);
