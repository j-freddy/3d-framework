// 3D Point
class Point extends Vector {
  constructor(data: number[]) {
    super(data);
  }

  get x() {
    return this.data[0][0];
  }

  get y() {
    return this.data[0][1];
  }

  get z() {
    return this.data[0][2];
  }
  
  static fromVector(M: Matrix): Point {
    // TODO Assert shape of M
    return new Point(M.data[0]);
  }

  // @M is a column vector
  static fromColVector(M: Matrix): Point {
    // TODO Assert shape of M
    return new Point(M.T.data[0]);
  }
}
