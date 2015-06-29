JS Geometry lib
======

Goal is to create a standalone geometry library, just the Math

All the hard stuff is already done by [Kevin Lindsey](http://www.kevlindev.com/). This is just a rewrite to separate it from SVG and user interaction. It also adds tests.

Reason is I could not find a good generic library for geometry that could be used in the browser and on node. With no dependencies to canvas, svg or any implementation specific code. Just the math.

Libraries I considered:

- [paperjs](http://paperjs.org/) strongly coupled with canvas
- [Kevin Lindseys lib](http://www.kevlindev.com/). Has SVG dependencies
- [turfjs](http://turfjs.org/). Very nice, but for geospatial stuff (non euclidean), coupled to geojson
- [jsts](https://github.com/bjornharrtell/jsts). Geospatial as well
- [satjs](https://github.com/jriecken/sat-js). Nice, but very limited

Reference
---------

###Point2D

- `Point2D(x:Number,y:Number):Point2D` constructor
- `add(p:Point2D):Point2D`
- `addEquals(p:Point2D):Point2D`
- `scalarAdd(s:Number):Point2D`
- `scalarAddEquals(s:Number):Point2D`
- `subtract(p:Point2D):Point2D`
- `subtractEquals(p:Point2D):Point2D`
- `scalarSubtract(s:Number):Point2D`
- `scalarSubtractEquals(s:Number):Point2D`
- `multiply(s:Number):Point2D`
- `multiplyEquals(s:Number):Point2D`
- `divide(s:Number):Point2D`
- `divideEquals(s:Number):Point2D`
- `eq(p:Point2D):Boolean`
- `lt(p:Point2D):Boolean`
- `lte(p:Point2D):Boolean`
- `gt(p:Point2D):Boolean`
- `gte(p:Point2D):Boolean`
- `lerp(p:Point2D,t:Number):Point2D` interpolates between two points. t between 0 and 1
- `distanceFrom(p:Point2D):Number` distance between two points
- `min(p:Point2D):Point2D` minimum coordinates of two points
- `max(p:Point2D):Point2D` maximum coordinates of two points
- `toString():String` string representation
- `setXY(x:Number,y:Number)` sets x and y internally
- `setFromPoint(p:Point2D)` sets x and y internally from another point
- `swap(p:Point2D)` swaps the positions of two points

###Vector2D

- `Vector2D(x:Number,y:Number):Vector` constructor
- `length():Number` vector length or norm or absolute value
- `dot(v:Vector2D):Number` dot product with another vector
- `cross(v:Vector2D):Number` 2D (!) cross product, returns a number representing the area of the paralellogram spanned by the two vectors
- `unit`(v:Vector2D):Vector2D` reduces the vector to length 1
- `add(p:Vector2D):Vector2D`
- `addEquals(p:Vector2D):Vector2D`
- `subtract(p:Vector2D):Vector2D`
- `subtractEquals(p:Vector2D):Vector2D`
- `multiply(s:Number):Vector2D`
- `multiplyEquals(s:Number):Vector2D`
- `divide(s:Number):Vector2D`
- `divideEquals(s:Number):Vector2D`
- `Vector2D::fromPoints(p1:Point2D,p2:Point2D):Vector2D` creates a vector from 2 points

###Line

- `Line(p1:Point2D,p2:Point2D):Line` constructor
- `cut(t:Number):[Line,Line]` cut the line, t between 0 and 1. Returns [Line,Line]
- `getIntersectionParams():IntersectionParams` returns intersection paramaters to be used in intersection calculations

###Circle

- `Circle(cx:Number,cy:Number,r:Number):Circle` constructor
- `translate(delta:Vector2D)` translate the circle
- `getIntersectionParams():IntersectionParams` returns intersection paramaters to be used in intersection calculations

###Rectangle

- `Rectangle(x:Number,y:Number,w:Number,h:Number):Rectangle` constructor
- `getIntersectionParams():IntersectionParams` returns intersection paramaters to be used in intersection calculations

###Polygon

- `Polygon(p1:Point2D,p2:Point2D, ...):Polygon` constructor, can take an arbitrary number of points
- `pointInPolygon(point:Point2D):Boolean` determines whether the given point is inside the polygon.
- `getArea():Number` gets the polygon area
- `isClockwise():Boolean`
- `isCounterClockwise():Boolean`
- `isConcave():Boolean`
- `isConvex():Boolean`
- `getIntersectionParams():IntersectionParams` returns intersection paramaters to be used in intersection calculations

###Intersection

Only one static method is relevant.

- `Intersection::intersectShapes(s1:Shape,s2:Shape):Intersection` intersects two (arbitrary) shapes. Main method of this class.