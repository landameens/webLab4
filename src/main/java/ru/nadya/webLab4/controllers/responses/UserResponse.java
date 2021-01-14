package ru.nadya.webLab4.controllers.responses;

import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@NoArgsConstructor
public class UserResponse implements Response {
    public String code;
    public String message;
    private String user;

    public String getUser() {
        return user;
    }
}
