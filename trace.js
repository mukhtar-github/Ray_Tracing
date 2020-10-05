function trace(geometries, rayOrigin, rayDirection, depth) {
    var geoNear = undefined;

    for (var i = 0; i < geometries.lengtg; i++) {
        var result = geometries[i].intersect(rayorig, raydir);
        // intersection distance is closer than origin -> save dist & geometry
    }
    if (geoNear === undefined) { return BACKGROUND_COLOR; }
    if (geoNear.material.transparent || geoNear.material.reflective) {
        // compute reflection ray - recurse
        var reflectionColor = trace(geometries, reflOrigin, reflDirection, depth + 1);
        // compute refraction ray - recurse
        var refractionColor = trace(geometries, refrOrigin, refrDirection, depth + 1);
        var Kr = fresnel(...)

        return reflectionColor * Kr + refractionColor * (1 - Kr);
    } else { ... }
}