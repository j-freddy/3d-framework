const canvas = <HTMLCanvasElement> document.getElementById("my-canvas");
const ctx = <CanvasRenderingContext2D> canvas.getContext("2d");

function main() {
  console.log("Next: Allow user to move and rotate using WASD and mouse");

  const pyramid = new Pyramid(new Point([0, 0, 0]), 100, 150);
  const player = new Player();

  // Draw pyramid
  const relativePoints = pyramid.relativePoints(player);
  const segments = pyramid.segmentsFrom(relativePoints);
  GUI.draw(relativePoints, segments);
  
  // setInterval(() => {
  //   GUI.clear();
  //   GUI.draw(cuboid.points, cuboid.segments);
  // }, 1000 / 60);
}

window.addEventListener("load", main);
