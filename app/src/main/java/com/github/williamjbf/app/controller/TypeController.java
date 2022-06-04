package com.github.williamjbf.app.controller;

import com.github.williamjbf.app.model.TypeFinancial;
import com.github.williamjbf.app.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/type")
public class TypeController {

    @Autowired
    TypeRepository repository;

    @GetMapping("/list")
    public List<TypeFinancial> list(){
        return repository.findAll();
    }

    @PostMapping("/save")
    public TypeFinancial save(@RequestBody TypeFinancial typeFinancial){
        return repository.save(typeFinancial);
    }

}
