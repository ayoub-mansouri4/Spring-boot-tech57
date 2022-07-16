package com.example.tech57.services;

import com.example.tech57.Repositories.AbsenceStagRepository;
import com.example.tech57.Repositories.StagiaireRepository;
import com.example.tech57.Repositories.SujetRepository;
import com.example.tech57.models.Absence_Stag;
import com.example.tech57.models.Stagiaire;
import com.example.tech57.models.Sujet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class StagiaireServiceImpl implements StagiaireService {
    @Autowired
    StagiaireRepository stagiaireRepository;
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
}
