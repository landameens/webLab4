package ru.nadya.webLab4.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.nadya.webLab4.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByLogin(String login);
}
