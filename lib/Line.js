var Line = (function() {

    /*****
    *
    *   Line.js
    *
    *   copyright 2002, Kevin Lindsey
    *
    *****/


    /*****
    *
    *   constructor
    *
    *****/
    function Line(p1,p2) {
        if ( arguments.length > 0 ) {
            this.init(p1,p2);
        }
    }


    /*****
    *
    *   init
    *
    *****/
    Line.prototype.init = function(p1,p2) {
        // Create handles
        this.p1 = p1;
        this.p2 = p2;
    };


    /*****
    *
    *   cut
    *
    *****/
    Line.prototype.cut = function(t) {
        var cutPoint = this.p1.lerp(this.p2, t);
        return [
            new Line(this.p1,cutPoint),
            new Line(cutPoint,this.p2)
        ];
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
    Line.prototype.getIntersectionParams = function() {
        return new IntersectionParams(
            "Line",
            [ this.p1, this.p2 ]
        );
    };

    return Line;
}());
