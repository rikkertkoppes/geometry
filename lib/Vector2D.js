var Vector2D = (function() {

    /*****
    *
    *   Vector2D.js
    *
    *   copyright 2001-2002, Kevin Lindsey
    *
    *****/

    //constructor
    function Vector2D(x, y) {
        if ( arguments.length > 0 ) {
            this.x = x;
            this.y = y;
        }
    }

    Vector2D.prototype.length = function() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    };

    Vector2D.prototype.dot = function(v) {
        return this.x*v.x + this.y*v.y;
    };

    //2D cross product, returns the area (Number) of the paralellogram spanned by the two vectors
    Vector2D.prototype.cross = function(v) {
        return this.x*v.y - this.y*v.x;
    }

    Vector2D.prototype.unit = function() {
        return this.divide( this.length() );
    };

    Vector2D.prototype.add = function(v) {
        return new Vector2D(this.x + v.x, this.y + v.y);
    };

    Vector2D.prototype.subtract = function(v) {
        return new Vector2D(this.x - v.x, this.y - v.y);
    };

    Vector2D.prototype.multiply = function(scalar) {
        return new Vector2D(this.x * scalar, this.y * scalar);
    };

    Vector2D.prototype.divide = function(scalar) {
        return new Vector2D(this.x / scalar, this.y / scalar);
    };

    Vector2D.fromPoints = function(p1, p2) {
        return new Vector2D(
            p2.x - p1.x,
            p2.y - p1.y
        );
    };

    return Vector2D;
}());