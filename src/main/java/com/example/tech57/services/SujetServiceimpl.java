package com.example.tech57.services;

import com.example.tech57.models.Sujet;
import com.example.tech57.repositories.SujetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class SujetServiceimpl implements SujetService{
    @Autowired
    private SujetRepository sujetRepository;
    @Override
    public Sujet save(Sujet sujet) {

        return sujetRepository.save(sujet);
    }

    @Override
    public List<Sujet> getAll() {
        return sujetRepository.findAll();
    }


}
