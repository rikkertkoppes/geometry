var Rectangle = (function() {
    /*****
    *
    *   Rectangle.js
    *
    *   copyright 2002, Kevin Lindsey
    *
    *****/


    /*****
    *
    *   constructor
    *
    *****/
    function Rectangle(x,y,w,h) {
        if ( arguments.length > 0 ) {
            this.init.apply(this,arguments);
        }
    }


    /*****
    *
    *   init
    *
    ******/
    Rectangle.prototype.init = function(x,y,w,h) {
        this.p1     = new Point2D(x, y);               // top-left
        this.p2     = new Point2D(x+w, y+h);  // bottom-right
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
    Rectangle.prototype.getIntersectionParams = function() {
        return new IntersectionParams(
            "Rectangle",
            [ this.p1, this.p2 ]
        );
    };

    return Rectangle;
}());