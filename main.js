import {Sphere } from './Sphere.js';

function main() {
    // define a bunch of spheres
    var geometries = {
        new Sphere(...),
        new Sphere(...),
        // lights - geometries with emmission material
        new Sphere(...)
    };

    for (var y = 0; y < innerHeight; y++) {
        for (var x = 0; x < innerWidth; x++) {
            // calculate ray and trace
            var color = trace(geometries, rayOrigin, rayDirection, depth = 1);
            // color the pixel in the buffer
        }
    }
}