describe('Rectangle',function() {
    describe('instantiation',function() {
        it('should be intialized to corner points 4 arguments',function() {
            var r1 = new Rectangle(2,3,5,6);
            expect(r1.p1).toBe(new Point2D(2,3));
            expect(r1.p2).toBe(new Point2D(7,9));
        });

        it('should be intialized to corner points 4 arguments',function() {
            var p1 = new Point2D(2,3);
            var p2 = new Point2D(7,9);
            var r1 = new Rectangle(p1,p2);
            expect(r1.p1).toBe(new Point2D(2,3));
            expect(r1.p2).toBe(new Point2D(7,9));
        });
    });

    describe('toPolygon',function() {
        it('should return a counterclockwise polygon',function() {
            var r1 = new Rectangle(2,3,5,6);
            var p1 = r1.toPolygon();
            expect(p1.points[0]).toBe(new Point2D(2,3));
            expect(p1.points[1]).toBe(new Point2D(7,3));
            expect(p1.points[2]).toBe(new Point2D(7,9));
            expect(p1.points[3]).toBe(new Point2D(2,9));
            expect(p1.isCounterClockwise()).toBe(true);
        });
    });

    describe('getIntersectionParams',function() {
        it('should return intersectionparams',function() {
            var r1 = new Rectangle(2,3,5,6);
            var p = r1.getIntersectionParams();
            expect(p.name).toBe('Rectangle');
            expect(p.params).toEqual([r1.p1,r1.p2]);
        });
    });
});