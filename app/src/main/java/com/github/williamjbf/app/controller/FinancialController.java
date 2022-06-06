package com.github.williamjbf.app.controller;

import com.github.williamjbf.app.dto.FinancialDto;
import com.github.williamjbf.app.model.Financial;
import com.github.williamjbf.app.repository.FinancialRepository;
import com.github.williamjbf.app.service.FinancialService;
import com.vividsolutions.jts.geom.GeometryFactory;
import com.vividsolutions.jts.geom.PrecisionModel;
import com.vividsolutions.jts.util.GeometricShapeFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/financial")
public class FinancialController {

    @Autowired
    FinancialRepository repository;

    @Autowired
    FinancialService service;

    @GetMapping("/list")
    public List<Financial> list(){
        return repository.findAll();
    }

    @PostMapping("/save")
    public Financial save(@RequestBody FinancialDto financial){
        return service.save(financial);
    }
}
