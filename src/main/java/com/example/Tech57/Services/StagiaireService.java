package com.example.Tech57.Services;

import com.example.Tech57.models.Stagiaire;

import java.util.Collection;

public interface StagiaireService {

    public Stagiaire addStagiaire(Stagiaire s);
    public Collection<Stagiaire> getAllStagiaire();
    public boolean affecterSujet(Long id_sujet,Long id_stag);
}
