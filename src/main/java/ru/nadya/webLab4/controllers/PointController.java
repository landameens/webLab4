package ru.nadya.webLab4.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ru.nadya.webLab4.controllers.responses.PointResponse;
import ru.nadya.webLab4.controllers.responses.Response;
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

    private PointResponse response = new PointResponse();

    @PostMapping("api/point")
    public Response addNewPoint(@RequestBody Point point) {
        point.setResult(pointChecker.checkPoint(point));
        pointRepository.save(point);

        response.setResult("Точка добавлена успешно");
        response.setUser(point.getLogin());

        return response;
    }

    @PostMapping("/api/point/user")
    public Collection<Point> getAllUserPoints(@RequestBody Point point) {
        return pointRepository.findAllByLogin(point.getLogin());
    }
}
