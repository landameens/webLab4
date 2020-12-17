package ru.nadya.webLab4.models.utils;

public enum Status {
    CODE4U1 ("User doesn't exist"),
    CODE4U2 ("Password don't match"),
    CODE4U3 ("User already exist"),
    CODE2U0 ("User logged in successfully"),
    CODE2U1 ("User registered successfully"),
    ;

    private final String message;

    Status(String message) {
        this.message = message;
    }
    public String getMessage(){
        return message;
    }
}