describe('Vector2D',function() {
    describe('fromPoints',function() {
        it('should create a vector from two points',function() {
            var p1 = new Vector2D(2,4);
            var p2 = new Vector2D(5,13);
            var v = Vector2D.fromPoints(p1,p2);
            expect(v.x).toBe(3);
            expect(v.y).toBe(9);
        });
    });

    describe('instantiation',function() {
        it('should create a new vector from separate coordinates',function() {
            var v = new Vector2D(4,6);
            expect(v.x).toBe(4);
            expect(v.y).toBe(6);
        });
    });

    describe('length',function() {
        it('should calculate the length or magnitude of the vector',function() {
            var v = new Vector2D(3,4);
            expect(v.length()).toBe(5);
        });
    });

    describe('dot',function() {
        it('should calculate the dot product of two vectors',function() {
            var v1 = new Vector2D(0,1);
            var v2 = new Vector2D(1,0);
            expect(v1.dot(v2)).toBe(0);
            expect(v2.dot(v2)).toBe(1);
        });
    });

    describe('cross',function() {
        it('should calculate the cross product of two vectors',function() {
            var v1 = new Vector2D(0,1);
            var v2 = new Vector2D(1,0);
            expect(v1.cross(v2)).toBe(-1);
            expect(v2.cross(v2)).toBe(0);
        });
    });

    describe('unit',function() {
        it('should convert the vector to a unit vector of length 1',function() {
            var v1 = new Vector2D(4,0);
            var v2 = v1.unit();
            expect(v2.x).toBe(1);
            expect(v2.y).toBe(0);
            expect(v2).not.toBe(v1);
        });
    });

    describe('unitEquals',function() {
        it('should convert the vector to a unit vector of length 1',function() {
            var v1 = new Vector2D(4,0);
            var v2 = v1.unitEquals();
            expect(v2.x).toBe(1);
            expect(v2.y).toBe(0);
            expect(v2).toBe(v1);
        })
    })

    describe('add',function() {
        it('should add two points in euclidean space',function() {
            var v1 = new Vector2D(4,7);
            var v2 = new Vector2D(3,5);
            var v3 = v1.add(v2);
            expect(v3.x).toBe(7);
            expect(v3.y).toBe(12);
            expect(v3).not.toBe(v1);
        });
    });

    describe('addEquals',function() {
        it('should add two points in euclidean space',function() {
            var v1 = new Vector2D(4,7);
            var v2 = new Vector2D(3,5);
            var v3 = v1.addEquals(v2);
            expect(v3.x).toBe(7);
            expect(v3.y).toBe(12);
            expect(v3).toBe(v1);
        });
    });

    describe('subtract',function() {
        it('should subtract two points in euclidean space',function() {
            var v1 = new Vector2D(4,7);
            var v2 = new Vector2D(3,5);
            var v3 = v1.subtract(v2);
            expect(v3.x).toBe(1);
            expect(v3.y).toBe(2);
            expect(v3).not.toBe(v1);
        });
    });

    describe('subtractEquals',function() {
        it('should subtract two points in euclidean space',function() {
            var v1 = new Vector2D(4,7);
            var v2 = new Vector2D(3,5);
            var v3 = v1.subtractEquals(v2);
            expect(v3.x).toBe(1);
            expect(v3.y).toBe(2);
            expect(v3).toBe(v1);
        });
    });

    describe('multiply',function() {
        it('should multiply two points in euclidean space',function() {
            var v1 = new Vector2D(4,7);
            var v2 = v1.multiply(2);
            expect(v2.x).toBe(8);
            expect(v2.y).toBe(14);
            expect(v2).not.toBe(v1);
        });
    });

    describe('multiplyEquals',function() {
        it('should multiply two points in euclidean space',function() {
            var v1 = new Vector2D(4,7);
            var v2 = v1.multiplyEquals(2);
            expect(v2.x).toBe(8);
            expect(v2.y).toBe(14);
            expect(v2).toBe(v1);
        });
    });

    describe('divide',function() {
        it('should divide two points in euclidean space',function() {
            var v1 = new Vector2D(4,7);
            var v2 = v1.divide(2);
            expect(v2.x).toBe(2);
            expect(v2.y).toBe(3.5);
            expect(v2).not.toBe(v1);
        });
    });

    describe('divideEquals',function() {
        it('should divide two points in euclidean space',function() {
            var v1 = new Vector2D(4,7);
            var v2 = v1.divideEquals(2);
            expect(v2.x).toBe(2);
            expect(v2.y).toBe(3.5);
            expect(v2).toBe(v1);
        });
    });
});