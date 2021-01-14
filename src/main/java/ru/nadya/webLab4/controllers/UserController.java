package ru.nadya.webLab4.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ru.nadya.webLab4.controllers.responses.Response;
import ru.nadya.webLab4.controllers.responses.UserResponse;
import ru.nadya.webLab4.models.User;
import ru.nadya.webLab4.repositories.UserRepository;
import ru.nadya.webLab4.security.details.UserDetailsServiceImpl;

import static ru.nadya.webLab4.models.utils.Status.*;

@RestController
public class UserController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    private UserResponse response = new UserResponse();


    @PostMapping("api/signIn")
    public Response login(@RequestBody User user) {
        if (userRepository.findByLogin(user.getLogin()) != null) {
            UserDetails loginUser = userDetailsService.loadUserByUsername(user.getLogin());
            if (!passwordEncoder.matches(user.getPassword(), loginUser.getPassword())) {
                response.setCode("4U2");
                response.setMessage(CODE4U2.getMessage());
            } else {
                response.setCode("2U0");
                response.setMessage(CODE2U0.getMessage());
                response.setUser(user.getLogin());
            }
        } else {
            response.setCode("4U1");
            response.setMessage(CODE4U1.getMessage());
        }
        return response;
    }

    @PostMapping("api/register")
    public Response register(@RequestBody User user) {
        if (userRepository.findByLogin(user.getLogin()) != null) {
            response.setCode("4U3");
            response.setMessage(CODE4U3.getMessage());
        } else {
            user.setHashPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            response.setCode("2U1");
            response.setMessage(CODE2U1.getMessage());
            response.setUser(user.getLogin());
        }
        return response;
    }
}