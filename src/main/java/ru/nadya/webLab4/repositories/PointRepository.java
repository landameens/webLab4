package ru.nadya.webLab4.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ru.nadya.webLab4.models.Point;

import java.util.List;

public interface PointRepository extends JpaRepository<Point, Long> {
    @Query("SELECT p FROM Point p WHERE p.login = :login")
    List<Point> findAllByLogin(@Param("login") String login);

    Point findByR(Double r);
}
