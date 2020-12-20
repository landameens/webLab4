package ru.nadya.webLab4.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import ru.nadya.webLab4.models.Point;
import ru.nadya.webLab4.repositories.PointChecker;
import ru.nadya.webLab4.repositories.PointRepository;
import ru.nadya.webLab4.repositories.UserRepository;

@Controller
public class PointController {
    @Autowired
    private PointRepository pointRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PointChecker pointChecker;

    @PostMapping("api/checkPoint")
    public ResponseEntity<?> addNewPoint(@RequestBody Point point, String login) {
        point.setResult(pointChecker.checkPoint(point));
        point.setLogin(login);
        pointRepository.save(point);

        return new ResponseEntity<>("{\"result\":\"Точка добавлена успешно\", \"user\":\"" + login + "\"}", HttpStatus.OK);
    }
}
