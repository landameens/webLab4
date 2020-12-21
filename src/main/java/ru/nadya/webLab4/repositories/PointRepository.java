package ru.nadya.webLab4.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ru.nadya.webLab4.models.Point;

import java.util.Collection;

public interface PointRepository extends JpaRepository<Point, Long> {
    @Query("SELECT p FROM Point p WHERE p.login = :login")
    Collection<Point> findAllByLogin(String login);
}