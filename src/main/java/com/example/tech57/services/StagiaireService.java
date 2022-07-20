package com.example.tech57.services;

import com.example.tech57.models.Absence_Stag;
import com.example.tech57.models.Stagiaire;

import java.util.Collection;
import java.util.List;

public interface StagiaireService {
    public Absence_Stag ajouterAbsence(Absence_Stag absence_stag,Long id_stag);
    public boolean affecterSujet(Long id_sujet,Long id_stag);

    public Stagiaire addStagiaire(Stagiaire s);
    public List<Stagiaire> getAllStagiaire();

    public boolean affecterEncadrant(Long id_encadrant, Long id_stagiaire);
}
