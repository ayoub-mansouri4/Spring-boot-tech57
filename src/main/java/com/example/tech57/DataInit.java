package com.example.tech57;

import com.example.tech57.Repositories.AbsenceStagRepository;
import com.example.tech57.Repositories.StagiaireRepository;
import com.example.tech57.Repositories.SujetRepository;
import com.example.tech57.models.Absence_Stag;
import com.example.tech57.models.Stagiaire;
import com.example.tech57.models.Sujet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInit implements CommandLineRunner {
    @Autowired
    StagiaireRepository stagiaireRepository;
    @Autowired
    AbsenceStagRepository absenceStagRepository;
    @Autowired
    SujetRepository sujetRepository;
    @Override
    public void run(String... args) throws Exception {
         Stagiaire stagiare1=new Stagiaire("ayoub0","mansouri1");
        stagiaireRepository.save(stagiare1);

        stagiaireRepository.save(new Stagiaire("ayoub1","mansouri2"));
        stagiaireRepository.save(new Stagiaire("ayoub2","mansouri3"));
        stagiaireRepository.save(new Stagiaire("ayoub3","mansouri4"));

        Absence_Stag absence_stag=new Absence_Stag("28-11-2022",true);
         absence_stag.setStagiaire(stagiare1);
         absenceStagRepository.save(absence_stag);
         sujetRepository.save(new Sujet("jcp1","blabla1"));
         sujetRepository.save(new Sujet("jcp2","blabla2"));
         sujetRepository.save(new Sujet("jcp3","blabla3"));
         sujetRepository.save(new Sujet("jcp4","blabla4"));


    }
}
