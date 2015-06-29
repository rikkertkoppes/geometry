var Circle = (function() {
    /*****
    *
    *   Circle.js
    *
    *   copyright 2002, Kevin Lindsey
    *
    *****/

    //constructor
    function Circle(cx,cy,r) {
        if (arguments.length == 2) {
            //point and raduis
            this.init(cx,cy);
        }
        if (arguments.length == 3) {
            //cx,cy,r given
            var c = new Point2D(cx,cy);
            this.init(c,r);
        }
    }

    Circle.prototype.init = function(c,r) {
        // Init properties
        this.center = c;
        this.radius = r;
    };

    Circle.prototype.translate = function(delta) {
        this.center = this.center.add(delta);
    };

    Circle.prototype.getIntersectionParams = function() {
        return new IntersectionParams(
            "Circle",
            [
                this.center,
                this.radius
            ]
        );
    };

    return Circle;
}());