package ru.nadya.webLab4.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import ru.nadya.webLab4.models.User;
import ru.nadya.webLab4.repositories.UserRepository;

@Controller
public class UserController {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("api/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        if(userRepository.findByLogin(user.getLogin()) != null){
            
        }
        return new ResponseEntity<>("user added " + user.getLogin() + user.getName(), HttpStatus.CREATED);
    }

    @PostMapping("api/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if(userRepository.findByLogin(user.getLogin()) != null){
            return new ResponseEntity<>("Пользователь уже существует", HttpStatus.CONFLICT);
        }
        user.setHashPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return new ResponseEntity<>("user added " + user.getLogin() + user.getName(), HttpStatus.CREATED);
    }
}
