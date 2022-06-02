package com.github.williamjbf.app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
class TestConnection {

    @GetMapping
    public String sucesso(){
        return "Sucesso";
    }
}
