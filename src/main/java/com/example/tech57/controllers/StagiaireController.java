package com.example.tech57.controllers;

import com.example.tech57.models.Absence_Stag;
import com.example.tech57.models.Encadrant;
import com.example.tech57.models.Stagiaire;
import com.example.tech57.repositories.EncadrantRepository;
import com.example.tech57.repositories.StagiaireRepository;
import com.example.tech57.services.StagiaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.Collection;
import java.util.List;


@CrossOrigin(origins ="http://localhost:4200/")
@RestController
@RequestMapping("/stag")
public class StagiaireController {
    @Autowired
    StagiaireService stagiaireService;
    @Autowired
    EncadrantRepository encadrantRepository;
    @Autowired
    StagiaireRepository stagiaireRepository;

    @GetMapping("/stagiaire")
    public List<Stagiaire> getAllStagiaire(){
        return stagiaireService.getAllStagiaire();
    }

    @GetMapping("/getStagiaire/{id_stag}")
    public Stagiaire getStagiaire(@PathVariable("id_stag") Long id_stag){
      return   stagiaireRepository.findById(id_stag).get();
    }

    @PostMapping("/stagiaire")
    public Stagiaire addStagiaire(@RequestBody  Stagiaire s){
        return stagiaireService.addStagiaire(s);
    }

   @PostMapping("/ajouterEncadrant")
   public Encadrant ajouterEncadrant(@RequestBody Encadrant e){
        return encadrantRepository.save(e);
   }

    @GetMapping("/listerEncadrants")
    public List<Encadrant> listerEncadrants(){
        return encadrantRepository.findAll();
    }



    @PostMapping("/absenceStag/{id_stag}")
    public ResponseEntity<Boolean> absenceStagiaire(@RequestBody Absence_Stag absence_stag, @PathVariable("id_stag") Long id_stag){
        return new ResponseEntity<Boolean>(stagiaireService.ajouterAbsence(absence_stag,id_stag)!=null, HttpStatus.OK);
    }
    @GetMapping("/affecterSujet/{id_stag}/{id_sujet}")
    public  ResponseEntity<Boolean> affecterSujet(@PathVariable("id_stag") Long id_stag,@PathVariable("id_sujet") Long id_sujet){
        return  new ResponseEntity<Boolean>(stagiaireService.affecterSujet(id_sujet,id_stag),HttpStatus.OK);
    }

    @GetMapping("/affecterEncadrant/{id_stagiaire}/{id_encadrant}")
    public ResponseEntity<Boolean> affecterEncadrant(@PathVariable("id_encadrant") Long id_encadrant, @PathVariable("id_stagiaire") Long id_stagiaire) {
        return new ResponseEntity<Boolean>(stagiaireService.affecterEncadrant(id_encadrant, id_stagiaire), HttpStatus.OK);
    }


}
