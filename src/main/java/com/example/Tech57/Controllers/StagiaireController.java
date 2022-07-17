package com.example.Tech57.Controllers;

//import com.example.Tech57.models.Absence_Stag;
import com.example.Tech57.Services.StagiaireService;
import com.example.Tech57.models.Stagiaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/stag")
public class StagiaireController {
    @Autowired
    StagiaireService stagiaireService;


    @GetMapping("/stagiaire")
    public Collection<Stagiaire> getAllStagiaire(){
        return stagiaireService.getAllStagiaire();
    }
    @PostMapping("/stagiaire")
    public Stagiaire addStagiaire(@RequestBody  Stagiaire s){
        return stagiaireService.addStagiaire(s);
    }
    @GetMapping("/affecterSujet/{id_stag}/{id_sujet}")
    public  ResponseEntity<Boolean> affecterSujet(@PathVariable("id_stag") Long id_stag,@PathVariable("id_sujet") Long id_sujet){
        return  new ResponseEntity<Boolean>(stagiaireService.affecterSujet(id_sujet,id_stag),HttpStatus.OK);
    }


}