var Point2D = (function() {
    /*****
    *
    *   Point2D.js
    *
    *   copyright 2001-2002, Kevin Lindsey
    *
    *****/

    var instances = {};

    function toHash(x,y) {
        return x+','+y;
    }

    //constructor
    function Point2D(x, y) {
        var i, hash;
        if ( arguments.length == 2 ) {
            hash = toHash(x,y);
            if (i = instances[hash]) {
                return i;
            }
            this.x = x;
            this.y = y;
            var o = (Object.freeze || Object)(this);
            instances[hash] = o;
            return o;
        }
    }

    Point2D.prototype.add = function(p) {
        return new Point2D(this.x+p.x, this.y+p.y);
    };

    Point2D.prototype.subtract = function(p) {
        return new Point2D(this.x-p.x, this.y-p.y);
    };

    Point2D.prototype.multiply = function(scalar) {
        return new Point2D(this.x*scalar, this.y*scalar);
    };

    Point2D.prototype.divide = function(scalar) {
        return new Point2D(this.x/scalar, this.y/scalar);
    };


    /*****
    *
    *   comparison methods
    *
    *   these were a nice idea, but ...  It would be better to define these names
    *   in two parts so that the first part is the x comparison and the second is
    *   the y.  For example, to test p1.x < p2.x and p1.y >= p2.y, you would call
    *   p1.lt_gte(p2).  Honestly, I only did these types of comparisons in one
    *   Intersection routine, so these probably could be removed.
    *
    *****/


    //eq - equal
    Point2D.prototype.eq = function(p) {
        return ( this.x === p.x && this.y === p.y );
    };


    //lt - less than
    Point2D.prototype.lt = function(p) {
        return ( this.x < p.x && this.y < p.y );
    };


    //lte - less than or equal
    Point2D.prototype.lte = function(p) {
        return ( this.x <= p.x && this.y <= p.y );
    };


    //gt - greater than
    Point2D.prototype.gt = function(p) {
        return ( this.x > p.x && this.y > p.y );
    };


    //gte - greater than or equal
    Point2D.prototype.gte = function(p) {
        return ( this.x >= p.x && this.y >= p.y );
    };

    //lerp - linear interpolation
    Point2D.prototype.lerp = function(p, t) {
        return new Point2D(
            this.x + (p.x - this.x) * t,
            this.y + (p.y - this.y) * t
        );
    };


    //distanceFrom - eucledian
    Point2D.prototype.distanceFrom = function(p) {
        var dx = this.x - p.x;
        var dy = this.y - p.y;

        return Math.sqrt(dx*dx + dy*dy);
    };

    Point2D.prototype.min = function(p) {
        return new Point2D(
            Math.min( this.x, p.x ),
            Math.min( this.y, p.y )
        );
    };

    Point2D.prototype.max = function(p) {
        return new Point2D(
            Math.max( this.x, p.x ),
            Math.max( this.y, p.y )
        );
    };

    Point2D.prototype.toString = function() {
        return this.x + "," + this.y;
    };

    return Point2D;
}());