describe('Polygon',function() {
    var uccw = new Polygon(
        new Point2D(0,0),
        new Point2D(1,0),
        new Point2D(1,1),
        new Point2D(0,1)
    );
    var ucw = new Polygon(
        new Point2D(0,0),
        new Point2D(0,1),
        new Point2D(1,1),
        new Point2D(1,0)
    );
    describe('instantiation',function() {
        it('should instantiate from points',function() {
            expect(uccw.points.length).toBe(4);
        });
    });

    describe('getIntersectionParams',function() {
        it('should return intersectionparams',function() {
            var p = ucw.getIntersectionParams();
            expect(p.name).toBe('Polygon');
            expect(p.params).toBe(ucw.points);
        });
    });

    describe('pointInPolygon',function() {
        it('should test whether a point is in or on a polygon',function() {
            var p1 = new Point2D(0.5,0.5);
            var p2 = new Point2D(1,1);
            var p3 = new Point2D(2,2);
            expect(ucw.pointInPolygon(p1)).toBe(true);
            expect(ucw.pointInPolygon(p2)).toBe(true);
            expect(ucw.pointInPolygon(p3)).toBe(false);
        })
    });

    describe('getArea',function() {
        it('should get the area of a polygon',function() {
            expect(ucw.getArea()).toBe(-1);
            expect(uccw.getArea()).toBe(1);
        })
    });

    describe('isClockwise',function() {
        it('should return the correct handedness',function() {
            expect(uccw.isClockwise()).toBe(false);
            expect(ucw.isClockwise()).toBe(true);
        });
    });

    describe('isCounterClockwise',function() {
        it('should return the correct handedness',function() {
            expect(uccw.isCounterClockwise()).toBe(true);
            expect(ucw.isCounterClockwise()).toBe(false);
        });
    });

    describe('isConcave',function() {
        it('should return false for convex polygons',function() {
            expect(ucw.isConcave()).toBe(false);
        });
    });

    describe('isConvex',function() {
        it('should return true for convex polygons',function() {
            expect(ucw.isConvex()).toBe(true);
        })
    });
});