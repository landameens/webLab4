export default function checker(x, y, r) {
    const inCircleQuadrant = (x >= 0) && (y >= 0) && (x * x + y * y <= r * r)
    const inSquare = (x <= 0) && (x >= -r) && (y >= 0) && (y <= r)
    const inTriangle = (x >= 0 && x <= r) && (y <= 0 && y >= -(r / 2)) &&
        (y >= -(r / 2) + (x / 2))

    console.log({ inCircleQuadrant, inTriangle, inSquare })

    return (inCircleQuadrant || inSquare || inTriangle)
}