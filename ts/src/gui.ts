class GUI {
  static clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  static draw(points: Point[], segments: Segment[], offset: Point=new Point([canvas.width / 2, canvas.height / 2, 0])) {
    ctx.save();

    for (const s of segments) {
      ctx.beginPath();
      ctx.moveTo(s.v1.x + offset.x, s.v1.y + offset.y);
      ctx.lineTo(s.v2.x + offset.x, s.v2.y + offset.y);
      ctx.stroke();
    }

    ctx.restore();
  }
}
