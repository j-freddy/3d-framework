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

  getRow(i: number): number[] {
    return this.data[i];
  }

  getCol(j: number): number[] {
    const col: number[] = Array(this.numCols);

    for (let i = 0; i < this.numCols; i++) {
      col[i] = this.data[i][j];
    }

    return col;
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
}
