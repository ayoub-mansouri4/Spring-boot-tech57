package com.example.tech57.Controllers;

import com.example.tech57.models.Absence_Stag;
import com.example.tech57.services.StagiaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/stag")
public class StagiaireController {
    @Autowired
    StagiaireService stagiaireService;

     @PostMapping("/absenceStag/{id_stag}")
    public ResponseEntity<Boolean> absenceStagiaire(@RequestBody Absence_Stag absence_stag, @PathVariable("id_stag") Long id_stag){
         return new ResponseEntity<Boolean>(stagiaireService.ajouterAbsence(absence_stag,id_stag)!=null, HttpStatus.OK);
     }
    @GetMapping("/affecterSujet/{id_stag}/{id_sujet}")
    public  ResponseEntity<Boolean> affecterSujet(@PathVariable("id_stag") Long id_stag,@PathVariable("id_sujet") Long id_sujet){
         return  new ResponseEntity<Boolean>(stagiaireService.affecterSujet(id_sujet,id_stag),HttpStatus.OK);
    }


}
