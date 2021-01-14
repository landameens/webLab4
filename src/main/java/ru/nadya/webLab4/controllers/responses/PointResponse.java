package ru.nadya.webLab4.controllers.responses;

import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@NoArgsConstructor
public class PointResponse implements Response {
    public String result;
    public String user;
}
