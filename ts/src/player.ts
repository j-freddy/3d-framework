class Player extends Entity {
  constructor() {
    super([new Point([0, 0, 0])]);

    this.points[0] = new Point([0, 0, 0]);
    this.rotation = new Point([Math.PI * 0.45, Math.PI * 0.3, 0]);
  }

  get position(): Point {
    return this.points[0];
  }

  segmentsFrom(_: Point[]=[]): Segment[] {
    return [];
  }
}
