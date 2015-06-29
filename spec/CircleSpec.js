describe('Circle',function() {
    describe('instantiation',function() {
        it('should initialize with a center point and radius',function() {
            var p = new Point2D(2,3);
            var c = new Circle(p,4);
            expect(c.center).toBe(new Point2D(2,3));
            expect(c.radius).toBe(4);
        });
        it('should initialize with a center and radius',function() {
            var c = new Circle(2,3,4);
            expect(c.center).toBe(new Point2D(2,3));
            expect(c.radius).toBe(4);
        });
    });

    describe('translate',function() {
        it('should move its center',function() {
            var c = new Circle(2,3,4);
            c.translate(new Point2D(2,2));
            expect(c.center).toBe(new Point2D(4,5));
            expect(c.radius).toBe(4);
        });
    });

    describe('getIntersectionParams',function() {
        it('should return intersectionparams',function() {
            var c = new Circle(2,3,4);
            var p = c.getIntersectionParams();
            expect(p.name).toBe('Circle');
            expect(p.params).toEqual([
                c.center,
                4
            ]);
        });
    });
});