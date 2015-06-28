describe('Rectangle',function() {
    describe('instantiation',function() {
        it('should be intialized to corner points',function() {
            var r1 = new Rectangle(2,3,5,6);
            expect(r1.p1.eq(new Point2D(2,3))).toBe(true);
            expect(r1.p2.eq(new Point2D(7,9))).toBe(true);
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