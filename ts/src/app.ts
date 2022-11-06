const canvas = <HTMLCanvasElement> document.getElementById("my-canvas");
const ctx = <CanvasRenderingContext2D> canvas.getContext("2d");

function main() {
  console.log("Hello world!");
  ctx.fillRect(32, 256, 64, 64);
}

window.addEventListener("load", main);
