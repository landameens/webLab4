package ru.nadya.webLab4.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import ru.nadya.webLab4.models.User;
import ru.nadya.webLab4.repositories.UserRepository;
import ru.nadya.webLab4.security.details.UserDetailsServiceImpl;

import static ru.nadya.webLab4.models.utils.Status.*;

@Controller
public class UserController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @PostMapping("api/signIn")
    //ToDo: разобраться с <?>
    public ResponseEntity<String> login(@RequestBody User user) {
        if (userRepository.findByLogin(user.getLogin()) != null) {
            UserDetails loginUser = userDetailsService.loadUserByUsername(user.getLogin());
            if (!passwordEncoder.matches(user.getPassword(), loginUser.getPassword())) {
                return new ResponseEntity<>("{\"code\":\"4U2\", \"message\":\"" + CODE4U2.getMessage() + "\"}", HttpStatus.CONFLICT);
            } else {
                return new ResponseEntity<>("{\"code\":\"2U0\", \"message\":\"" + CODE2U0.getMessage() + "\", \"user\":\"" + user.getLogin() + "\"}", HttpStatus.OK);
            }
        } else {
            return new ResponseEntity<>("{\"code\":\"4U1\", \"message\":\"" + CODE4U1.getMessage() + "\"}", HttpStatus.ACCEPTED);
        }
    }

    @PostMapping("api/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        if (userRepository.findByLogin(user.getLogin()) != null) {
            return new ResponseEntity<>("{\"code\":\"4U3\", \"message\":\"" + CODE4U3.getMessage() + "\"}", HttpStatus.CONFLICT);
        } else {
            user.setHashPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            return new ResponseEntity<>("{\"code\":\"2U1\", \"message\":\"" + CODE2U1.getMessage() + "\", \"user\":\"" + user.getLogin() + "\"}", HttpStatus.CREATED);
        }
    }
}