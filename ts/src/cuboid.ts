class Cuboid {
  points: Point[] = [
    new Point([-100, -100, -200]),
    new Point([-100, 100, -200]),
    new Point([100, 100, -200]),
    new Point([100, -100, -200]),
    new Point([-100, -100, 200]),
    new Point([-100, 100, 200]),
    new Point([100, 100, 200]),
    new Point([100, -100, 200]),
  ];

  segments: Segment[] = [
    new Segment(this.points[0], this.points[1]),
    new Segment(this.points[1], this.points[2]),
    new Segment(this.points[2], this.points[3]),
    new Segment(this.points[3], this.points[0]),
    new Segment(this.points[4], this.points[5]),
    new Segment(this.points[5], this.points[6]),
    new Segment(this.points[6], this.points[7]),
    new Segment(this.points[7], this.points[4]),
    new Segment(this.points[0], this.points[4]),
    new Segment(this.points[1], this.points[5]),
    new Segment(this.points[2], this.points[6]),
    new Segment(this.points[3], this.points[7]),
  ];

}
