describe('Line',function() {
    var p1 = new Point2D(1,1);
    var p2 = new Point2D(2,5);
    var p3 = new Point2D(1.5,3);
    var l = new Line(p1,p2);

    describe('instantiation',function() {
        it('should have the endpoints',function() {
            expect(l.p1).toBe(p1);
            expect(l.p2).toBe(p2);
        });
        it('should be intialized to corner points 4 arguments',function() {
            var l1 = new Line(2,3,7,9);
            expect(l1.p1.eq(new Point2D(2,3))).toBe(true);
            expect(l1.p2.eq(new Point2D(7,9))).toBe(true);
        });
    });

    describe('cut',function() {
        it('should return two new lines',function() {
            var res = l.cut(0.5);
            expect(res[0].p1).toBe(p1);
            expect(res[0].p2.eq(p3)).toBe(true);
            expect(res[1].p1.eq(p3)).toBe(true);
            expect(res[1].p2).toBe(p2);
        });
    });

    describe('getIntersectionParams',function() {
        it('should return intersectionparams',function() {
            var p = l.getIntersectionParams();
            expect(p.name).toBe('Line');
            expect(p.params).toEqual([p1,p2]);
        });
    });
});