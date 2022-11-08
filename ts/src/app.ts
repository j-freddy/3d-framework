const canvas = <HTMLCanvasElement> document.getElementById("my-canvas");
const ctx = <CanvasRenderingContext2D> canvas.getContext("2d");

function main() {
  const cuboid = new Cuboid();

  const deg = Math.PI / 6;
  const Mx = new Matrix([
    [1, 0, 0],
    [0, Math.cos(deg), -Math.sin(deg)],
    [0, Math.sin(deg), Math.cos(deg)],
  ]);
  const My = new Matrix([
    [Math.cos(deg), 0, Math.sin(deg)],
    [0, 1, 0],
    [-Math.sin(deg), 0, Math.cos(deg)],
  ]);
  const Mz = new Matrix([
    [Math.cos(deg), -Math.sin(deg), 0],
    [Math.sin(deg), Math.cos(deg), 0],
    [0, 0, 1],
  ]);


  // Rotate cuboid by applying rotation matrices
  for (let i = 0; i < cuboid.points.length; i++) {
    cuboid.points[i].assign(
      Point.fromColVector(
        Matrix.mult(Mz, Matrix.mult(My, Matrix.mult(Mx, cuboid.points[i].T)))
      )
    );
  }

  // Translate so cuboid appears on canvas
  for (let i = 0; i < cuboid.points.length; i++) {
    cuboid.points[i].assign(
      Matrix.add(cuboid.points[i], new Vector([300, 300, 0]))
    )
  }

  GUI.draw(cuboid.points, cuboid.segments);
}

window.addEventListener("load", main);
