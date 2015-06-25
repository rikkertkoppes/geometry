var Polygon = (function() {

    /*****
    *
    *   Polygon.js
    *
    *   copyright 2002, Kevin Lindsey
    *
    *****/

    /*****
    *
    *   Setup inheritance
    *
    *****/
    // Polygon.prototype             = new Shape();
    // Polygon.prototype.constructor = Polygon;
    // Polygon.superclass            = Shape.prototype;


    /*****
    *
    *   constructor
    *
    *****/
    function Polygon(points) {
        if ( arguments.length > 0 ) {
            this.init.apply(this,arguments);
        }
    }


    /*****
    *
    *   init
    *
    *****/
    Polygon.prototype.init = function(points) {
        // Call superclass method
        // Polygon.superclass.init.call(this, svgNode);

        this.points = [].slice.call(arguments);
    };


    /*****
    *
    *   pointInPolygon
    *
    *****/
    Polygon.prototype.pointInPolygon = function(point) {
        var length  = this.points.length;
        var counter = 0;
        var x_inter;

        var p1 = this.points[0];
        for ( var i = 1; i <= length; i++ ) {
            var p2 = this.points[i%length];

            if ( point.y > Math.min(p1.y, p2.y)) {
                if ( point.y <= Math.max(p1.y, p2.y)) {
                    if ( point.x <= Math.max(p1.x, p2.x)) {
                        if ( p1.y != p2.y ) {
                            x_inter = (point.y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y) + p1.x;
                            if ( p1.x == p2.x || point.x <= x_inter) {
                                counter++;
                            }
                        }
                    }
                }
            }
            p1 = p2;
        }

        return ( counter % 2 == 1 );
    };


    /*****
    *
    *   get/set/info methods
    *
    *****/

    /*****
    *
    *   getIntersectionParams
    *
    *****/
    Polygon.prototype.getIntersectionParams = function() {
        return new IntersectionParams(
            "Polygon",
            this.points
        );
    };


    /*****
    *
    *   getArea
    *
    *****/
    Polygon.prototype.getArea = function() {
        var area   = 0;
        var length = this.points.length;

        for ( var i = 0; i < length; i++ ) {
            var h1 = this.points[i];
            var h2 = this.points[(i+1) % length];
            area += (h1.x * h2.y - h2.x * h1.y);
        }

        return area / 2;
    };


    /*****
    *
    *   getCentroid
    *
    *****/
    // Polygon.prototype.getCentroid = function() {
    //     var length = this.handles.length;
    //     var area6x = 6*this.getArea();
    //     var x_sum  = 0;
    //     var y_sum  = 0;

    //     for ( var i = 0; i < length; i++ ) {
    //         var p1    = this.handles[i].point;
    //         var p2    = this.handles[(i+1) % length].point;
    //         var cross = (p1.x*p2.y - p2.x*p1.y);

    //         x_sum += (p1.x + p2.x) * cross;
    //         y_sum += (p1.y + p2.y) * cross;
    //     }
        
    //     return new Point2D(x_sum / area6x, y_sum / area6x);
    // };


    /*****
    *
    *   isClockwise
    *
    *****/
    Polygon.prototype.isClockwise = function() {
        return this.getArea() < 0;
    };


    /*****
    *
    *   isCounterClockwise
    *
    *****/
    Polygon.prototype.isCounterClockwise = function() {
        return this.getArea() > 0;
    };


    /*****
    *
    *   isConcave
    *
    *****/
    Polygon.prototype.isConcave = function() {
        var positive = 0;
        var negative = 0;
        var length = this.points.length;

        for ( var i = 0; i < length; i++) {
            var p0 = this.points[i];
            var p1 = this.points[(i+1) % length];
            var p2 = this.points[(i+2) % length];
            var v0 = Vector2D.fromPoints(p0, p1);
            var v1 = Vector2D.fromPoints(p1, p2);
            var cross = v0.cross(v1);
            
            if ( cross < 0 ) {
                negative++;
            } else {
                positive++;
            }
        }

        return ( negative != 0 && positive != 0 );
    };


    /*****
    *
    *   isConvex
    *
    *****/
    Polygon.prototype.isConvex = function() {
        return !this.isConcave();
    };

    return Polygon;
}());