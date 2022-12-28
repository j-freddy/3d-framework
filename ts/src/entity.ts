class Entity {
  // @points are readonly as @segments use their reference
  readonly points: Point[];
  protected rotation: Point;

  constructor(points: Point[], rotation: Point=Point.zero()) {
    this.points = points;
    this.rotation = rotation;
  }

  get position(): Point {
    // TODO Return average of @points
    throw new Error("Not implemented yet");
  }

  // Get a list of segments from the relative points @points
  segmentsFrom(_: Point[]): Segment[] {
    throw new ReferenceError("@segmentsFrom should be implemented on a\
      non-abstract class with the base class Entity");
  }

  // Viewing this entity from @other's perspective
  relativePoints(other: Entity): Point[] {
    const newPoints: Point[] = Array(this.points.length);

    const rot = other.rotation;
    const Mx = Matrix.xRotation(rot.x);
    const My = Matrix.yRotation(rot.y);
    const Mz = Matrix.zRotation(rot.z);

    // Rotate entity by applying rotation matrices
    for (let i = 0; i < this.points.length; i++) {
      newPoints[i] = Point.fromColVector(
        Matrix.mult(Mz, Matrix.mult(My, Matrix.mult(Mx, this.points[i].T)))
      )
    }

    // Translate entity
    for (const point of newPoints) {
      point.assign(Vector.subtract(point, other.position));
    }

    return newPoints;
  }
}
