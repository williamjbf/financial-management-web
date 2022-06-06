package com.github.williamjbf.app.controller;

import com.github.williamjbf.app.model.CategoryFinancial;
import com.github.williamjbf.app.model.TypeFinancial;
import com.github.williamjbf.app.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    CategoryRepository repository;

    @GetMapping("/list")
    public List<CategoryFinancial> list(){
        return repository.findAll();
    }

    @GetMapping("/find")
    public CategoryFinancial findByDescription(@RequestParam("description") String description){
        return repository.findByDescription(description);
    }

    @PostMapping("/save")
    public CategoryFinancial save(@RequestBody CategoryFinancial categoryFinancial){
        return repository.save(categoryFinancial);
    }
}
