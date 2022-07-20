package com.example.tech57.services;

import com.example.tech57.models.Encadrant;
import com.example.tech57.repositories.EncadrantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EncadrantServiceImplementation implements EncadrantService {

    @Autowired
    EncadrantRepository erepository;


    @Override
    public Encadrant ajouterEncadrant(Encadrant encadrant) {
        erepository.save(encadrant);
        return encadrant;
    }

}
