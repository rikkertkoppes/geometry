describe('intersection',function() {
    var p1 = new Polygon(
        new Point2D(0,0),
        new Point2D(2,2),
        new Point2D(2,0)
    );
    var p2 = new Polygon(
        new Point2D(0,0),
        new Point2D(2,0),
        new Point2D(0,2)
    );
    var r1 = new Rectangle(0,0,1,1);
    var r2 = new Rectangle(0.5,0.5,1,1);
    var c1 = new Circle(0,0,1);
    describe('intersectShapes',function() {
        it('should intersect two polygons',function() {
            var i = Intersection.intersectShapes(p1,p2);
            expect(i.points[0].eq(new Point2D(0,0))).toBe(true);
            expect(i.points[1].eq(new Point2D(2,0))).toBe(true);
            expect(i.points[2].eq(new Point2D(1,1))).toBe(true);
        });

        it('should intersect two rectangles',function() {
            var i = Intersection.intersectShapes(r1,r2);
            expect(i.points[0].eq(new Point2D(1,0.5))).toBe(true);
            expect(i.points[1].eq(new Point2D(0.5,1))).toBe(true);
        });

        it('should intersect a rectangle and a polygon',function() {
            var i = Intersection.intersectShapes(r1,p1);
            expect(i.points[0].eq(new Point2D(0,0))).toBe(true);
            expect(i.points[1].eq(new Point2D(1,1))).toBe(true);
            expect(i.points[2].eq(new Point2D(1,0))).toBe(true);
        });

        it('should intersect a circle and a polygon',function() {
            var i = Intersection.intersectShapes(c1,p1);
            var s2 = 0.5*Math.sqrt(2);
            expect(i.points[0].eq(new Point2D(s2,s2))).toBe(true);
            expect(i.points[1].eq(new Point2D(1,0))).toBe(true);
        });

        it('should intersect a circle and a rectangle',function() {
            var i = Intersection.intersectShapes(c1,r1);
            expect(i.points[0].eq(new Point2D(1,0))).toBe(true);
            expect(i.points[1].eq(new Point2D(0,1))).toBe(true);
        });
    });
});