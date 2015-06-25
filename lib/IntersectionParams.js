var IntersectionParams = (function() {

    function IntersectionParams(name, params) {
        if (arguments.length > 0) {
            this.init(name, params);
        }
    }

    IntersectionParams.prototype.init = function(name, params) {
        this.name = name;
        this.params = params;
    };

    return IntersectionParams;
}());