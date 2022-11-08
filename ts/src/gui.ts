class GUI {
  // @M is transformation matrix
  static draw(points: Point[], segments: Segment[]) {
    ctx.save();

    for (const s of segments) {
      ctx.beginPath();
      ctx.moveTo(s.v1.x, s.v1.y);
      ctx.lineTo(s.v2.x, s.v2.y);
      ctx.stroke();
    }

    ctx.restore();
  }
}
