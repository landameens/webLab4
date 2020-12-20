package ru.nadya.webLab4.repositories;

import org.springframework.stereotype.Component;
import ru.nadya.webLab4.models.Point;

@Component
public class PointChecker {
    public boolean checkPoint(Point point) {
        return isInArea(point.getX(), point.getY(), point.getR());
    }

    private boolean isInArea(Double x, Double y, Double r) {
        boolean inCircleQuadrant = ((x >= 0 && y >= 0) && (x * x + y * y <= r * r));
        boolean inSquare = (x <= 0 && x >= -r && y >= 0 && y <= r);
        boolean inTriangle = (x >= 0 && x <= r) && (y <= 0 && y >= -(r / 2)) &&
                y >= (-(r / 2) + x);

        return inCircleQuadrant || inSquare || inTriangle;
    }

}
