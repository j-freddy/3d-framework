class Pyramid extends Entity {
  constructor(position: Point, base: number, height: number) {
    const points = Pyramid.pointsFrom(position, base, height);

    super(points);
  }

  segmentsFrom(points: Point[]): Segment[] {
    return [
      new Segment(points[0], points[1]),
      new Segment(points[1], points[2]),
      new Segment(points[2], points[3]),
      new Segment(points[3], points[0]),
      new Segment(points[0], points[4]),
      new Segment(points[1], points[4]),
      new Segment(points[2], points[4]),
      new Segment(points[3], points[4]),
    ];
  }

  private static pointsFrom(position: Point, base: number,
    height: number): Point[] {
    const x = position.x;
    const y = position.y;
    const z = position.z;
    const r = base / 2;

    return [
      new Point([x - r, y - r, z         ]), // Bottom left
      new Point([x - r, y + r, z         ]), // Top left
      new Point([x + r, y + r, z         ]), // Top right
      new Point([x + r, y - r, z         ]), // Bottom right
      new Point([x    , y    , z + height]), // Top
    ];
  }
}
