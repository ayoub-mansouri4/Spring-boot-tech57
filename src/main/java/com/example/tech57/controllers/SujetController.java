package com.example.tech57.controllers;


import com.example.tech57.models.Sujet;
import com.example.tech57.services.SujetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins ="http://localhost:4200/")
@RestController
@RequestMapping("/sujets")
public class SujetController {


    @Autowired
    private SujetService sujetService;

    @PostMapping("/add")
    public Sujet save(@RequestBody Sujet sujet){
        return sujetService.save(sujet);
    }

    @GetMapping("")
    public List<Sujet> getAll(){
        return sujetService.getAll();
    }
}
