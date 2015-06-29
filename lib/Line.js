var Line = (function() {

    /*****
    *
    *   Line.js
    *
    *   copyright 2002, Kevin Lindsey
    *
    *****/


    //constructor
    function Line(x1,y1,x2,y2) {
        if (arguments.length == 2) {
            //two points given
            this.init(x1,y1);
        }
        if (arguments.length == 4) {
            //x1,y1,x2,y2 given
            var p1 = new Point2D(x1,y1);
            var p2 = new Point2D(x2,y2);
            this.init(p1,p2);
        }
    }

    Line.prototype.init = function(p1,p2) {
        // Create handles
        this.p1 = p1;
        this.p2 = p2;
    };

    Line.prototype.cut = function(t) {
        var cutPoint = this.p1.lerp(this.p2, t);
        return [
            new Line(this.p1,cutPoint),
            new Line(cutPoint,this.p2)
        ];
    };

    Line.prototype.getIntersectionParams = function() {
        return new IntersectionParams(
            "Line",
            [ this.p1, this.p2 ]
        );
    };

    return Line;
}());
