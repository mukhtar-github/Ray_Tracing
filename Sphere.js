class Sphere extends Geometry {
    constructor(center, radius, material) {
        // TODO
    }

    intersect(rayOrigin, rayDirection) {
        //Sphere intersection calculation
        //...
        //Ray misses the sphere
        return { intersect: false };
        //Ray intersects with sphere
        return {
            intersect: true,
            t0: disttance to first intersection,
            t1: disttance to second intersection
        };
    }
};

export { Sphere };