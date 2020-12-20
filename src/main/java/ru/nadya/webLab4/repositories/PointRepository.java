package ru.nadya.webLab4.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.nadya.webLab4.models.Point;

public interface PointRepository extends JpaRepository<Point, Long> {
    Point findByLogin(String login);
    Point findByR(Double r);
}
