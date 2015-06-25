describe('Point2D',function() {
    describe('instantiation',function() {
        it('should create a point from separate coordinates',function() {
            var p = new Point2D(4,7);
            expect(p.x).toBe(4);
            expect(p.y).toBe(7);
        });
    });

    describe('add',function() {
        it('should add two points in euclidean space',function() {
            var p1 = new Point2D(4,7);
            var p2 = new Point2D(3,5);
            var p3 = p1.add(p2);
            expect(p3.x).toBe(7);
            expect(p3.y).toBe(12);
            expect(p3).not.toBe(p1);
        });
    });

    describe('addEquals',function() {
        it('should add two points in euclidean space',function() {
            var p1 = new Point2D(4,7);
            var p2 = new Point2D(3,5);
            var p3 = p1.addEquals(p2);
            expect(p3.x).toBe(7);
            expect(p3.y).toBe(12);
            expect(p3).toBe(p1);
        });
    });

    describe('scalarAdd',function() {
        it('should add the same scalar to both coordinates',function() {
            var p1 = new Point2D(4,7);
            var p2 = p1.scalarAdd(4);
            expect(p2.x).toBe(8);
            expect(p2.y).toBe(11);
            expect(p2).not.toBe(p1);
        });
    });

    describe('scalarAddEquals',function() {
        it('should add the same scalar to both coordinates',function() {
            var p1 = new Point2D(4,7);
            var p2 = p1.scalarAddEquals(4);
            expect(p2.x).toBe(8);
            expect(p2.y).toBe(11);
            expect(p2).toBe(p1);
        });
    });

    describe('subtract',function() {
        it('should subtract two points in euclidean space',function() {
            var p1 = new Point2D(4,7);
            var p2 = new Point2D(3,5);
            var p3 = p1.subtract(p2);
            expect(p3.x).toBe(1);
            expect(p3.y).toBe(2);
            expect(p3).not.toBe(p1);
        });
    });

    describe('subtractEquals',function() {
        it('should subtract two points in euclidean space',function() {
            var p1 = new Point2D(4,7);
            var p2 = new Point2D(3,5);
            var p3 = p1.subtractEquals(p2);
            expect(p3.x).toBe(1);
            expect(p3.y).toBe(2);
            expect(p3).toBe(p1);
        });
    });

    describe('scalarSubtract',function() {
        it('should subtract the same scalar to both coordinates',function() {
            var p1 = new Point2D(4,7);
            var p2 = p1.scalarSubtract(4);
            expect(p2.x).toBe(0);
            expect(p2.y).toBe(3);
            expect(p2).not.toBe(p1);
        });
    });

    describe('scalarSubtractEquals',function() {
        it('should subtract the same scalar to both coordinates',function() {
            var p1 = new Point2D(4,7);
            var p2 = p1.scalarSubtractEquals(4);
            expect(p2.x).toBe(0);
            expect(p2.y).toBe(3);
            expect(p2).toBe(p1);
        });
    });

    describe('multiply',function() {
        it('should multiply two points in euclidean space',function() {
            var p1 = new Point2D(4,7);
            var p2 = p1.multiply(2);
            expect(p2.x).toBe(8);
            expect(p2.y).toBe(14);
            expect(p2).not.toBe(p1);
        });
    });

    describe('multiplyEquals',function() {
        it('should multiply two points in euclidean space',function() {
            var p1 = new Point2D(4,7);
            var p2 = p1.multiplyEquals(2);
            expect(p2.x).toBe(8);
            expect(p2.y).toBe(14);
            expect(p2).toBe(p1);
        });
    });

    describe('divide',function() {
        it('should divide two points in euclidean space',function() {
            var p1 = new Point2D(4,7);
            var p2 = p1.divide(2);
            expect(p2.x).toBe(2);
            expect(p2.y).toBe(3.5);
            expect(p2).not.toBe(p1);
        });
    });

    describe('divideEquals',function() {
        it('should divide two points in euclidean space',function() {
            var p1 = new Point2D(4,7);
            var p2 = p1.divideEquals(2);
            expect(p2.x).toBe(2);
            expect(p2.y).toBe(3.5);
            expect(p2).toBe(p1);
        });
    });

    describe('eq',function() {
        it('should be true if two points are equal',function() {
            var p1 = new Point2D(4,7);
            var p2 = new Point2D(4,7);
            expect(p1.eq(p1)).toBe(true);
            expect(p1.eq(p2)).toBe(true);
        });
        it('should be false if they are not equal',function() {
            var p1 = new Point2D(4,7);
            var p2 = new Point2D(4,8);
            expect(p1.eq(p2)).toBe(false);
        });
    });

    describe('lt',function() {
        it('should be true all coordinate is smaller',function() {
            var p1 = new Point2D(4,7);
            var p2 = new Point2D(3,8);
            expect(p1.lt(p2)).toBe(false);
            expect(p2.lt(p1)).toBe(false);
        });
        it('should be false if all coordinates are greater',function() {
            var p1 = new Point2D(3,6);
            var p2 = new Point2D(5,8);
            expect(p1.lt(p2)).toBe(true);
            expect(p2.lt(p1)).toBe(false);
        });
    });

    describe('lte',function() {
        it('should be true all coordinate is smaller or equal',function() {
            var p1 = new Point2D(4,7);
            var p2 = new Point2D(4,8);
            expect(p1.lte(p2)).toBe(true);
            expect(p2.lte(p1)).toBe(false);
            expect(p1.lte(p1)).toBe(true);
        });
        it('should be false if all coordinates are greater',function() {
            var p1 = new Point2D(3,6);
            var p2 = new Point2D(5,8);
            expect(p1.lte(p2)).toBe(true);
            expect(p2.lte(p1)).toBe(false);
        });
    });

    describe('gt',function() {
        it('should be true any coordinate is greater',function() {
            var p1 = new Point2D(4,7);
            var p2 = new Point2D(3,8);
            expect(p1.gt(p2)).toBe(false);
            expect(p2.gt(p1)).toBe(false);
        });
        it('should be false if all coordinates are smaller',function() {
            var p1 = new Point2D(3,6);
            var p2 = new Point2D(5,8);
            expect(p1.gt(p2)).toBe(false);
            expect(p2.gt(p1)).toBe(true);
        });
    });

    describe('gte',function() {
        it('should be true any coordinate is greater',function() {
            var p1 = new Point2D(4,7);
            var p2 = new Point2D(3,7);
            expect(p1.gte(p2)).toBe(true);
            expect(p2.gte(p1)).toBe(false);
            expect(p1.gte(p1)).toBe(true);
        });
        it('should be false if all coordinates are smaller',function() {
            var p1 = new Point2D(3,6);
            var p2 = new Point2D(5,8);
            expect(p1.gte(p2)).toBe(false);
            expect(p2.gte(p1)).toBe(true);
        });
    });

    describe('lerp',function() {
        it('should return the midpoint between to points',function() {
            var p1 = new Point2D(1,2);
            var p2 = new Point2D(3,6);
            var p3 = p1.lerp(p2,0.5);
            expect(p3.x).toBe(2);
            expect(p3.y).toBe(4);
        });
    });

    describe('distanceFrom',function() {
        it('should return the euclidean distance between two points',function() {
            var p1 = new Point2D(0,0);
            var p2 = new Point2D(3,4);
            expect(p1.distanceFrom(p2)).toBe(5);
        });
    });

    describe('min',function() {
        it('should return the minimum coordinates of two points',function() {
            var p1 = new Point2D(3,5);
            var p2 = new Point2D(4,4);
            var p3 = p1.min(p2);
            expect(p3.x).toBe(3);
            expect(p3.y).toBe(4);
        });
    });

    describe('max',function() {
        it('should return the maximum coordinates of two points',function() {
            var p1 = new Point2D(3,5);
            var p2 = new Point2D(4,4);
            var p3 = p1.max(p2);
            expect(p3.x).toBe(4);
            expect(p3.y).toBe(5);
        });
    });

    describe('toString',function() {
        it('should return a string representation of the point',function() {
            var p1 = new Point2D(3,4);
            expect(p1.toString()).toBe('3,4');
        });
    });

    describe('setXY',function() {
        it('should adjust the coordinates',function() {
            var p1 = new Point2D(3,4);
            p1.setXY(6,7);
            expect(p1.x).toBe(6);
            expect(p1.y).toBe(7);
        });
    });

    describe('setFromPoint',function() {
        it('should copy the point coordinates to itseld',function() {
            var p1 = new Point2D(3,4);
            var p2 = new Point2D(6,7);
            p1.setFromPoint(p2);
            expect(p1.x).toBe(6);
            expect(p1.y).toBe(7);
            expect(p1).not.toBe(p2);
        });
    });

    describe('swap',function() {
        it('should swap the coordinates of two points',function() {
            var p1 = new Point2D(3,4);
            var p2 = new Point2D(6,7);
            p1.swap(p2);
            expect(p1.x).toBe(6);
            expect(p1.y).toBe(7);
            expect(p2.x).toBe(3);
            expect(p2.y).toBe(4);
            expect(p1).not.toBe(p2);
        })
    })
});