const canvas = <HTMLCanvasElement> document.getElementById("my-canvas");
const ctx = <CanvasRenderingContext2D> canvas.getContext("2d");

function main() {
  console.log("Hello world!");

  const M = new Matrix([
    [1, 2, 3],
    [4, 5, 6]
  ]);

  const N = new Matrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);

  console.log(Matrix.mult(M, N.T).toString());
}

window.addEventListener("load", main);
