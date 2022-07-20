package com.example.tech57.services;


import com.example.tech57.models.Absence_Stag;
import com.example.tech57.models.Stagiaire;
import com.example.tech57.repositories.AbsenceStagRepository;
import com.example.tech57.repositories.EncadrantRepository;
import com.example.tech57.repositories.StagiaireRepository;
import com.example.tech57.repositories.SujetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;

@Service
@Transactional
public class StagiaireServiceImpl implements StagiaireService {
    @Autowired
    StagiaireRepository stagiaireRepository;

    @Autowired
    EncadrantRepository encadrantRepository;
    @Autowired
    AbsenceStagRepository absenceStagRepository;
    @Autowired
    SujetRepository sujetRepository;
    @Override
    public Absence_Stag ajouterAbsence(Absence_Stag absence_stag, Long id_stag) {
        absence_stag.setStagiaire(stagiaireRepository.findById(id_stag).get());
        return absenceStagRepository.save(absence_stag);
    }

    @Override
    public boolean affecterSujet(Long id_sujet, Long id_stag) {
        Stagiaire  stagiaire=stagiaireRepository.findById(id_stag).get();
        stagiaire.setSujet(sujetRepository.findById(id_sujet).get());
        return stagiaireRepository.save(stagiaire).getSujet()!=null;
    }

    @Override
    public Stagiaire addStagiaire(Stagiaire s){
        return stagiaireRepository.save(s);
    }

    @Override
    public List<Stagiaire> getAllStagiaire(){
        return stagiaireRepository.findAll();
    }

    @Override
    public boolean affecterEncadrant(Long id_encadrant, Long id_stagiaire) {
        Stagiaire stagiaire = stagiaireRepository.findById(id_stagiaire).get();
        stagiaire.setEncadrant(encadrantRepository.findById(id_encadrant).get());
        return stagiaireRepository.save(stagiaire).getEncadrant()!=null;
    }
}
