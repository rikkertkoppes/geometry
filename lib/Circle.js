var Circle = (function() {
    /*****
    *
    *   Circle.js
    *
    *   copyright 2002, Kevin Lindsey
    *
    *****/

    /*****
    *
    *   constructor
    *
    *****/
    function Circle(cx,cy,r) {
        if ( arguments.length > 0 ) {
            this.init.apply(this,arguments);
        }
    }


    /*****
    *
    *   init
    *
    ******/
    Circle.prototype.init = function(cx,cy,r) {
        // Init properties
        this.center = new Point2D(cx, cy);
        this.radius = r;
    };

    /*****
    *
    *   translate
    *
    *****/
    Circle.prototype.translate = function(delta) {
        this.center = this.center.add(delta);
    };

    /*****
    *
    *   get/set methods
    *
    *****/

    /*****
    *
    *   getIntersectionParams
    *
    *****/
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