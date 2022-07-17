package com.example.Tech57.Services;

import com.example.Tech57.Repositories.StagiaireRepository;
import com.example.Tech57.Repositories.SujetRepository;
import com.example.Tech57.models.Stagiaire;
import com.example.Tech57.models.Sujet;
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
    public Collection<Stagiaire> getAllStagiaire(){
        return stagiaireRepository.findAll();
    }
    public Stagiaire addStagiaire(Stagiaire s){
        return stagiaireRepository.save(s);
    }
    SujetRepository sujetRepository;

    @Override
    public boolean affecterSujet(Long id_sujet, Long id_stag) {
        Stagiaire  stagiaire=stagiaireRepository.findById(id_stag).get();
        stagiaire.setSujet(sujetRepository.findById(id_sujet).get());
        return stagiaireRepository.save(stagiaire).getSujet()!=null;
    }
}
