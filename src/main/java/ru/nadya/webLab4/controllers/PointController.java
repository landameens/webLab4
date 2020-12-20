package ru.nadya.webLab4.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import ru.nadya.webLab4.models.Point;
import ru.nadya.webLab4.repositories.PointChecker;
import ru.nadya.webLab4.repositories.PointRepository;

import java.util.Collection;

@Controller
public class PointController {
    @Autowired
    private PointRepository pointRepository;

    @Autowired
    private PointChecker pointChecker;

    @PostMapping("api/checkPoint")
    public ResponseEntity<?> addNewPoint(@RequestBody Point point, String login) {
        point.setResult(pointChecker.checkPoint(point));
        point.setLogin(login);
        pointRepository.save(point);

        return new ResponseEntity<>("{\"result\":\"Точка добавлена успешно\", \"user\":\"" + login + "\"}", HttpStatus.OK);
    }

    @GetMapping("/api/getPoints")
    public ResponseEntity<?> getAllUserPoints(@RequestParam String login) {
        Collection<Point> points = pointRepository.findAllByLogin(login);
        return new ResponseEntity<>("{\"points\":\"" + points + "\"}", HttpStatus.OK);
    }
}
