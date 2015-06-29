var Rectangle = (function() {
    /*****
    *
    *   Rectangle.js
    *
    *   copyright 2002, Kevin Lindsey
    *
    *****/


    //constructor
    function Rectangle(x,y,w,h) {
        if (arguments.length == 2) {
            //two points given
            this.init(x,y);
        }
        if (arguments.length == 4) {
            //x,y,w,h given
            var p1 = new Point2D(x,y);
            var p2 = p1.add(new Point2D(w,h));
            this.init(p1,p2);
        }
    }

    Rectangle.prototype.init = function(p1,p2) {
        this.p1 = p1  // bottom-left
        this.p2 = p2  // top-right
    };

    Rectangle.prototype.toPolygon = function() {
        var topLeft = new Point2D(this.p1.x,this.p2.y);
        var bottomRight = new Point2D(this.p2.x,this.p1.y);
        return new Polygon(this.p1,bottomRight,this.p2,topLeft);
    };

    Rectangle.prototype.getIntersectionParams = function() {
        return new IntersectionParams(
            "Rectangle",
            [ this.p1, this.p2 ]
        );
    };

    return Rectangle;
}());