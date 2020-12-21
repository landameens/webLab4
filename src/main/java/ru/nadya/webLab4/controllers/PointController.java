package ru.nadya.webLab4.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ru.nadya.webLab4.models.Point;
import ru.nadya.webLab4.repositories.PointChecker;
import ru.nadya.webLab4.repositories.PointRepository;

import java.util.Collection;

@RestController
public class PointController {
    @Autowired
    private PointRepository pointRepository;

    @Autowired
    private PointChecker pointChecker;

    @PostMapping("api/point")
    public ResponseEntity<?> addNewPoint(@RequestBody Point point) {
        point.setResult(pointChecker.checkPoint(point));
        pointRepository.save(point);

        return new ResponseEntity<>("{\"result\":\"Точка добавлена успешно\", \"user\":\"" + point.getLogin() + "\"}", HttpStatus.OK);
    }

    @PostMapping("/api/point/user")
    public Collection<Point> getAllUserPoints(@RequestBody Point point) {
        System.out.println(point.getLogin());
        return pointRepository.findAllByLogin(point.getLogin());
//        return new ResponseEntity<>("{\"points\":[" + points + "]\"}", HttpStatus.OK);
    }
}
