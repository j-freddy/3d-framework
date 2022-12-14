class Matrix {
  data: number[][];

  constructor(data: number[][]) {
    this.data = data;
  }

  get numRows(): number {
    return this.data.length;
  }

  get numCols(): number {
    return this.data[0].length;
  }

  get T(): Matrix {
    return Matrix.transpose(this);
  }

  get(i: number, j: number): number {
    return this.data[i][j];
  }

  getRow(i: number): number[] {
    return this.data[i];
  }

  getCol(j: number): number[] {
    const col: number[] = Array(this.numRows);

    for (let i = 0; i < this.numRows; i++) {
      col[i] = this.data[i][j];
    }

    return col;
  }

  // Set matrix values without destroying reinstantiating object (to preserve
  // reference)
  assign(M: Matrix): void {
    this.data = M.data;
  }

  clone(): Matrix {
    return new Matrix(this.data);
  }

  toString(): string {
    let str = "";

    for (const row of this.data) {
      str += `${row}\n`;
    }

    return str;
  }

  // @matrix + @other
  static add(matrix: Matrix, other: Matrix): Matrix {
    // TODO Check dimension
    const data: number[][] = Array(matrix.numRows);

    for (let i = 0; i < matrix.numRows; i++) {
      data[i] = Array(matrix.numCols);
      
      for (let j = 0; j < matrix.numCols; j++) {
        data[i][j] = matrix.get(i, j) + other.get(i, j);
      }
    }

    return new Matrix(data);
  }

  // @matrix - @other
  static subtract(matrix: Matrix, other: Matrix): Matrix {
    // TODO Check dimension
    const data: number[][] = Array(matrix.numRows);

    for (let i = 0; i < matrix.numRows; i++) {
      data[i] = Array(matrix.numCols);
      
      for (let j = 0; j < matrix.numCols; j++) {
        data[i][j] = matrix.get(i, j) - other.get(i, j);
      }
    }

    return new Matrix(data);
  }

  // @matrix * @other
  static mult(matrix: Matrix, other: Matrix): Matrix {
    if (matrix.numCols !== other.numRows) {
      const d1 = `${matrix.numRows}x${matrix.numCols}`;
      const d2 = `${other.numRows}x${other.numCols}`;

      throw new RangeError(
        `Multiplying 2 matrices with dimensions ${d1} and ${d2}`
      );
    }

    const data: number[][] = Array(matrix.numRows);

    for (let i = 0; i < matrix.numRows; i++) {
      data[i] = Array(other.numCols);

      for (let j = 0; j < other.numCols; j++) {
        // Calculate value of entry (i, j)
        let value = 0;
        const vec1 = matrix.getRow(i);
        const vec2 = other.getCol(j);

        for (let k = 0; k < matrix.numCols; k++) {
          value += vec1[k] * vec2[k];
        }

        data[i][j] = value;
      }
    }

    return new Matrix(data);
  }

  static transpose(matrix: Matrix): Matrix {
    const data: number[][] = Array(matrix.numRows);

    for (let i = 0; i < matrix.numCols; i++) {
      data[i] = matrix.getCol(i);
    }

    return new Matrix(data);
  }

  // ===========================================================================
  // 3D rotation matrices
  // ===========================================================================

  static xRotation(rad: number): Matrix {
    return new Matrix([
      [1, 0, 0],
      [0, Math.cos(rad), -Math.sin(rad)],
      [0, Math.sin(rad), Math.cos(rad)],
    ]);
  }

  static yRotation(rad: number): Matrix {
    return new Matrix([
      [Math.cos(rad), 0, Math.sin(rad)],
      [0, 1, 0],
      [-Math.sin(rad), 0, Math.cos(rad)],
    ]);
  }

  static zRotation(rad: number): Matrix {
    return new Matrix([
      [Math.cos(rad), -Math.sin(rad), 0],
      [Math.sin(rad), Math.cos(rad), 0],
      [0, 0, 1],
    ]);
  }
}
